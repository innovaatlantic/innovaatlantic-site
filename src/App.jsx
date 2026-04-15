export default function App() {
  const services = [
    {
      title: "AI Strategy",
      description:
        "Translate ambitious ideas into practical roadmaps across data, analytics, automation, and AI-enabled decision making.",
    },
    {
      title: "Biotech & Health Innovation",
      description:
        "Support innovation programs spanning therapeutics, vaccines, diagnostics, translational science, and digital R&D ecosystems.",
    },
    {
      title: "Partnership Development",
      description:
        "Connect academia, healthcare, government, and industry to build high-impact collaborations and scalable innovation platforms.",
    },
    {
      title: "Program Design",
      description:
        "Shape initiatives, proposals, and growth plans that move from concept to measurable implementation.",
    },
  ]

  const sectors = [
    "Life Sciences",
    "Healthcare",
    "Biotechnology",
    "Public Health",
    "Research Institutions",
    "Innovation Ecosystems",
  ]

  const approach = [
    "Identify the highest-value opportunity",
    "Design a practical path from idea to execution",
    "Integrate science, data, and stakeholder needs",
    "Build momentum through focused delivery",
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-sky-500/10 to-blue-700/10" />
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <header className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <div>
            <div className="text-2xl font-semibold tracking-tight">InnovaAtlantic</div>
            <div className="text-sm text-slate-300">Innovation at the edge of science, AI, and impact</div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#approach" className="transition hover:text-white">Approach</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-10 lg:grid-cols-2 lg:px-10 lg:pb-28 lg:pt-16">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm text-cyan-200 backdrop-blur">
              Atlantic-rooted • Globally connected
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Building innovation platforms that connect science, AI, and real-world outcomes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              InnovaAtlantic helps organizations design bold, practical strategies across health, biotech, research,
              and emerging technology—turning complex opportunities into focused action.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/10 transition hover:-translate-y-0.5"
              >
                Start a Conversation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Strategic Advisory",
                "AI-Enabled Innovation",
                "Research Translation",
                "Cross-Sector Partnerships",
                "Program Design",
                "Execution Focus",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-cyan-300/10 bg-slate-900/80 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">What we do</div>
                    <div className="mt-2 text-2xl font-semibold">From vision to momentum</div>
                  </div>
                  <div className="rounded-2xl bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">Focused impact</div>
                </div>
                <div className="space-y-4">
                  {[
                    ["Strategy", "Clarify goals, priorities, and decision points"],
                    ["Design", "Create initiatives, platforms, and partnerships"],
                    ["Translate", "Bridge science, data, and practical execution"],
                    ["Scale", "Enable sustainable growth and external engagement"],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-base font-medium">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-300">{text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">About</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">A modern partner for innovation leadership</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              InnovaAtlantic was created to help organizations navigate high-value innovation at the intersection of
              science, technology, and strategy. We work with leaders who need more than ideas—they need clear
              direction, thoughtful design, and practical pathways to execution.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              Whether the opportunity involves AI, biotech, public health, translational research, or ecosystem-building,
              our role is to shape initiatives that are ambitious, credible, and built for impact.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Clarity", "Define what matters most and where to focus first."],
              ["Credibility", "Build strategies grounded in science, data, and execution realities."],
              ["Connection", "Link stakeholders, institutions, and partners around shared outcomes."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div className="text-xl font-medium">{title}</div>
                <div className="mt-2 text-slate-300 leading-7">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">Services</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Strategic services for high-impact organizations</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Designed for founders, institutions, research leaders, public-sector teams, and companies building in complex environments.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6 shadow-xl">
                <div className="text-xl font-semibold">{service.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">Approach</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
            <div className="mt-8 space-y-4">
              {approach.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-200">
                    {index + 1}
                  </div>
                  <div className="text-lg text-slate-200">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-400/10 to-cyan-300/5 p-8">
              <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">Focus areas</div>
              <h3 className="mt-3 text-2xl font-semibold">Where InnovaAtlantic adds value</h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {sectors.map((sector) => (
                  <span key={sector} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                    {sector}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-300 leading-7">
                We help teams frame the opportunity, align partners, define the pathway, and build the conditions needed for meaningful progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">Why InnovaAtlantic</div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Built for complex, high-trust work</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Innovation succeeds when scientific ambition, strategic clarity, and real execution discipline move together. InnovaAtlantic brings those elements into one focused partner model.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Science-aware strategy",
                "AI-informed thinking",
                "Partnership-centered execution",
                "Clear, decision-ready outputs",
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-900 p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <div className="text-sm uppercase tracking-[0.18em] text-cyan-200">Contact</div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let’s build something meaningful</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Ready to shape a new initiative, strengthen a strategy, or explore collaboration? Reach out and start the conversation.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email: hello@innovaatlantic.com</div>
              <div>Location: Atlantic Canada / Remote</div>
              <div>Focus: Strategy, science, AI, and innovation partnerships</div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Your name"
              />
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Email address"
              />
              <input
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Organization"
              />
              <textarea
                className="min-h-[140px] rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none placeholder:text-slate-500"
                placeholder="Tell us a bit about your project or idea"
              />
              <button className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 transition hover:-translate-y-0.5">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-sm text-slate-400 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>© 2026 InnovaAtlantic. All rights reserved.</div>
          <div>innovaatlantic.com</div>
        </div>
      </footer>
    </div>
  )
}
