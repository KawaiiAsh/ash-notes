import { defineConfig } from 'vitepress'
import {nav} from './configs/nav'
import { sidebar } from './configs/sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  base: '/ash-notes/',
  title: "Ash Blog",
  description: "Ash的博客",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    logo: 'logo.png',

    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KawaiiAsh/blog' }
    ],

    footer: {
      message: '本站没有备案，因为不需要备案<br>',
      copyright: 'MIT License | Copyright © 2023-present Ash'
    },
  },

  markdown: {
    math: true
  }
})
