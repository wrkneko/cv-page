import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";

import { profile, sectionIds } from "@/content/cv";
import { site } from "@/lib/site";
import { ThemeProvider } from "@/components/theme-provider";
import { ActiveSectionProvider } from "@/hooks/use-active-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

/**
 * Одно семейство в трёх ролях: Sans — текст, Mono — метаданные и ярлыки,
 * Serif — ровно один раз, на имени. Plex сделан для инженерной документации,
 * поэтому вернакуляр совпадает с содержанием страницы.
 *
 * next/font забирает файлы на сборке и раздаёт со своего домена: ни
 * preconnect к Google, ни блокирующего <link>, ни сдвига макета.
 */
const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const serif = IBM_Plex_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "profile",
    title: site.title,
    description: site.ogDescription,
    url: "/",
    images: [profile.photo],
  },
  twitter: { card: "summary" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: site.themeColor.light },
    { media: "(prefers-color-scheme: dark)", color: site.themeColor.dark },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${serif.variable} antialiased`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ActiveSectionProvider ids={sectionIds}>
            <SkipLink />
            <SiteHeader />
            <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
              {children}
              <SiteFooter />
            </div>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
