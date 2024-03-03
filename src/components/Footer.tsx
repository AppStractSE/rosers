import { HiMiniHeart } from "react-icons/hi2";

const Footer = () => {
  const footerlinks = [
    {
      label: "Links",
      links: [
        {
          label: "About",
          href: "/about",
          internal: true,
        },
        {
          label: "Contact",
          href: "/contact",
          internal: true,
        },
      ],
    },
    {
      label: "Follow us",
      links: [
        {
          label: "GitHub",
          href: "",
        },
        {
          label: "Twitter",
          href: "",
        },
      ],
    },
  ];
  return (
    <footer className="p-4 py-12 md:px-16 md:pt-24 md:pb-12 bg-gradient-to-b from-[#021950] to-[#00081c]">
      <div className="grid grid-cols-3 ">
        <div className="rounded bg-black h-fit w-fit p-4 mb-4">logo</div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6">
          {footerlinks.map(({ label, links }) => (
            <div key={label}>
              <h2 className="mb-6 text-sm font-semibold uppercase">{label}</h2>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label} className="mb-4 text-xs md:text-sm">
                    <a href={href} className="hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[1px] bg-white opacity-10 w-full my-6 sm:mx-auto lg:my-8" />
      <a
        href="https://appstract.se/"
        target="_blank"
        className="hover:underline text-sm sm:text-center flex gap-1 items-center"
      >
        Made with{" "}
        <span className="text-red-500 ">
          <HiMiniHeart />
        </span>{" "}
        by Appstract © 2023
      </a>
    </footer>
  );
};
export default Footer;
