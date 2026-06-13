import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RK Dev Studios",
  description: "Building secure, reliable software products for healthcare, productivity, and digital experiences.",
  keywords: ["RK Dev Studios", "MediSave", "Orbit Music", "SubScan", "Software Organization"],
  metadataBase: new URL("https://rkdevstudios.mywebutils.online"),
  openGraph: {
    title: "RK Dev Studios",
    description: "Building secure, reliable software products for healthcare, productivity, and digital experiences.",
    url: "https://rkdevstudios.mywebutils.online",
    siteName: "RK Dev Studios",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-[#09090b] text-zinc-300 selection:bg-blue-500/20 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
