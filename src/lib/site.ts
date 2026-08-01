import { profile } from "@/content/cv";

/**
 * Заменить на реальный домен после деплоя — иначе превью в LinkedIn и
 * Telegram не подтянется, там обязательны абсолютные адреса.
 * Тот же адрес подставляется в robots.txt и sitemap.xml на сборке.
 *
 * На GitHub Pages это:
 *   - User/Org Pages:    https://<username>.github.io
 *   - Project Pages:     https://<username>.github.io/<repo>
 * (второй вариант — с именем репозитория в пути, без слеша на конце).
 */
export const siteUrl = "https://wrkneko.github.io/cv-page";

export const site = {
  url: siteUrl,
  title: `${profile.name} · ${profile.role}`,
  description:
    "Konstantin Ivanov — SQA Engineer and QA Lead. Full-stack test automation in Python, Pytest and Playwright, CI/CD, Kubernetes and observability. Based in Limassol, Cyprus.",
  ogDescription:
    "Full-stack QA across web, mobile and backend. Python · Pytest · Playwright · CI/CD · Kubernetes. Open to QA Lead / SQA Engineer roles.",
  /** держится в синхроне с --background из globals.css */
  themeColor: { light: "#e9eae5", dark: "#131514" },
} as const;
