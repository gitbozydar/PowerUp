"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { links, socials } from "@/lib/links";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4 px-6 lg:px-20 flex items-center justify-between rounded-3xl font-primary gap-10">
      <Link href="/" className="shrink-0">
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={100}
          className="h-auto"
        />
      </Link>
      <ul className="hidden lg:flex w-full items-center">
        {links.map(({ name, path }, index) => (
          <li
            key={index}
            className="font-primary flex uppercase font-medium tracking-[1.2px]
            after:content-['/'] after:mx-4 last:after:content-none after:text-white"
          >
            <Link
              href={path}
              className={`cursor-pointer hover:underline transition ${
                pathname === path ? "underline text-white" : "text-white"
              }`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:flex gap-4 items-center">
        {socials.map(({ icon: Icon, path }, index) => (
          <Link href={path} key={index} className="text-white" target="_blank">
            <Icon className="text-3xl" />
          </Link>
        ))}
      </div>

      <div className="lg:hidden z-50 flex p-1 rounded transition hover:backdrop-blur-sm hover:bg-white/10">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="text-white">
              <Menu />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="bg-white/10 border-white/10 text-white w-max!"
          >
            <div className="flex flex-col p-8 h-full justify-between">
              <div className="flex flex-col gap-6">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Nawigacja boczna
                </SheetDescription>

                <div className="flex flex-col gap-4">
                  {links.map(({ name, path }) => (
                    <Link
                      key={path}
                      href={path}
                      className="uppercase tracking-[1.2px] hover:underline"
                      onClick={() => setOpen(false)}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="flex justify-around pt-3 border-t border-white/10">
                {socials.map(({ icon: Icon, path }, i) => (
                  <Link key={i} href={path} target="_blank">
                    <Icon className="text-2xl" />
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Nav;
