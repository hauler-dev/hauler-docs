const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rancher Government Hauler',
  tagline: 'Airgap Swiss Army Knife',
  url: 'https://docs.hauler.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/hauler.ico',
  trailingSlash: false,

  organizationName: 'hauler-dev',
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

          editUrl: 'https://github.com/hauler-dev/hauler-docs/edit/main/',

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [ require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
        indexBaseUrl: true,
        highlightResult: true
      }
    ]
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
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/hauler-dev/hauler/issues',
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
                label: 'Quickstart Guide',
                to: '/docs/introduction/quickstart',
              },
              {
                label: 'Reference Guides',
                to: '/docs/guides-references/overview',
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
