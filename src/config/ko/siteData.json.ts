import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Thales Web",
  // Your website's title and description (meta fields)
  title:
    "Thales Web - SaaS, 서비스, 포트폴리오, 블로그 등을 위한 전문 웹 솔루션. 손쉽게 디지털 프레즌스를 구축하세요.",
  description:
    "Thales Web - Astro와 Tailwind CSS 기반 전문 웹 솔루션. SEO/GEO/AEO 최적화, 마케팅 자동화, 다국어 지원이 내장된 고성능 웹사이트를 구축하세요. SaaS, 서비스, 포트폴리오, 블로그 등 모든 비즈니스에 최적화되어 있습니다.",

  // Your information for blog post purposes
  author: {
    name: "Thales Web",
    email: "contact@thalesweb.com",
    twitter: "ThalesWeb",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/thalesweb-logo.jpg",
    alt: "Thales Web 로고",
  },
};

export default siteData;
