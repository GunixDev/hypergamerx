/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "es", "pt"],
    defaultLocale: "en",
    localeDetection: true,
  },
};
