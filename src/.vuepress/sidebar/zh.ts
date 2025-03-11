import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/Overview/": [
      "",
      "TechnicalArchitecture",
      "Changelog",
    ],
    "/QuickStart/": [
      "",
      "Environment",
      "Register",
      "BasicCommands",
    ],
    "/SurvivalGuide/": [
        {
            text: "生存服介绍",
            icon: "lightbulb",
            link: "/SurvivalGuide/ServerIntroduction/",
            prefix: "/SurvivalGuide/ServerIntroduction/",
            collapsible: false,
            expanded: true,
            children: [
                "Survival-Main",
                "Survival-Industry",
                "Survival-Resource"
            ],
        },
        {
            text: "经济系统",
            icon: "lightbulb",
            link: "/SurvivalGuide/EconomicSystem/",
            prefix: "/SurvivalGuide/EconomicSystem/",
            collapsible: false,
            expanded: true,
            children: [
                "MakeMoney",
                "Residence",
                "Shop"
            ],
        },
        {
            text: "常见问题",
            icon: "lightbulb",
            link: "/SurvivalGuide/Support/",
            prefix: "/SurvivalGuide/Support/",
            collapsible: false,
            expanded: true,
            children: [
                "Service",
                "Technical",
            ],
        },
    ],

});
