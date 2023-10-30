// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Test',
  tagline: 'testing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ua-2023-es6.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ES-Docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UA-2023-ES6', // Usually your GitHub org/user name.
  projectName: 'ES-Docs', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          routeBasePath: '/',
          path: 'docs-api',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-website',
        path: 'docs-website',
        routeBasePath: '/website',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [ 
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-database',
        path: 'docs-database',
        routeBasePath: '/database',
        sidebarPath: false,
      },
    ],
    [ 
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-architecture',
        path: 'docs-architecture',
        routeBasePath: '/architecture',
        sidebarPath: false,
      },
    ],
    
],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ES Docs',
        logo: {
          alt: 'ES Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/',
            label: 'API',
            position: 'left',
            activeBaseRegex: '/$'
          },
          {
            to: '/website',
            label: 'Website',
            position: 'left',
            activeBaseRegex: '/website'
          },
          {
            to: '/database',
            label: 'Database',
            position: 'left',
            activeBaseRegex: '/database'
          },
          {
            to: '/architecture',
            label: 'Architecture',
            position: 'left',
            activeBaseRegex: '/architecture'
          },
          
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Website',
            items: [
              {
                label: 'ES Project',
                to: '/', //put our website link here
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ES Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
