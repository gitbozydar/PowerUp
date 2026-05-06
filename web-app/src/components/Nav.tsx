"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram } from "react-icons/fa";

type Social = {
  icon: IconType;
  path: string;
};

const Nav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "Energia i Gaz",
      path: "/energy",
    },
    {
      name: "Audyt",
      path: "/audit",
    },
    {
      name: "OZE",
      path: "/renewable",
    },
  ];

  const socials: Social[] = [
    {
      icon: FaFacebook,
      path: "",
    },
    {
      icon: FaInstagram,
      path: "",
    },
  ];

  return (
    <nav className="py-4 px-20 flex gap-10 rounded-3xl font-primary ">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={200} height={100} />
      </Link>
      <ul className="flex w-full items-center ">
        {links.map(({ name, path }, index) => {
          return (
            <li
              key={index}
              className="font-primary flex uppercase font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-white"
            >
              <Link
                className={`cursor-pointer hover:text-accent transition ${pathname === path ? "text-accent" : "text-white"}`}
                href={path}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="flex gap-4 items-center">
        {socials.map(({ icon: Icon, path }, index) => {
          return (
            <Link href={path} key={index} className="text-white">
              <Icon className="text-3xl " />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Nav;
