import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import africtivistesSVG from './assets/images/africtivistes-logo.svg';
import { t, changeLanguage } from "i18next";

changeLanguage('fr');

export const headerData = {
  links: [
    {
      text: "navigation.citizenLab",
      links: [
        {
          text: "navigation.a-propos",
          href: getPermalink(t("navigation.a-propos-link")),
        },
        {
          text: "navigation.initiative",
          href: getPermalink(t("navigation.initiative-link")),
        },
        {
          text: "navigation.equipe",
          href: '#',
        },
      ],
    },
    {
      text: "navigation.actualites",
      href: getBlogPermalink(),
    },
    {
      text: "navigation.citoyennete",
      links: [
        {
          text: "navigation.interview",
          href: '#',
        }
      ],
    },
    {
      text: "navigation.ressources",
      href: getBlogPermalink(),
      links: [
        {
          text: "navigation.publications",
          href: '#',
        },
        {
          text: "navigation.mediatheque",
          links: [
            {
              text: "navigation.podcast",
              href: '#',
            },
            {
              text: "navigation.video",
              href: '#',
            },
          ],
        },
      ],
    },
    {
      text: "navigation.contact",
      href: getPermalink(t("navigation.contact-link")),
    },
  ],
  actions: [
    { type: 'button', text: "navigation.telecharger", href: 'https://citizenlabmauritanie.netlify.app' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'navigation.citizenLab',
      links: [
        { text: 'navigation.a-propos', href: '#' },
        { text: 'navigation.initiative', href: '#' },
        { text: 'navigation.equipe', href: '#' },
        { text: 'navigation.contact', href: '#' },
      ],
    },
    {
      title: 'navigation.actualites',
      links: [
        { text: "navigation.portrait", href: getBlogPermalink() },
        { text: "navigation.reportage", href: getBlogPermalink() },
        { text: "navigation.debat", href: getBlogPermalink() },
        { text: "navigation.decouverte", href: getBlogPermalink() },
      ],
    },
    {
      title: "navigation.citoyennete",
    },
    {
      title: "navigation.ressources",
      links: [
        { text: "navigation.publications", href: '#' },
        { text: "navigation.mediatheque", href: '#' },
        { text: "navigation.podcast", href: '#' },
        { text: "navigation.video", href: '#' },

      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { text: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/CitizenLab_RIM' },
    { text: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/citizenlabrim/' },
    { text: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AfriCitizenLabRIM/' },
    { text: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCpkvxKTj6pntvogDzqFlfRg' },
    { text: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/citizenlabrim/' },
    { text: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { text: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AfricTivistes/citizenlabmauritanie' },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src=${africtivistesSVG} alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
