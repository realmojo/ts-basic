const { description } = require("../../package");

module.exports = {
  base: "/typescript",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Typescript Basic",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3178c6" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    // nav: [
    //   {
    //     text: '기초강의',
    //     link: '/guide/',
    //   },
    //   {
    //     text: '인프런 강의(무료)',
    //     link: '/config/',
    //   },
    // ],
    sidebar: {
      "/guide/": [
        {
          title: "타입스크립트",
          collapsable: false,
          children: ["", "why-typescript", "transpile-vs-compile"],
        },
        {
          title: "기본개념",
          collapsable: false,
          children: [
            "kind",
            "function",
            "interface",
            "type-alias",
            "type-inference",
            "unions-and-intersections",
            "class",
            "generic",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
