import Nav from "@/components/Nav";
import "./globals.css";
import { DM_Sans, Barlow } from "next/font/google";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import BackgroundVideo from "@/components/BackgroundVideo";
import CookieBanner from "@/components/CookieBanner";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${dmSans.variable} ${barlow.variable}`}>
      <body className="relative min-h-screen flex w-full flex-col justify-center items-center overflow-x-hidden bg-black">
        <div className="fixed inset-0 z-0">
          <BackgroundVideo />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 w-full">
          <Nav />
        </div>

        <main className="relative z-10 max-w-8xl px-12 flex flex-col items-center justify-center w-full">
          {children}
        </main>

        <div className="relative z-10">
          <Footer />
        </div>

        <Toaster />
        <CookieBanner />
      </body>
    </html>
  );
}
