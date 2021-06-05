const path = require("path");

module.exports = {
  title: "Atelio",
  tagline:
    "Help us create the future of labeling Good Quality 3d printed products onchain ",
  url: "https://docs.Atelio.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fnd.svg",
  organizationName: "AtelierL2", // Your GitHub org name.
  projectName: "AM-NFT-Contracts", // Your repo name.
  themeConfig: {
    navbar: {
      logo: {
        alt: "Atelio App info",
        src: "img/fnd.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "https://discord.gg/CKWWzgv8",
          label: "Discord",
          position: "left",
        },
        {
          href: "https://github.com/AtelierL2",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: 'Foundation',
      //     items: [
      //       {
      //         label: 'Docs',
      //         to: 'docs/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Connect',
      //     items: [
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/withFND',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discord.foundation.app',
      //       },
      //       {
      //         label: 'Instagram',
      //         href: 'https://www.instagram.com/withfoundation/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'https://foundation.app/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/f8n',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Atelio.app`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/AtelierL2/Atelio-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
