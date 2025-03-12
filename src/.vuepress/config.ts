import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/Documents/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NPUcraft文档",
      description: "",
    },
  },

  theme,

});
