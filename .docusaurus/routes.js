import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '33d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '3b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '83c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '31e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '8aa'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '496'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '166'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '7f1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '6a0'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '200'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '4ef'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '8b9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'e97'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '154'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '937'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '20b'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd6a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '921'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '3ac'),
    routes: [
      {
        path: '/docs/category/installation',
        component: ComponentCreator('/docs/category/installation', '776'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/using-hauler',
        component: ComponentCreator('/docs/category/using-hauler', '9fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/installation/',
        component: ComponentCreator('/docs/installation/', 'c3d'),
        exact: true,
        sidebar: "carbideSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '7ef'),
        exact: true,
        sidebar: "carbideSidebar"
      },
      {
        path: '/docs/usage/',
        component: ComponentCreator('/docs/usage/', 'f5d'),
        exact: true,
        sidebar: "carbideSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '33a'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
