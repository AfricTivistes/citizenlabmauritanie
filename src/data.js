import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import africtivistesSVG from './assets/images/africtivistes-logo.svg';

export const headerData = {
  links: [
    {
      text: "navigation.citizenLab",
      links: [
        {
          text: "navigation.a-propos",
          href: getPermalink('/landing/saas'),
        },
        {
          text: "navigation.initiative",
          href: getPermalink('/landing/startup'),
        },
        {
          text: "navigation.equipe",
          href: getPermalink('/landing/mobile-app'),
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
      href: '#',
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
        { text: "navigation.actualites", href: getBlogPermalink() },
      ],
    },
    {
      title: "navigation.citoyennete",
      links: [
        { text: "navigation.interview", href: '#' },
      ],
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
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/CitizenLab_RIM' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/citizenlabrim/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/AfriCitizenLabRIM/' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCpkvxKTj6pntvogDzqFlfRg' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/citizenlabrim/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/AfricTivistes/citizenlabmauritanie' },
  ],
  footNote: `
  <a href="https://www.africtivistes.com" target= '_blank'>
  <img src=${africtivistesSVG} alt="AfricTivistes" class="h-8" />
  </a>
    <a target= '_blank' class="text-green-600 hover:underline dark:text-gray-200" href="https://www.africtivistes.com"> AfricTivistes</a> · All rights reserved.
  `,
};
