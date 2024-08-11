import { DefaultTheme, UserConfig } from "vitepress";

type NonNullable<T> = T extends null | undefined ? never : T;
type ConfigType = NonNullable<UserConfig<DefaultTheme.Config>>;
type ThemeConfig = NonNullable<ConfigType["themeConfig"]>;

export const createCommonHead = (base: string): ConfigType["head"] => [
  [
    "link",
    {
      rel: "icon",
      type: "image/svg+xml",
      href: base + "zwoo_logo_simple_dark.svg",
    },
  ],
  [
    "link",
    {
      rel: "icon",
      type: "image/png",
      href: base + "zwoo_logo_simple_dark.png",
    },
  ],
  ["meta", { name: "theme-color", content: "#0ea5e9" }],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: "en" }],
  [
    "meta",
    {
      property: "og:title",
      content: "ZWOO Docs - the official zwoo documentation.",
    },
  ],
  ["meta", { property: "og:site_name", content: "ZWOO Docs" }],
  // TODO: test once deployed to dev
  // [
  //   "meta",
  //   { property: "og:image", content: "https://zwoo.igd20.de/docs/" },
  // ],
  ["meta", { property: "og:url", content: "https://zwoo.igd20.de/docs/" }],
];

export const createCommonNav = (
  base: string
): NonNullable<ThemeConfig["nav"]>[number] => ({
  text: "Switch to",
  items: [
    { text: "ZWOO", link: "https://zwoo.igd20.de" },
    {
      text: "Documentation",
      link: "https://zwoo.igd20.de/docs/",
    },
    {
      text: "Developer Docs",
      link: "https://zwoo.igd20.de/docs/dev/",
    },
    {
      text: "API Reference",
      link: "https://zwoo.igd20.de/docs/api/",
    },
  ].filter((item) => !item.link.endsWith(base)),
});

export const socialLinks: ThemeConfig["socialLinks"] = [
  { icon: "github", link: "https://github.com/zwoo-hq/docs" },
];

export const createLocales = (base: string): ConfigType["locales"] => ({
  root: {
    lang: "en",
    label: "English",
  },
  de: {
    lang: "de",
    label: "Deutsch",
    link: "https://zwoo.igd20.de/docs/de" + base,
  },
});

export const themeConfig: ThemeConfig = {
  search: {
    provider: "local",
  },
  i18nRouting: false,
  footer: {
    copyright: "Copyright © 2021-present Fabian Kachlock",
  },
  logo: {
    dark: "/zwoo_logo_simple_none_dark.svg",
    light: "/zwoo_logo_simple_none_light.svg",
    width: 512,
    height: 512,
  },
};
