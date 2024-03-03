export interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
  isScrolled?: boolean;
}

export const navItems: NavItem[] = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];
