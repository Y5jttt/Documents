import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "IMUcraft文档",
      description: "",
    },
  },

  theme,

});
