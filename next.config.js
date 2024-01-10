/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["23219927.fs1.hubspotusercontent-na1.net"],
  },
};

module.exports = nextConfig;
