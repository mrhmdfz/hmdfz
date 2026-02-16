import type { Metadata } from "next";
import { Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const fontGeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500", "600", "700"],
});

const fontBricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "hmdfz.",
  description: "hmdfz's portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        ${fontGeistMono.variable}
        ${fontBricolageGrotesque.variable}
      `}
    >
      <body className="font-sans antialiased min-h-screen bg-gray-50">
        <main className="max-w-6xl mx-auto sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
