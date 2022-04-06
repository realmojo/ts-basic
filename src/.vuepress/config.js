const { description } = require("../../package");

module.exports = {
  // base: "/typescript",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Javascript & Typescript",
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
    ["meta", { name: "theme-color", content: "#2ac1bc" }],
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
    nav: [
      {
        text: "자바스크립트",
        link: "/javascript/",
      },
      {
        text: "타입스크립트",
        link: "/typescript/",
      },
    ],
    sidebar: {
      "/javascript/": [
        {
          title: "자바스크립트",
          collapsable: false,
          children: ["", "why-javascript"],
        },
        {
          title: "기본문법",
          collapsable: false,
          children: [
            "basic-whitespace",
            "basic-name",
            "basic-number",
            "basic-string",
            "basic-statement",
            "basic-expression",
            "basic-function",
          ],
        },
        {
          title: "객체",
          collapsable: false,
          children: [
            "object-literal",
            "object-read",
            "object-update",
            "object-reference",
            "object-prototype",
            "object-reflection",
            "object-enum",
            "object-delete",
            "object-global",
          ],
        },
        {
          title: "함수",
          collapsable: false,
          children: [
            "function-object",
            "function-literal",
            "function-call",
            "function-args",
            "function-return",
            "function-exception",
            "function-add",
            "function-recursive",
            "function-scope",
            "function-closure",
            "function-callback",
            "function-module",
            "function-cascade",
            "function-curry",
            "function-memoization",
          ],
        },
        {
          title: "상속",
          collapsable: false,
          children: [
            "prototype-pseudo",
            "prototype-object",
            "prototype-prototype",
            "prototype-function",
            "prototype-class",
          ],
        },
        {
          title: "배열",
          collapsable: false,
          children: [
            "array-literal",
            "array-length",
            "array-delete",
            "array-enum",
            "array-object",
            "array-method",
            "array-dimension",
          ],
        },
        {
          title: "정규표현식",
          collapsable: false,
          children: ["regex-example", "regex-object", "regex-type"],
        },
        {
          title: "메소드",
          collapsable: false,
          children: [
            "method-array",
            "method-number",
            "method-string",
            "method-function",
            "method-object",
            "method-regex",
          ],
        },
      ],
      "/typescript/": [
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
