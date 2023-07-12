/** @type {import('next-i18next').UserConfig} */
const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "es", "pt"],
    defaultLocale: "es",
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
};
