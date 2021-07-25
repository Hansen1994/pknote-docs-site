const { resolve, genSidebarConfig } = require('./utils/index');
const { description } = require('../../package');

const siderBarOptions = {
  hasSub: true,
  exclude: ['README.md', 'assets', '.DS_Store', 'docs', 'images'],
};

const nav = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '项目文档',
    link: '/docs/',
  },
  {
    text: '风格指南',
    link: '/code-rules/rules/',
  },
  {
    text: '关于',
    items: [
      {
        text: '日志',
        items: [
          {
            text: '更新日志',
            link: '/update-logs/',
          },
          {
            text: 'github源码',
            link: 'https://github.com/toimc-team/pknote-docs-site.git',
          },
        ],
      },
      {
        text: '参与贡献',
        items: [
          {
            text: '贡献指南',
            link: '/join/guide/',
          },
          {
            text: '项目说明',
            link: '/join/desc/',
          },
        ],
      },
    ],
  },
];

const sidebar = {
  '/docs/': [
    {
      title: 'CLI工具',
      collapsable: false,
      children: genSidebarConfig('docs/cli', siderBarOptions),
    },
    {
      title: 'vue3管理后台',
      collapsable: false,
      children: genSidebarConfig('docs/admin', siderBarOptions),
    },
    {
      title: 'nestjs接口平台',
      collapsable: false,
      children: genSidebarConfig('docs/api', siderBarOptions),
    },
    {
      title: 'vue3前端',
      collapsable: false,
      children: genSidebarConfig('docs/front', siderBarOptions),
    },
    {
      title: 'flutter跨端移动App',
      collapsable: false,
      children: genSidebarConfig('docs/miniapp', siderBarOptions),
    },
    {
      title: 'Electron跨端桌面端',
      collapsable: false,
      children: genSidebarConfig('docs/electron', siderBarOptions),
    },
  ],
  '/code-rules/': [
    {
      title: '风格指南',
      collapsable: false,
      children: genSidebarConfig('code-rules/rules', siderBarOptions),
    },
  ],
  // '/about/': [
  //   {
  //     title: '关于我们',
  //     collapsable: false,
  //     children: genSidebarConfig('about', { ...siderBarOptions, hasSub: false })
  //   }
  // ],
  '/': [
    {
      title: '首页',
      collapsable: false,
      children: [''],
    },
  ],
};

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  devServer: {
    hot: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@static': resolve('./static'),
      },
    },
  },
  base: isDev ? '/' : '/notes-page/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'pknote知识社区 - 独立开发者的福音，分享知识赚外快',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  markdown: {
    lineNumbers: true, // 显示代码行号
  },
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: nav,
    sidebar: sidebar,
    sidebarDepth: 2, // 侧边栏显示2级
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/nprogress',
    'vuepress-plugin-smooth-scroll',
    // '@snowdog/vuepress-plugin-pdf-export'
  ],

  // wsUrl: isDev ? 'localhost' : 'mp.toimc.com',
  // wsPort: isDev ? 3001 : 443,
};
