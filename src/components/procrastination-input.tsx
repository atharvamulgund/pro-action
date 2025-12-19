import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProcrastinationInputProps {
  onSubmit: (topic: string) => void;
}

export default function ProcrastinationInput({
  onSubmit,
}: ProcrastinationInputProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Please enter what you're procrastinating about");
      return;
    }
    setError("");
    onSubmit(input.trim());
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
          Step 1 of 3
        </div>
        <h1 className="text-5xl font-bold text-white text-balance leading-tight">
          What are you procrastinating about?
        </h1>
        <p className="text-lg text-slate-400">
          Be specific. The more detail you provide, the better your personalized
          action plan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="E.g., I need to finish my project proposal but keep checking social media instead..."
            className="w-full min-h-40 p-4 rounded-xl border border-slate-700/50 bg-slate-900/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 resize-none transition-all"
          />
          {error && (
            <p className="text-sm text-red-400 mt-2 flex items-center gap-1">
              <span>⚠️</span> {error}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all"
        >
          Continue →
        </Button>
      </form>

      <div className="bg-linear-to-r from-slate-900/50 to-slate-800/30 border border-slate-700/30 p-6 rounded-xl backdrop-blur-sm">
        <p className="text-sm text-slate-300">
          <span className="font-semibold text-cyan-400">✨ AI-Powered:</span> We
          analyze your situation and generate personalized strategies to
          overcome procrastination.
        </p>
      </div>
    </div>
  );
}
