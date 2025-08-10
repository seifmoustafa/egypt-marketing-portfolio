import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "شركة مصر للتحليل والدراسات التسويقية | خبراء التسويق والتصميم",
  description:
    "شركة مصر للتحليل والدراسات التسويقية - خبراء في الاستشارات التسويقية، التصميم الإبداعي، تطوير المواقع، والحملات الإعلانية المتكاملة لتنمية أعمالك",
  keywords: ["تحليل تسويقي", "دراسات تسويقية", "تصميم إبداعي", "تسويق رقمي", "استشارات تسويقية", "تطوير مواقع", "حملات إعلانية", "تسويق في مصر"],
  authors: [{ name: "شركة مصر للتحليل والدراسات التسويقية" }],
  creator: "شركة مصر للتحليل والدراسات التسويقية",
  publisher: "شركة مصر للتحليل والدراسات التسويقية",
  metadataBase: new URL("https://egyptmarketingcompany.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo-transparent.png",
    apple: "/logo-transparent.png",
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://egyptmarketingcompany.com",
    title: "شركة مصر للتحليل والدراسات التسويقية",
    description: "خبراء في الاستشارات التسويقية والتصميم الإبداعي لتنمية أعمالك",
    siteName: "شركة مصر للتحليل والدراسات التسويقية",
    images: [
      {
        url: "/logo-transparent.png",
        width: 1200,
        height: 630,
        alt: "شركة مصر للتحليل والدراسات التسويقية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة مصر للتحليل والدراسات التسويقية",
    description: "خبراء في الاستشارات التسويقية والتصميم الإبداعي لتنمية أعمالك",
    images: ["/logo-transparent.png"],
    creator: "@EgyptMarketingCo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
