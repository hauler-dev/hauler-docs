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

  organizationName: 'rancherfederal',
  projectName: 'hauler-docs',

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
          versions: {
            current: {
              label: 'Next 🚧',
            },
          },

          editUrl: 'https://github.com/rancherfederal/hauler-docs/edit/main/',

        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rancherfederal/hauler-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 0,
        indexBlog: true,
        indexPages: true,

        language: "en",
        maxSearchResults: 10,
      }
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
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
            label: 'Hauler Blog',
            position: 'left'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/rancherfederal/hauler-docs/issues',
            label: 'Submit an Issue',
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
                to: '/docs/getting-started/intro',
              },
              {
                label: 'Reference Guides',
                to: '/docs/reference-guides/intro',
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
                href: 'https://ranchergovernment.com/blog',
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
