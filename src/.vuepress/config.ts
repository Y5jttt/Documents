import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },

  },

  theme,
  // theme: hopeTheme({
  //   print: false,
  // }),
});
