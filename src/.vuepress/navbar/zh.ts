import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/", // 主页
  "/Overview/", // 服务器概览
  "/QuickStart/", // 快速开始
  {
    text: "生存服指南",
    icon: "lightbulb",
    prefix: "/SurvivalGuide/",
    children: [
      {
        text: "玩家守则",
        icon: "lightbulb",
        prefix: "PlayerRules/",
        children: ["BasicBehavior.md", "ResourceManagement.md", "TypicalViolations.md"],
      },
      {
        text: "经济系统",
        icon: "lightbulb",
        prefix: "EconomicSystem/",
        children: ["MakeMoney.md", "Residence.md", "Shop.md"],
      },
      {
        text: "支持",
        icon: "lightbulb",
        prefix: "Support/",
        children: ["Service.md", "Technical.md"],
      },
    ],
  },
  "/MachineInstructions/",
  "/PluginInstructions/",


  "/portfolio",
  "/demo/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
  {
    text: "NPUskin",
    icon: "book",
    link: "https://skin.npucraft.com/",
  },
  {
    text: "QQ群",
    icon: "book",
    link: "https://qm.qq.com/q/Mu9dtXLRq8",
  },
]);
