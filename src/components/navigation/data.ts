export interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
  isScrolled?: boolean;
}

export const navItems: NavItem[] = [
  {
    href: "/the-concept",
    label: "The concept",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/events",
    label: "Events",
  },
];
