import { links } from "@/lib/links";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full text-white border-t border-gray-600/20 px-12 py-8">
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={160} height={60} />
            </Link>
            <div className="text-center text-xs text-white">
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

          <div className="flex-1 text-xs text-center md:text-right leading-6"></div>
        </div>
        <div className="text-white font-medium text-center wrap-break-word text-xs flex mt-6 items-center justify-center md:items-end gap-1">
          <p>
            POWERUP ENERGY CONSULTING SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ |
            Adres: Aleja Niepodległości 245 / 17, 02-009 Warszawa, Polska | KRS:
            0001211902 | NIP: 5243060039 | REGON: 543655597 |{" "}
            <a href="mailto:kontakt@gopowerup.pl" className="underline">
              kontakt@gopowerup.pl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
