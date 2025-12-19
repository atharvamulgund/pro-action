import { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import MetricsForm from "@/components/metrics-form";
import ProcrastinationInput from "@/components/procrastination-input";
import SolutionDisplay from "@/components/solution-display";
import { SignOutButton, useUser } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

type AppStep = "input" | "metrics" | "solution";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [step, setStep] = useState<AppStep>("input");
  const [solution, setSolution] = useState("");
  const [loading, setLoading] = useState(false);
  const [procrastinationTopic, setProcrastinationTopic] = useState("");

  // ✅ RESTORED metrics state
  const [metrics, setMetrics] = useState({
    deadline: "",
    urgency: "5",
    impact: "",
    obstacles: "",
    motivation: "",
  });

  // ---- Auth check ----
  const { user } = useUser();
  useEffect(() => {
    setIsAuthenticated(true);
  }, [navigate]);

  // ✅ RESTORED handlers
  const handleInputSubmit = (topic: string) => {
    setProcrastinationTopic(topic);
    setStep("metrics");
  };

  const handleMetricsSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          procrastinationTopic: procrastinationTopic,
          metrics,
        }),
      });

      const data = await response.json();
      setSolution(data?.plan);
      setStep("solution");
      toast.success("Plan generated Succefully!");
    } catch (err) {
      toast.error(`Error generating solution:, ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMetrics({
      deadline: "",
      urgency: "5",
      impact: "",
      obstacles: "",
      motivation: "",
    });
    setProcrastinationTopic("");
    setSolution("");
    setStep("input");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="border-b border-slate-800/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex justify-center items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src={user?.imageUrl} alt="@shadcn" />
              <AvatarFallback className="uppercase">
                {user?.fullName?.split("")[0]?.split("")[0]}
                {user?.fullName?.split("")[1]?.split("")[0]}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold text-slate-200">
                Welcome back
              </h2>
              <p className="text-sm text-slate-400">{user?.fullName || "User"}</p>
            </div>
          </div>
          <Button className="px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800/50 cursor-pointer">
            <SignOutButton />
          </Button>
        </div>
      </div>

      {/* Main */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-4 py-12">
        <div className="w-full max-w-2xl">
          {step === "input" && (
            <ProcrastinationInput onSubmit={handleInputSubmit} />
          )}

          {step === "metrics" && (
            <MetricsForm
              topic={procrastinationTopic}
              metrics={metrics}
              setMetrics={setMetrics}
              onSubmit={handleMetricsSubmit}
              loading={loading}
            />
          )}

          {step === "solution" && (
            <SolutionDisplay
              topic={procrastinationTopic}
              solution={solution}
              onReset={handleReset}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard