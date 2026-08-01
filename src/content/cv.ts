/**
 * Содержимое резюме. Единственный файл, который правят при обновлении CV —
 * компоненты ниже по дереву не знают ни одной строки текста наизусть.
 *
 * Приписки на полях («5 roles», «7 areas») в статической версии стояли
 * руками и врали молча, если забыть их обновить. Здесь они считаются из
 * этих же массивов — см. `sections`.
 */

import { withBasePath } from "@/lib/base-path";

export type Role = {
  title: string;
  org: string;
  url?: string;
  from: string;
  to: string | null; // null = по настоящее время
  location: string;
  /** «contract», «part-time» — если пусто, роль штатная */
  kind?: string;
  points: string[];
};

export type StackArea = {
  area: string;
  tools: string[];
};

export type Entry = {
  key: string;
  value: string;
  href?: string;
  external?: boolean;
};

export type Fact = {
  key: string;
  value: string;
  tone?: "pass";
};

export type Section = {
  /** id якоря и цель ссылки в меню */
  id: string;
  /** ключ раздела на полях документа */
  key: string;
  /** фактическая приписка под ключом */
  note: string;
  /** показывать ли раздел в оглавлении шапки */
  inNav: boolean;
};

/* -------------------------------------------------------------------------- */

export const profile = {
  name: "Konstantin Ivanov",
  initials: "KI",
  role: "SQA Engineer / QA Lead",
  shortRole: "SQA / QA Lead",
  email: "neko.wrk@gmail.com",
  phone: "+38 093 000 3441",
  phoneHref: "+380930003441",
  city: "Limassol",
  country: "Cyprus",
  countryCode: "CY",
  timezone: "UTC+3",
  /** дата ревизии документа: полоса реквизитов и приписка на полях */
  revision: "2026-08",
  since: 2017,
  photo: withBasePath("/img/Kiv.png"),
  cv: withBasePath("/docs/Konstantin_Ivanov_QA_resume_1.pdf"),
  employer: { name: "Bluebricks", url: "https://bluebricks.co" },
  linkedin: {
    handle: "konstantin-ivanov",
    url: "https://www.linkedin.com/in/konstantin-ivanov-21128b86/",
  },
  telegram: { handle: "@null_wrk", url: "https://t.me/null_wrk" },
  github: { handle: "github.com/username", url: "https://github.com/USERNAME" },
} as const;

export const lede =
  "Full-stack QA across web, mobile and backend systems — UI/UX, API and performance testing, CI/CD pipelines, and on-site hardware integrations. I test the parts other people assume are fine.";

export const facts: Fact[] = [
  { key: "status", value: "open to roles", tone: "pass" },
  { key: "based", value: `${profile.city}, ${profile.countryCode}` },
  { key: "experience", value: `${profile.since} → now` },
  { key: "updated", value: profile.revision },
];

export const summary: string[] = [
  "QA Engineer with full-stack testing experience across web, mobile and backend systems — from UI/UX and API testing to performance, CI/CD pipelines and on-site hardware integrations.",
  "Hands-on with test automation in Python, Pytest and Playwright, plus DevOps exposure across Kubernetes, Docker, Terraform and observability stacks. That combination makes debugging faster and the handover to engineering shorter — most failures get root-caused before anyone else has to look at them.",
  "Worked across several industries in both contractor and full-time roles, mostly inside Agile teams.",
];

export const roles: Role[] = [
  {
    title: "QA Lead",
    org: "Bluebricks",
    url: "https://bluebricks.co",
    from: "2025-01",
    to: null,
    location: "Tel Aviv",
    points: [
      "Owned end-to-end quality assurance for the platform CLI interface — from test strategy to execution",
      "Set front-end and back-end coverage targets",
      "Set up UI and api/backend test automation",
      "Run QA reporting for stakeholders",
      "Troubleshoot failures at the infrastructure layer, root-causing environment issues without a hand-off to DevOps",
      "Gate every release end-to-end; weekly releases and hotfixes on demand",
    ],
  },
  {
    title: "QA Lead",
    org: "NDA",
    from: "2023-10",
    to: "2024-05",
    location: "Kyiv, Ukraine",
    kind: "parallel",
    points: [
      "Built and maintained an automated test suite in Pytest and Playwright",
      "Owned QA and maintenance on a Kubernetes cluster running a multi-service web application",
      "Owned QA on messaging between services over RabbitMQ and Kafka",
      "Monitored environment health across AWS and GCP",
      "Reported release readiness on non-schedulable releases"
    ],
  },
  {
    title: "QA Engineer",
    org: "Blackbird Lab",
    url: "https://blackbird-lab.com",
    from: "2022-01",
    to: "2025-01",
    location: "Kyiv, Ukraine",
    points: [
      "Owned quality for a HoloLens 2 AR product and its companion web app, deployed on live construction sites where an inaccurate overlay becomes rework",
      "Built and maintained the test suite, and owned release tracking across AR/Web clients and backend services",
      "Validated BIM (Building Information Modeling) integrations",
      "Tested on-site alongside the engineering team",
      "Covered API behaviour across every integrated third-party service",
    ],
  },
  {
    title: "QA Engineer",
    org: "Togizu Technologies LTD",
    from: "2020-04",
    to: "2022-01",
    location: "Kyiv, Ukraine",
    points: [
      "Covered front-end and API testing across every release",
      "Set up automation framework in Pytest-Playwright, api testing via pytest-requests",
      "Ran the Docker and Kubernetes test environments",
      "Kept the beta environment stable enough to demo to stakeholders on short notice",
      "Verified database consistency and third-party integrations",
      "Owned release tracking and QA documentation",
    ],
  },
  {
    title: "QA Engineer",
    org: "TravelBank",
    url: "https://travelbank.com",
    from: "2018-01",
    to: "2020-03",
    location: "San Francisco",
    points: [
      "Owned QA across web, mobile and API for a travel and expense platform",
      "Designed test plans and cases covering three platforms",
      "Ran and maintained Jenkins pipelines",
      "Reported cycle results to PMs, dev leads and the Head of QA in terms they could make ship decisions on",
    ],
  },
  {
    title: "Testing Services Team",
    org: "Applause Inc.",
    url: "https://applause.com",
    from: "2017-08",
    to: "2019-11",
    location: "United States",
    kind: "contract",
    points: [
      "Reviewed requirements and acceptance criteria before build, catching ambiguity while it was still cheap to fix",
      "Tested every pull request — manual, exploratory and regression — across web, iOS and Android",
      "Ran functional, smoke, acceptance, usability, compatibility and beta cycles against client acceptance criteria",
      "Reported results to product, engineering, design and QA management, and facilitated the team's daily scrum",
    ],
  },
];

