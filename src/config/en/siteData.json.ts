import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Thales Web",
  // Your website's title and description (meta fields)
  title:
    "Thales Web - Professional web solutions for SaaS, Services, Portfolio, Blog, and more. Build your digital presence with ease.",
  description:
    "Thales Web - Professional web solutions built with Astro and Tailwind CSS. SEO/GEO/AEO optimized, marketing automation ready, multilingual support included. Perfect for SaaS, services, portfolio, and blog websites for businesses of all sizes.",

  // Your information for blog post purposes
  author: {
    name: "Thales Web",
    email: "contact@thalesweb.com",
    twitter: "ThalesWeb",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/thalesweb-logo.jpg",
    alt: "Thales Web logo",
  },
};

export default siteData;
