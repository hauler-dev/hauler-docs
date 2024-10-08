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
      label: 'Guides & References',
      description: 'Guides and References Docs for Hauler',
      collapsed: false,
      items: [
        'guides-references/overview',
        'guides-references/cluster-images',
        'guides-references/carbide-customers',
        {
          type: 'category',
          label: 'Bootstrapping Utilities',
          description: 'Guides and References for Hauler Bootstrapping Utilities',
          collapsed: false,
          items: [
            'guides-references/utilities/registry',
            'guides-references/utilities/fileserver',
          ],
        },
        'guides-references/manifests',
        {
          type: 'category',
          label: 'Hauler Collections',
          description: 'Guides and References for Hauler Collections',
          items: [
            'guides-references/hauler-collections/community-collections',
          ],
        },
        {
          type: 'category',
          label: 'Hauler Content',
          description: 'Guides and References for Hauler Content Types',
          items: [
            'guides-references/hauler-content/images',
            'guides-references/hauler-content/charts',
            'guides-references/hauler-content/files',
          ],
        },
        {
          type: 'category',
          label: 'Hauler Command Line',
          description: 'Guides and References for the Hauler Command Line',
          items: [
            'guides-references/command-line/hauler',
            'guides-references/command-line/hauler-store',
            'guides-references/command-line/hauler-completion',
            'guides-references/command-line/hauler-version',
          ],
        },
      ],
    },
    'known-limits',
    'feedback',
  ],
};

module.exports = sidebars;
