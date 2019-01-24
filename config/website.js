const tailwind = require("../tailwind");

module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: "Austin Loveless", // Navigation and Site Title
  siteTitleAlt: "Austin", // Alternative Site title for SEO
  siteTitleShort: "Austin", // short_name for manifest
  siteHeadline: "Engineering sustainable Architecture", // Headline for schema.org JSONLD
  siteUrl: "https://austincloveless.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  siteLogo: "/logo.png", // Used for SEO and manifest
  siteDescription: "Austin Loveless Portfolio Site",
  author: "Austin", // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  ogSiteName: "Austin", // Facebook Site Name
  ogLanguage: "en_US", // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue
};
