"use client";

import { futuraStd, garamond } from "@/util/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import Drawer from "../drawer/Drawer";
import { NavItem, navItems } from "./data";

const NavigationLink = ({ href, label, isActive }: NavItem) => {
  const baseClassNames = "p-2 uppercase min-w-fit";
  const isActiveClassNames = isActive ? "text-[#8B7257] underline underline-offset-4" : "";
  const linkClassNames = `${baseClassNames} ${isActiveClassNames} hidden md:block`;
  return (
    <Link href={href} className={linkClassNames}>
      {label}
    </Link>
  );
};

const Divider = () => <div className="hidden md:block h-6 bg-[#a286688e] min-w-[1.5px]" />;

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  return (
    <>
      <header className="sticky z-10 top-0 w-full px-4 2xl:px-16 bg-[#2e2b29]">
        <div className="mx-auto max-w-screen-2xl flex items-center justify-between transition-all duration-200 ease-in-out">
          <nav
            className={`${futuraStd.className} flex-row-reverse lg:flex-row order-1 lg:order-0 justify-start lg:justify-start flex gap-4 transition-all duration-500 ease-in-out items-center text-xs 2xl:text-base md:py-4 flex-1`}
          >
            <button
              className="py-4 text-3xl md:text-2xl scale-x-[-1] lg:scale-x-[1]"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              <BiMenuAltLeft />
            </button>
            <Divider />
            {navItems.map(({ href, label }) => (
              <NavigationLink key={label} href={href} label={label} isActive={pathname === href} />
            ))}
          </nav>
          <h2
            className={`${garamond.className} lg:order-1 flex flex-1 lg:justify-center text-2xl md:text-4xl uppercase tracking-widest`}
          >
            Rosers
          </h2>
          <div
            className={`${futuraStd.className} hidden lg:flex order-2 flex-1 justify-end uppercase text-xs`}
          >
            Svenska
          </div>
        </div>
      </header>
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navigation;
