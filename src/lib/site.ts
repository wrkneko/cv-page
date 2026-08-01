import { profile } from "@/content/cv";
export const siteUrl = "https://wrkneko.github.io/cv-page";

export const site = {
  url: siteUrl,
  title: `${profile.name} · ${profile.role}`,
  description:
    "Konstantin Ivanov — SQA Engineer and QA Lead. Full-stack test automation in Python, Pytest and Playwright, CI/CD, Kubernetes and observability. Based in Limassol, Cyprus.",
  ogDescription:
    "Full-stack QA across web, mobile and backend. Python · Pytest · Playwright · CI/CD · Kubernetes. Open to QA Lead / SQA Engineer roles.",
  
  themeColor: { light: "#e9eae5", dark: "#131514" },
} as const;
