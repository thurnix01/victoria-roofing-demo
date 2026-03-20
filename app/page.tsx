import LeadForm from "@/components/LeadForm";

const services = [
  {
    title: "Roof Repairs",
    description:
      "Stop leaks quickly with durable repairs that protect your home from West Coast rain and wind.",
  },
  {
    title: "Roof Replacement",
    description:
      "Upgrade aging shingles with a complete roofing system built for Victoria's coastal climate.",
  },
  {
    title: "Emergency Leak Service",
    description:
      "Get urgent response for active leaks, storm damage, and sudden roofing failures before they worsen.",
  },
];

const testimonials = [
  {
    quote:
      "After a major windstorm, they had our roof patched the same day and explained every step clearly.",
    author: "Mike R. - Langford",
  },
  {
    quote:
      "Professional crew, fair quote, and clean job site. Our new roof looks great and our attic is finally dry.",
    author: "Sarah T. - Saanich",
  },
  {
    quote:
      "Fast communication and honest recommendations. We felt taken care of from the first call to final cleanup.",
    author: "Daniel L. - Victoria",
  },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.7),rgba(15,23,42,0.88)),url('/roofline.svg')] bg-cover bg-center" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm font-medium text-slate-100 backdrop-blur">
                Victoria, BC Roofing Company
              </p>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Victoria Roofing Experts - Fast Repairs &amp; Free Quotes
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-100">
                Trusted local roofers serving Greater Victoria. Same-day response.
              </p>
              <div className="mt-8">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-orange-600"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-5 text-sm font-semibold text-slate-700 sm:grid-cols-4 sm:px-6 lg:px-8">
            <p>Licensed &amp; Insured</p>
            <p>5-Star Rated</p>
            <p>Serving Victoria, Langford, Saanich</p>
            <p>Fast Turnaround</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Roofing Services</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Practical solutions for leaks, aging roofs, and storm damage, backed by experienced local installers.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-100">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Trusted by Homeowners Across Greater Victoria
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <article
                  key={testimonial.author}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-slate-700">&quot;{testimonial.quote}&quot;</p>
                  <p className="mt-4 text-sm font-semibold text-slate-900">{testimonial.author}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="lead-form" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Get Your Free Roofing Quote
              </h2>
              <p className="mt-4 text-slate-600">
                Tell us about your roofing issue and we will provide straightforward pricing with no pressure. Ideal
                for homeowners, strata, and local businesses.
              </p>
              <ul className="mt-6 space-y-2 text-slate-700">
                <li>Same-day callbacks during business hours</li>
                <li>Detailed scope and transparent recommendations</li>
                <li>Reliable scheduling and professional cleanup</li>
              </ul>
            </div>
            <LeadForm />
          </div>
        </section>

        <section className="bg-slate-900 py-14 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/15 bg-white/5 p-7 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-2xl font-bold">Storm Damage? Get Help Today</h2>
                <p className="mt-2 text-slate-200">
                  Book a rapid roof assessment and prevent water damage from getting worse.
                </p>
              </div>
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Book Emergency Inspection
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 pb-24 pt-10 text-slate-200 sm:pb-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-lg font-semibold text-white">Harbour Peak Roofing</p>
            <p className="text-sm text-slate-300">Reliable roofing services for homes and businesses in Victoria, BC.</p>
          </div>
          <div>
            <a
              href="tel:+12505550198"
              className="text-lg font-semibold text-orange-400 transition hover:text-orange-300"
            >
              Call 250-555-0198
            </a>
            <p className="text-sm text-slate-400">Licensed professionals. Honest advice. Work done right.</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <a
          href="#lead-form"
          className="inline-flex w-full items-center justify-center rounded-xl bg-orange-500 px-5 py-3 text-base font-semibold text-white shadow-md transition hover:bg-orange-600"
        >
          Get Free Quote
        </a>
      </div>
    </div>
  );
}
