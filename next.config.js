const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:locale/links",
        destination: "https://bento.me/rosers",
        permanent: true,
      },
      {
        source: "/links",
        destination: "https://bento.me/rosers",
        permanent: true,
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
