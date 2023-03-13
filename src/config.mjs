import defaultImage from './assets/images/default.png';
import { t } from "i18next";

const CONFIG = {
  name: 'Africtivistes Citizen Lab Mauritanie',

  origin: 'https://citizenlabmauritanie.netlify.app',
  basePathname: '/',
  trailingSlash: false,

  title: t("site.title"),
  description:
    'AfricTivistes CitizenLab Mauritanie 🇲🇷 est une fabrique citoyenne dont le but est d’appuyer, d’accompagner et d’outiller les acteurs de la société civile mauritanienne par la formation, le développement d’outils et l’accompagnement à l’innovation et à la co-création.',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: '',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: "G-NG19Q65D5Z", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',

  actualites: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'actualites', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined, actualites: undefined };
export const BLOG = CONFIG.blog;
export const ACTUALITUES = CONFIG.actualites;
export const DATE_FORMATTER = CONFIG.dateFormatter;
