// components/Navbar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePWA } from "@/hooks/usePWA";
import { PopupButton } from "@typeform/embed-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

const menuList = [
  { name: "Home", link: "/" },
  // { name: "About", link: "/about" },
  { name: "Features", link: "#features" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { install } = usePWA();
  return (
    <div className="w-full">
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4 bg-ui-light">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/assets/lumore-hr.svg"
              alt="lumore"
              height={20}
              width={120}
            />
          </Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex space-x-6">
            {menuList.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-ui-shade hover:text-ui-accent"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            className="bg-ui-primary text-ui-shade hover:bg-ui-primary/90 text-base md:text-lg py-4 md:py-6"
            onClick={install}
          >
            Install Lumore
          </Button>
          {/* <PopupButton id="ITzseckk">
          <Button variant="outline" size="lg" className="text-base">
            Join waitlist <span className="text-ui-highlight">!!</span>
          </Button>
        </PopupButton> */}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <HiOutlineMenu
                className="text-3xl cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div>
                <h2 className="text-xl font-bold mb-4">Menu</h2>
                <ul className="space-y-4">
                  {menuList.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.link}
                        className="text-lg text-ui-shade hover:text-ui-accent"
                        onClick={() => setOpen(false)} // Close menu on click
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      <div className="p-2 text-ui-shade bg-ui-primary text-center text-sm italic">
        <p>
          To install LUMORE on IOS device tap &quot;Share&quot; → &quot;Add to
          Home Screen&quot;
        </p>
      </div>
    </div>
  );
}
