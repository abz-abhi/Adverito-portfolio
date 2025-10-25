"use client";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

import {
  InformationCircleIcon, // About
  BriefcaseIcon, // Services
  PhotoIcon, // Portfolio (image/photo)
  CurrencyDollarIcon, // Pricing
  Squares2X2Icon, // Pages / Menu
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "About",
    icon: InformationCircleIcon,
    href: "/about",
  },
  {
    name: "Services",
    icon: BriefcaseIcon,
    href: "/services",
  },
  {
    name: "Portfolio",
    icon: PhotoIcon,
    href: "/portfolio",
  },
  {
    name: "Pricing",
    icon: CurrencyDollarIcon,
    href: "/pricing",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-green-500 transition-colors text-sm"
      >
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <nav className="border-0 sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/">
          <div className="text-lg font-bold">
            <Image
              width={40}
              height={40}
              className="h-10 w-auto"
              src="/favicon-black.png"
              alt="Advertio"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-2 lg:flex">
          <a href="/contact">
            <button className="bg-green-300 hover:bg-green-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors">
              Get a Quote
            </button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden p-2"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="container mx-auto border-t border-gray-200 px-2 pt-4 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="/contact" className="flex-1">
              <button className="bg-green-300 text-gray-900 font-medium py-2 px-4 rounded-lg w-full">
                Get a Quote
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
