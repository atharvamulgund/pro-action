

import { Button } from "@/components/ui/button";

interface MetricsFormProps {
  topic: string;
  metrics: {
    deadline: string;
    urgency: string;
    impact: string;
    obstacles: string;
    motivation: string;
  };
  setMetrics: (metrics: any) => void;
  onSubmit: () => void;
  loading: boolean;
}

export default function MetricsForm({
  topic,
  metrics,
  setMetrics,
  onSubmit,
  loading,
}: MetricsFormProps) {
  const handleChange = (field: string, value: string) => {
    setMetrics({ ...metrics, [field]: value });
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
          Step 2 of 3
        </div>
        <h2 className="text-4xl font-bold text-white">Let's dig deeper</h2>
        <p className="text-slate-400">
          Answer a few questions so we can create a personalized action plan
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="space-y-6 bg-slate-900/30 border border-slate-700/30 p-8 rounded-xl backdrop-blur-sm"
      >
        <div className="space-y-3">
          <label className="block text-sm font-semibold text-white">
            When is your deadline?
          </label>
          <input
            type="date"
            value={metrics.deadline}
            onChange={(e) => handleChange("deadline", e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-700/50 bg-slate-800/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-semibold text-white">
              How urgent is this? (1-10)
            </label>
            <span className="text-xs font-medium px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded">
              {metrics.urgency} -{" "}
              {+metrics.urgency <= 3
                ? "Low"
                : +metrics.urgency <= 6
                ? "Medium"
                : "High"}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={metrics.urgency}
            onChange={(e) => handleChange("urgency", e.target.value)}
            className="w-full cursor-pointer accent-cyan-500"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-white">
            What's the impact if you don't complete this?
          </label>
          <textarea
            value={metrics.impact}
            onChange={(e) => handleChange("impact", e.target.value)}
            placeholder="E.g., I'll miss the client deadline and lose credibility..."
            className="w-full px-4 py-3 rounded-lg border border-slate-700/50 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 resize-none min-h-24 transition-all"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-white">
            What's stopping you from starting?
          </label>
          <textarea
            value={metrics.obstacles}
            onChange={(e) => handleChange("obstacles", e.target.value)}
            placeholder="E.g., Feeling overwhelmed, not knowing where to start, perfectionism..."
            className="w-full px-4 py-3 rounded-lg border border-slate-700/50 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 resize-none min-h-24 transition-all"
          />
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-semibold text-white">
            What motivates you most?
          </label>
          <textarea
            value={metrics.motivation}
            onChange={(e) => handleChange("motivation", e.target.value)}
            placeholder="E.g., Sense of accomplishment, helping others, personal growth..."
            className="w-full px-4 py-3 rounded-lg border border-slate-700/50 bg-slate-800/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 resize-none min-h-24 transition-all"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-6 rounded-xl transition-all"
          disabled={loading}
        >
          {loading
            ? "Generating your solution..."
            : "Generate My Action Plan →"}
        </Button>
      </form>
    </div>
  );
}
