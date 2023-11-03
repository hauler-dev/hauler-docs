// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Government Hauler',
  tagline: 'Airgap Swiss Army Knife',
  url: 'https://rancherfederal.github.io',
  baseUrl: '/hauler-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/carbide-logo.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rancherfederal', // Usually your GitHub org/user name.
  projectName: 'hauler-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/rancherfederal/hauler-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/rancherfederal/hauler-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // https://docusaurus.io/docs/api/themes/configuration
        title: '',
        logo: {
          alt: 'Carbide Logo',
          src: 'img/rgs-hauler-logo.png',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Documentation',
            position: 'left'
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },
          {
            href: 'https://github.com/rancherfederal/hauler-docs/issues',
            label: 'Submit Feedback',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Hauler Docs',
                to: '/docs/intro',
              },
              {
                label: 'Getting Started',
                to: '/getting-started/intro',
              },
              {
                label: 'Reference Guides',
                to: '/reference-guides/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Rancher',
                href: 'https://rancher.com',
              },
              {
                label: 'Rancher GitHub',
                href: 'https://github.com/rancher',
              },
              {
                label: 'Rancher Slack',
                href: 'https://rancher-users.slack.com',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'RGS Blog',
                to: 'https://ranchergovernment.com/blog',
              },
              {
                label: 'RGS GitHub',
                href: 'https://github.com/rancherfederal',
              },
              {
                label: 'RGS ZenDesk',
                href: 'https://support.rancherfederal.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rancher Government Solutions. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
