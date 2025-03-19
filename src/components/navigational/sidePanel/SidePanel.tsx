"use client";

import Navbar from "../navbar/Navbar";
import Image from "next/image";
import Button from "@/components/actions/button/Button";

export default function SidePanel() {
  return (
    <menu className="hidden md:inline-flex items-center lg:items-start flex-col sticky top-6 h-full max-h-[91svh] overflow-y-hidden hover:overflow-y-auto">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="inline mb-8 p-2 rounded-b-2xl appTop fixed top-0 lg:px-4"
        justify="center"
      >
        <div className="flex items-center gap-3 group">
          <Image src="/icon.png" alt="gram.blue icon" width={48} height={48}/>
          <Image
            src="/gramblueText.svg"
            alt="gram.blue"
            width={84}
            height={26}
            priority
            className="hidden lg:block"
          />
        </div>
      </Button>
      <div className="mt-14"/>
      <Navbar />
    </menu>
  );
}
