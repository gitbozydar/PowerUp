import { links } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-white border-t border-gray-600/20 px-12 py-8">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={160} height={60} />
            </Link>
            <div className="text-center text-xs text-secondary">
              © {new Date().getFullYear()} PowerUp. Wszelkie prawa zastrzeżone.
            </div>
          </div>
          <div className="flex-2 flex  justify-center">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium">
              {links.map(({ name, path }, index) => (
                <Link
                  key={index}
                  className="hover:underline transition"
                  href={path}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 text-sm text-white text-center md:text-right">
            <p>
              POWERUP ENERGY CONSULTING SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ
            </p>
            <p>kontakt@gopowerup.pl</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
