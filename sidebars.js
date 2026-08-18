// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  haulerSidebar: [
    'intro',
    'core-concepts',
    'airgap-workflow',
    {
      type: 'category',
      label: 'Getting Started',
      description: 'Docs for Hauler, An Airgap Swiss-Army Knife provided by Rancher Government',
      collapsed: false,
      items: [
        'getting-started/quickstart',
        'getting-started/install',
        'getting-started/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Hauler Usage',
      description: 'Usage Documentation for Hauler',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Hauler Store',
          description: 'Usage Documentation for Hauler Store',
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Add',
              description: 'Usage Documentation for Hauler Store Add',
              collapsed: true,
              items: [
                'hauler-usage/store/add/image',
                'hauler-usage/store/add/chart',
                'hauler-usage/store/add/file',
              ],
            },
            'hauler-usage/store/sync',
            'hauler-usage/store/info',
            'hauler-usage/store/remove',
            'hauler-usage/store/save',
            'hauler-usage/store/load',
            'hauler-usage/store/copy',
            'hauler-usage/store/extract',
            {
              type: 'category',
              label: 'Serve',
              description: 'Usage Documentation for Hauler Store Serve',
              collapsed: true,
              items: [
                'hauler-usage/store/serve/registry',
                'hauler-usage/store/serve/fileserver',
              ],
            },
          ],
        },
        'hauler-usage/login',
        'hauler-usage/version',
        'hauler-usage/help',
        'hauler-usage/completion',
      ],
    },
    {
      type: 'category',
      label: 'Guides & References',
      description: 'Reference Guides Documentation for Hauler',
      collapsed: false,
      items: [
        'guides-references/carbide-customers',
        'guides-references/hauler-content',
        'guides-references/hauler-collections',
        'guides-references/hauler-manifests',
        'guides-references/rewriting-artifacts',
        'guides-references/cluster-images',
        "guides-references/custom-product-manifests"
      ],
    },
    'known-limits',
    'feedback',
  ],
};

module.exports = sidebars;
