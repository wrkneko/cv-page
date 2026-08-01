import type { NextConfig } from "next";

/**
 * Project Pages (репозиторий не вида <username>.github.io) отдают сайт из
 * подпути https://<username>.github.io/<repo>/, а не с корня. Next.js должен
 * знать этот подпуть заранее — иначе все ссылки на ассеты (CSS, шрифты,
 * favicon) будут резолвиться от корня и не найдутся.
 *
 * Для User/Org Pages (репозиторий <username>.github.io) переменную не задавать
 * — сайт и так на корне.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  /**
   * Статический экспорт: `next build` кладёт готовый HTML/CSS/JS в out/.
   * Деплой остаётся тем же, что и у версии без сборки — любой статический
   * хостинг, никакого Node на проде.
   */
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
