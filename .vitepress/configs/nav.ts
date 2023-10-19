import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '主页', link: '/'},

  {
    text: '理论知识',
    items: [
        { text: 'MIT18.06 笔记', link: 'docs/MIT18.06/chapter01',activeMatch: '/docs/MIT18.06/'},
    ],
  },
]