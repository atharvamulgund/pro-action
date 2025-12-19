import { Link } from '@tanstack/react-router'

const Landing = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
              Stop Procrastinating.
              <br />
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Start Doing.
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-balance">
              Get AI-powered action plans tailored to your procrastination challenges. Answer simple questions and
              receive a personalized solution to overcome delays and build momentum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/get-started"
                className="px-8 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                Get Started Free
              </Link>
              {/* <Link
                to="#features"
                className="px-8 py-3 rounded-lg border border-slate-600 text-white font-semibold hover:bg-slate-800/50 transition-colors"
              >
                Learn More
              </Link> */}
            </div>

            {/* Hero Gradient Background Element */}
            <div className="relative h-96 sm:h-125">
              <div className="absolute inset-0 bg-linear-to-b from-cyan-500/20 to-transparent rounded-2xl blur-3xl opacity-50" />
              <div className="absolute inset-0 border border-cyan-500/20 rounded-2xl backdrop-blur" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16 text-balance">How ProAction Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Name Your Task</h3>
              <p className="text-slate-300">
                Tell us what you're procrastinating about. Whether it's work, personal projects, or anything else, we're
                here to help.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Share Context</h3>
              <p className="text-slate-300">
                Answer targeted questions about deadlines, urgency, obstacles, and your motivation to paint a complete
                picture.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
              <div className="w-12 h-12 bg-linear-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Get AI Solution</h3>
              <p className="text-slate-300">
                Receive a personalized action plan powered by AI that addresses your specific situation and helps you
                take the first step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-balance">Ready to Break the Procrastination Cycle?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of users who are already overcoming procrastination with AI-powered guidance.
          </p>
          <Link
            to="/get-started"
            className="inline-block px-10 py-4 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-lg"
          >
            Start Your Journey Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Landing