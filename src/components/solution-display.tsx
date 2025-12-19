import { Button } from "@/components/ui/button";
import MarkdownRenderer from "./MarkdownRenderer";
import { toast } from "sonner";

interface SolutionDisplayProps {
  topic: string;
  solution: string;
  onReset: () => void;
}

export default function SolutionDisplay({
  topic,
  solution,
  onReset,
}: SolutionDisplayProps) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(solution);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Failed to copy");
    }
  };
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="space-y-2">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400">
          Step 3 of 3 - Your Action Plan
        </div>
        <h2 className="text-4xl font-bold text-white">
          Your personalized action plan
        </h2>
        <p className="text-slate-400">
          Based on your responses about:{" "}
          <span className="text-cyan-400 font-medium">{topic}</span>
        </p>
      </div>

      <div className="bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/30 p-8 rounded-xl backdrop-blur-sm space-y-4">
        <div className="prose prose-invert prose-sm max-w-none text-slate-200 whitespace-pre-wrap text-balance leading-relaxed">
          <MarkdownRenderer content={solution} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={onReset}
          variant="outline"
          size="lg"
          className="flex-1 border-slate-700/50 bg-slate-900/30 hover:bg-slate-800/50 text-white hover:text-white rounded-xl cursor-pointer"
        >
          ↻ Get Another Plan
        </Button>
        <Button
          onClick={handleCopy}
          size="lg"
          className="cursor-pointer flex-1 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all"
        >
          💾 Save This Plan
        </Button>
      </div>

      <div className="bg-linear-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 p-6 rounded-xl backdrop-blur-sm">
        <p className="text-sm text-slate-200">
          <span className="font-semibold text-cyan-400">⚡ Pro tip:</span> Start
          with the first action step within the next 15 minutes. Small wins
          build momentum and break the procrastination cycle!
        </p>
      </div>
    </div>
  );
}
