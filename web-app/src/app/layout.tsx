import Nav from "@/components/Nav";
import "./globals.css";
import { DM_Sans, Barlow } from "next/font/google";
import Footer from "@/components/Footer";

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
      <body className="relative min-h-screen flex w-full flex-col justify-center items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="fixed inset-0 bg-black/40 -z-10" />
        <div className="absolute top-0 left-0 w-full z-50 px-6 py-4">
          <Nav />
        </div>
        <main className="w-full max-w-8xl px-8 flex flex-col items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
