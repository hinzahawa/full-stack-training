import Image from "next/image";

const profile = {
  name: "Mervarick HiNz",
  role: "Full Stack Developer",
  location: "Bangkok, Thailand",
  summary:
    "I build practical web products across the frontend, backend, and deployment layer, with a focus on clean user flows, maintainable code, and reliable delivery.",
  email: "mervarick@example.com",
  phone: "+66 00 000 0000",
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

const stats = [
  { value: "4+", label: "Years building web apps" },
  { value: "12", label: "Production projects" },
  { value: "8", label: "Core stack areas" },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Product Engineering",
    period: "2024 - Present",
    points: [
      "Built customer-facing dashboards with Next.js, React, TypeScript, and API-driven workflows.",
      "Designed backend services and database models for product features, reporting, and admin tools.",
      "Improved release confidence with Dockerized environments and automated checks.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Web Platforms",
    period: "2022 - 2024",
    points: [
      "Shipped responsive interfaces, reusable components, and design-system patterns for internal teams.",
      "Integrated REST APIs, auth flows, form validation, and state management in production apps.",
      "Collaborated with backend and product teams to turn requirements into maintainable features.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Internal Tools",
    period: "2020 - 2022",
    points: [
      "Created CRUD tools, reporting pages, and automation scripts for operational workflows.",
      "Maintained SQL queries, bug fixes, and deployment support for legacy applications.",
    ],
  },
];

const stackGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma"],
  },
  {
    title: "DevOps",
    items: ["Docker", "AWS", "GitHub Actions", "Linux", "CI/CD"],
  },
];

const projects = [
  "Resume portfolio with generated PDF download",
  "Admin dashboards for user and content operations",
  "API integrations for authentication, reporting, and analytics",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-[#18201c]">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 gap-8 px-5 py-6 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <aside className="flex flex-col justify-between rounded-[8px] bg-[#18201c] p-6 text-white shadow-2xl shadow-black/10 sm:p-8">
          <div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] border border-white/10 bg-[#25312b]">
              <Image
                src="/profile.svg"
                alt={`${profile.name} portrait`}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="mt-7">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#9ed8c2]">
                {profile.location}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight text-white sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 text-xl text-[#d5e1db]">{profile.role}</p>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#b8c8c1]">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3">
            <a
              href="/resume.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-[8px] bg-[#9ed8c2] px-5 text-sm font-semibold text-[#102019] transition hover:bg-[#b7ead6]"
            >
              Download Resume
            </a>
            <div className="grid gap-2 text-sm text-[#d5e1db]">
              <a className="hover:text-white" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="hover:text-white" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
              <div className="flex flex-wrap gap-3 pt-1">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    className="border-b border-[#9ed8c2]/50 text-[#9ed8c2] hover:border-white hover:text-white"
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col gap-6">
          <section className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[8px] border border-[#dce3df] bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-semibold text-[#1f6f59]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-5 text-[#66736e]">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <section className="rounded-[8px] border border-[#dce3df] bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f59]">
                  Experience
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[#18201c]">
                  Work History
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#66736e]">
                Product-focused engineering across interface work, APIs,
                databases, and delivery pipelines.
              </p>
            </div>

            <div className="mt-7 grid gap-5">
              {experiences.map((experience) => (
                <article
                  key={`${experience.role}-${experience.period}`}
                  className="rounded-[8px] border border-[#e5ebe7] p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[#18201c]">
                        {experience.role}
                      </h3>
                      <p className="text-sm font-medium text-[#1f6f59]">
                        {experience.company}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-[#8a5a21]">
                      {experience.period}
                    </p>
                  </div>
                  <ul className="mt-4 grid gap-2 text-sm leading-6 text-[#55625d]">
                    {experience.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e0a94f]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div className="rounded-[8px] border border-[#dce3df] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f59]">
                Stack
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#18201c]">
                Technologies Used
              </h2>
              <div className="mt-6 grid gap-5">
                {stackGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-[#46534e]">
                      {group.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-[8px] border border-[#dce3df] bg-[#f7f8f5] px-3 py-2 text-sm font-medium text-[#2f3d37]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[8px] border border-[#dce3df] bg-white p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1f6f59]">
                Selected Work
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#18201c]">
                Projects
              </h2>
              <ul className="mt-6 grid gap-4 text-sm leading-6 text-[#55625d]">
                {projects.map((project) => (
                  <li key={project} className="border-l-2 border-[#9ed8c2] pl-4">
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
