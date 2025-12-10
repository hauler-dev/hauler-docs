// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  haulerSidebar: [
    'intro',
    'core-concepts',
    'airgap-workflow',
    {
      type: 'category',
      label: 'Introduction',
      description: 'Docs for Hauler, An Airgap Swiss-Army Knife provided by Rancher Government',
      collapsed: false,
      items: [
        'introduction/quickstart',
        'introduction/install',
        'introduction/uninstall',
      ],
    },
    {
      type: 'category',
      label: 'Hauler Usage',
      description: 'Usage Documentation for Hauler',
      collapsed: false,
      items: [
        'hauler-usage/overview',
        'hauler-usage/help',
        'hauler-usage/login',
        {
          type: 'category',
          label: 'Hauler Store',
          description: 'Usage Documentation for Hauler Store',
          collapsed: true,
          items: [
            'hauler-usage/store/overview',
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
            'hauler-usage/store/copy',
            'hauler-usage/store/extract',
            'hauler-usage/store/load',
            'hauler-usage/store/save',
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
            'hauler-usage/store/sync',
            'hauler-usage/store/delete-artifact',
          ],
        },
        'hauler-usage/completion',
        'hauler-usage/version',
      ],
    },
    {
      type: 'category',
      label: 'Guides & References',
      description: 'Reference Guides Documentation for Hauler',
      collapsed: false,
      items: [
        'guides-references/overview',
        'guides-references/cluster-images',
        'guides-references/carbide-customers',
        'guides-references/container-runtimes',
        'guides-references/bootstraping-utilities',
        'guides-references/hauler-manifests',
        'guides-references/hauler-content',
        'guides-references/hauler-collections',
      ],
    },
    'known-limits',
    'feedback',
  ],
};

module.exports = sidebars;
