// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  haulerSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      description: 'Getting Started with Hauler',
      collapsed: false,
      items: [
        'getting-started/intro',
        'getting-started/core-concepts',
        'getting-started/airgap-workflow',
        'getting-started/installation',
        'getting-started/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Reference Guides',
      description: 'Reference Guides for Hauler',
      collapsed: false,
      items: [
        'reference-guides/intro',
        'reference-guides/quickstart',
        {
          type: 'category',
          label: 'Hauler Collections',
          description: 'Reference Guide for Hauler Collections',
          items: [
            'reference-guides/hauler-collections/intro',
          ],
        },
        {
          type: 'category',
          label: 'Hauler Content',
          description: 'Reference Guide for Hauler Content Types',
          items: [
            'reference-guides/hauler-content/intro',
            'reference-guides/hauler-content/images',
            'reference-guides/hauler-content/charts',
            'reference-guides/hauler-content/files',
          ],
        },
        {
          type: 'category',
          label: 'Command Line Interface',
          description: 'Reference Guide for the Hauler Command Line',
          items: [
            'reference-guides/command-line/hauler',
            'reference-guides/command-line/hauler-store',
            'reference-guides/command-line/hauler-completion',
            'reference-guides/command-line/hauler-version',
          ],
        },
      ],
    },
    'known-limits',
  ],
};

module.exports = sidebars;