export const stack: StackArea[] = [
  {
    area: "Automation",
    tools: ["Python", "Pytest", "Playwright", "Locust", "SonarQube"],
  },
  {
    area: "API & traffic",
    tools: ["Postman", "Swagger", "Charles", "Fiddler Everywhere"],
  },
  { area: "CI/CD", tools: ["Jenkins", "GitHub Actions", "GitLab CI"] },
  {
    area: "Infrastructure",
    tools: ["Docker", "Kubernetes", "Terraform", "OpenTofu", "Helm", "Teamcity", "ArgoCD", "k9s"],
  },
  {
    area: "Data & messaging",
    tools: ["SQL", "MongoDB", "Redis", "RabbitMQ", "Kafka", "Conduktor"],
  },
  {
    area: "Observability",
    tools: ["Grafana", "Prometheus", "Coralogix", "Kibana", "Logstash", "Sentry"],
  },
  {
    area: "Ways of working",
    tools: ["Agile", "Scrum", "Scrum-ban", "Jira", "Linear", "Youtrack", "Confluence", "Notion"],
  },
];

export const languages: Entry[] = [
  { key: "English", value: "C1" },
  { key: "Ukrainian", value: "Native" },
  { key: "Russian", value: "Native" },
];

export const education: Entry[] = [
  { key: "Degree", value: "Master's" },
  {
    key: "School",
    value:
      "National Technical University of Ukraine «Kyiv Polytechnic Institute»",
  },
];

export const contacts: Entry[] = [
  { key: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { key: "Phone", value: profile.phone, href: `tel:${profile.phoneHref}` },
  {
    key: "Telegram",
    value: profile.telegram.handle,
    href: profile.telegram.url,
    external: true,
  },
  {
    key: "LinkedIn",
    value: profile.linkedin.handle,
    href: profile.linkedin.url,
    external: true,
  },
  //{
  //  key: "GitHub",
  //  value: profile.github.handle,
  //  href: profile.github.url,
  //  external: true,
  //},
  {
    key: "Location",
    value: `${profile.city}, ${profile.country} · ${profile.timezone}`,
  },
];

/* -------------------------------------------------------------------------- */

/** Полных лет в профессии — для приписки «8+ yrs» на полях раздела summary. */
export const yearsOfExperience =
  new Date().getFullYear() - profile.since - 2;

/**
 * Оглавление документа. Один массив кормит и меню в шапке, и ключи на полях,
 * и подсветку активного раздела. Приписки считаются из данных: добавили роль —
 * «5 roles» стало «6 roles» само.
 */
export const sections: Section[] = [
  { id: "top", key: "ident", note: `rev ${profile.revision}`, inNav: false },
  {
    id: "summary",
    key: "summary",
    note: `${yearsOfExperience}+ yrs`,
    inNav: true,
  },
  {
    id: "history",
    key: "history",
    note: `${roles.length} roles`,
    inNav: true,
  },
  { id: "stack", key: "stack", note: `${stack.length} areas`, inNav: true },
  {
    id: "credentials",
    key: "credentials",
    note: "en c1 · msc",
    inNav: false,
  },
  {
    id: "contact",
    key: "contact",
    note: profile.timezone.toLowerCase().replace(" ", ""),
    inNav: true,
  },
];

export const sectionIds = sections.map((section) => section.id);

export const section = (id: string): Section => {
  const found = sections.find((item) => item.id === id);
  if (!found) throw new Error(`Unknown section: ${id}`);
  return found;
};
