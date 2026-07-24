"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

export function CallToast() {
  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <Link
        href="tel:+48794777585"
        aria-label="Zadzwoń do naszego biura"
        className="
          flex
          h-12
          w-12
          md:h-14
          md:w-14
          items-center
          overflow-hidden
          rounded-full
          bg-accent
          text-white
          shadow-xl
          transition-all
          duration-300
          ease-out

          hover:w-72
          hover:bg-accent-hover
          hover:shadow-2xl

          focus:outline-none
          focus:ring-4
          focus:ring-accent/30
        "
      >
        <div
          className="
            flex
            h-12
            w-12
            md:h-14
            md:w-14
            shrink-0
            items-center
            justify-center
          "
        >
          <Phone className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2.5} />
        </div>

        <div
          className="
            ml-2
            whitespace-nowrap
            opacity-0
            transition-opacity
            duration-200
            delay-100
            group-hover:opacity-100
          "
        >
          <p className="text-sm font-semibold">Zadzwoń do nas</p>
          <p className="text-xs text-white/80">
            Dowiedz się, ile możesz zaoszczędzić
          </p>
        </div>
      </Link>
    </div>
  );
}
