const { description } = require("../../package");

module.exports = {
  // base: "/typescript",

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "JS Library",
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
    ["meta", { name: "theme-color", content: "#000" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ["link", { rel: "icon", href: "/assets/img/favicon.ico" }],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "57x57",
        href: "/assets/img/apple-icon-57x57.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "60x60",
        href: "/assets/img/apple-icon-60x60.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "72x72",
        href: "/assets/img/apple-icon-72x72.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "76x76",
        href: "/assets/img/apple-icon-76x76.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "114x114",
        href: "/assets/img/apple-icon-114x114.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "120x120",
        href: "/assets/img/apple-icon-120x120.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "144x144",
        href: "/assets/img/apple-icon-144x144.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "152x152",
        href: "/assets/img/apple-icon-152x152.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "180x180",
        href: "/assets/img/apple-icon-180x180.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/assets/img/android-icon-192x192.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/assets/img/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/assets/img/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/assets/img/favicon-96x96.png",
      },
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
        text: "자바스크립트 ES6+",
        link: "/javascript-es6+/",
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
            "function-curry",
            "function-memoization",
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
            "array-dimension",
          ],
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
      "/javascript-es6+/": [
        {
          title: "자바스크립트 ES6+",
          collapsable: false,
          children: [""],
        },
        {
          title: "ES6",
          collapsable: false,
          children: [
            "arrow-function",
            "class",
            "copy-object",
            "default-parameters",
            "destructing-assignment",
            "enhanced-object-literals",
            "generator",
            "iterator",
            "let-const",
            "map-set",
            "module",
            "promise",
            "spread-operator",
            "template-literal",
          ],
        },
        {
          title: "ES7",
          collapsable: false,
          children: ["square-root", "array-includes"],
        },
        {
          title: "ES8",
          collapsable: false,
          children: ["async-await", "trailing-commas"],
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
