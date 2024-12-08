interface DrawerLink {
  href: string;
  label: string;
  externalLink?: boolean;
}

interface SubDrawerLink {
  label: string;
  links: DrawerLink[];
}

const mainLinks: DrawerLink[] = [
  { href: "/", label: "Home" },
  { href: "/the-concept", label: "The concept" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const subLinks: SubDrawerLink[] = [
  {
    label: "Discover the concept",
    links: [
      { href: "/the-concept/rosers-kitchen", label: "Rosers Kitchen" },
      {
        href: "/the-concept/rosers-global-events",
        label: "Rosers Global Events",
      },
      { href: "/the-concept/rosers-consulting", label: "Rosers Consulting" },
    ],
  },
  {
    label: "About",
    links: [
      { href: "/about/what-we-do", label: "What we do" },
      { href: "/about/who-we-are", label: "Who we are" },
      { href: "/about/our-history", label: "Our history" },
    ],
  },
  {
    label: "Our creativity",
    links: [
      { href: "/our-creativity/vision", label: "Vision" },
      { href: "/our-creativity/inspiration", label: "Inspiration" },
    ],
  },
  {
    label: "Follow us",
    links: [
      {
        href: "https://www.instagram.com/rosers_kitchen/",
        label: "Instagram",
        externalLink: true,
      },
      {
        href: "https://www.facebook.com/pages/Rosers%20Salonger/184958138186145/",
        label: "Facebook",
        externalLink: true,
      },
      {
        href: "https://linkedin.com/company/rosers",
        label: "LinkedIn",
        externalLink: true,
      },
    ],
  },
];

export { mainLinks, subLinks };
