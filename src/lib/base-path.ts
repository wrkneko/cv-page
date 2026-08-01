/**
 * next/image сам подставляет basePath в src, но обычный <img> (например, у
 * Avatar из shadcn) — нет. Все пути на файлы из public/ (фото, PDF) должны
 * идти через этот helper, иначе на GitHub Pages Project Pages они будут
 * искать файлы на шаг выше правильного подпути.
 *
 * Вынесен в отдельный файл без импортов: `site.ts` импортирует `profile` из
 * `content/cv.ts`, а `content/cv.ts` — этот helper. Если бы он лежал в
 * `site.ts`, `cv.ts` → `site.ts` → `cv.ts` дал бы циклический импорт.
 */
export const withBasePath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
