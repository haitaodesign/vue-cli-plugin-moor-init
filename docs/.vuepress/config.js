module.exports = {
  title: '私有云前端',
  description: '技术架构，组件演示，开发日志...',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico'}]
  ],
  serviceWorker: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/guides/' },
      { text: '规范', link: '/specs/' },
      { text: '组件', link: '/components/' },
      { text: '日志', link: '/changelog/'},
      { text: 'GitLab', link: 'http://git.7moor.com/private-FE'}
    ],
    sidebar: {
      '/components/': [
        '',
        'components-one',
        'components-two'
      ],
      '/guides/': [
        '',
        'env-building',
        'env-building-docker',
        'npm-start',
        'quckilystart',
        'init-project-local',
        'init-project-docker'
      ],
      '/specs/': [
        '',
        'html-specs',
        'css-specs',
        'js-specs',
        'named-specs',
        'vue-style-specs',
        'git-workflow',
        'markdown-specs'
      ]
    }
  },
  port: 8081
}
