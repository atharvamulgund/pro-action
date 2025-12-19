import { Link } from '@tanstack/react-router'
import {
  CheckCircle,
  Zap,
  Shield,
  BarChart,
  ArrowRight,
  Play,
  BrainCircuit,
} from "lucide-react";

const Landing = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] text-slate-200 selection:bg-cyan-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background linears */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Now powered by GPT-4o
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 text-balance leading-[1.1]">
              Turn Procrastination into{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                Pure Progress
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
              ProAction uses targeted psychometrics and AI-driven strategies to
              break your inertia. Stop waiting for motivation. Start with a
              plan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/get-started"
                className="group relative flex items-center justify-center px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/25"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS/TRUST SECTION */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
                Tasks Completed
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
                User Success Rate
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">6min</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
                Avg. Start Time
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-slate-500 text-sm uppercase tracking-wider font-semibold">
                Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES/HOW IT WORKS (Bento Grid Style) */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase mb-4">
              The Methodology
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for Chronic Do-Latters
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              We don't just give you a checklist. We identify the psychological
              blockers holding you back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-[240px]">
            {/* Feature 1 */}
            <div className="md:col-span-2 row-span-1 p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all group overflow-hidden relative">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <Zap className="text-cyan-400 mb-4 w-8 h-8" />
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Smart Psychometric Analysis
                  </h4>
                  <p className="text-slate-400 max-w-md">
                    Our algorithm asks the right questions to understand if
                    you're blocked by fear, overwhelm, or lack of clarity.
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-cyan-500/10 transition-colors" />
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
              <BarChart className="text-blue-500 w-8 h-8" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  Metric Tracking
                </h4>
                <p className="text-slate-400 text-sm">
                  Visualize your procrastination patterns over time and see your
                  focus improve.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all flex flex-col justify-between">
              <Shield className="text-indigo-500 w-8 h-8" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">
                  No-Fluff Solutions
                </h4>
                <p className="text-slate-400 text-sm">
                  No motivational quotes. Just concrete, tiny first steps
                  tailored to your context.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="md:col-span-2 p-8 rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-8 group">
              <div className="flex-1">
                <h4 className="text-2xl font-bold text-white mb-4">
                  Immediate Action Trigger
                </h4>
                <p className="text-slate-400">
                  Our solutions include an 'Immediate Action' prompt designed to
                  bypass the amygdala's fear response.
                </p>
              </div>
              <div className="hidden sm:block p-4 bg-slate-950 rounded-2xl border border-slate-700 group-hover:-translate-y-2 transition-transform">
                <div className="space-y-2">
                  <div className="h-2 w-24 bg-cyan-500/50 rounded" />
                  <div className="h-2 w-16 bg-slate-700 rounded" />
                  <div className="h-2 w-20 bg-slate-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STEPS/PROCESS SECTION */}
      <section className="py-24 bg-slate-900/30">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-20">
              Three Steps to Momentum
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Unload Your Mind",
                  desc: "Type out exactly what's weighing on you. No judgment, just the raw task.",
                },
                {
                  step: "02",
                  title: "Analyze the Friction",
                  desc: "Identify the deadline, your current energy level, and what specifically feels hard.",
                },
                {
                  step: "03",
                  title: "Get Your Entry Point",
                  desc: "Receive a specialized micro-task that takes less than 2 minutes to start.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="shrink-0 text-5xl font-black text-slate-800 group-hover:text-cyan-500/20 transition-colors tabular-nums">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA / FINAL SECTION */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5" />
        <div className="max-w-5xl mx-auto relative z-10 text-center px-8 py-16 rounded-[2.5rem] bg-linear-to-b from-slate-900 to-[#020617] border border-slate-800 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Stop Dreaming.{" "}
            <span className="text-cyan-400">Start Executing.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the 100+ professionals who have stopped waiting for the
            "perfect time" and started building their future.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link
              to="/get-started"
              className="px-12 py-5 rounded-2xl bg-white text-black font-bold text-xl hover:bg-cyan-500 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Get Started for Free
            </Link>
            <p className="text-slate-500 text-sm flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-cyan-500" /> Free for now, until procastinator count is less
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-800">
        <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 " />
            <BrainCircuit className="rounded-lg bg-linear-to-br from-cyan-400 to-blue-600 size-8 p-2" />
            <span className="text-xl font-bold text-white tracking-tight">
              ProAction
            </span>
          </div>
          <div className="flex gap-2 text-slate-500 text-md">
            Made with {"<"}3 while procasting by{" "}
            <a href="https://atharvamulgund.web.app/" target="_blank">
              Atharva Mulgund
            </a>
          </div>
          <p className="text-slate-600 text-xs">
            © 2025 ProAction AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Landing