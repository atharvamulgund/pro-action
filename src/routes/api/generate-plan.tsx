import { createFileRoute } from "@tanstack/react-router";
import { json } from "@tanstack/react-start";
import OpenAI from "openai";

// ✅ Server-only env variable
const openai = new OpenAI({
  apiKey: process.env.VITE_OPEN_AI_API_KEY,
});

export const Route = createFileRoute("/api/generate-plan")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();
          const { procrastinationTopic, metrics } = body;

          // ---- Validation ----
          if (
            !procrastinationTopic ||
            !metrics ||
            !metrics.deadline ||
            !metrics.urgency
          ) {
            return json({ error: "Invalid payload" }, { status: 400 });
          }

          // ---------- PRE-PROMPT (SYSTEM) ----------
          const systemPrompt = `
You are a productivity coach and behavioral psychologist.

Rules:
- Be practical, not motivational
- Focus on execution
- Avoid fluff
- Output valid MDX only

Formatting:
- Use ## headings
- Bullet points
- Checklists
- A 7-day execution plan

Tone:
- Calm
- Direct
- Action-oriented
`;

          // ---------- USER PROMPT ----------
          const userPrompt = `
Topic:
"${procrastinationTopic}"

Metrics:
- Deadline: ${metrics.deadline}
- Urgency (1-10): ${metrics.urgency}
- Impact: ${metrics.impact}
- Obstacles: ${metrics.obstacles}
- Motivation: ${metrics.motivation}

Generate a clear, actionable plan now.
`;

          // ---------- OpenAI Call ----------
          const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            temperature: 0.4,
            messages: [
              { role: "system", content: systemPrompt },
              { role: "user", content: userPrompt },
            ],
          });

          const plan =
            completion.choices[0]?.message?.content ??
            "Failed to generate plan.";

          return json({
            plan, // ✅ MDX string
          });
        } catch (err: any) {
          console.error("AI generation error:", err);

          // ---- Quota / rate limit ----
          if (err?.status === 429) {
            return json(
              {
                error: "AI quota exceeded. Please try again later.",
              },
              { status: 429 }
            );
          }

          // ---- Generic failure ----
          return json(
            {
              error: "Failed to generate plan.",
            },
            { status: 500 }
          );
        }
      },
    },
  },
});
