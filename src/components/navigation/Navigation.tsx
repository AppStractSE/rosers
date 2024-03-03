"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NavItem, navItems } from "./data";
import styles from "./style.module.scss";

const NavigationLink = ({ href, label, isActive, isScrolled }: NavItem) => (
  <Link
    href={href}
    className={`relative p-4
    ${
      isScrolled
        ? `${isActive ? `${styles.active} scroll+active` : "scroll-active"}`
        : `${isActive ? `${styles.active} nonscroll+active` : "nonscroll-active"}`
    }`}
  >
    {label}
  </Link>
);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const handleScroll = () => {
    if (window.scrollY > 0) setIsScrolled(true);
    else setIsScrolled(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`fixed top-0 w-full px-16 flex items-center justify-between transition-all duration-1000 ease-in-out
    ${isScrolled ? "bg-black" : "bg-transparent"}
    `}
    >
      <div className="rounded bg-black h-fit w-fit p-2">logo</div>
      <nav
        className={`flex gap-4 transition-all duration-500 ease-in-out ${isScrolled ? "" : "py-4"}`}
      >
        {navItems.map(({ href, label }) => (
          <NavigationLink
            key={label}
            href={href}
            label={label}
            isActive={pathname === href}
            isScrolled={isScrolled}
          />
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
