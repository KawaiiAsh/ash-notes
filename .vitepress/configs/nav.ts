import type {DefaultTheme} from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
    {text: '主页', link: '/'},

    {
        text: '个人博客',
        items: [
            {text: '心情随笔', link: 'docs/musings/2023年的生活感悟.md', activeMatch: '/docs/musings/'},
        ],
    },

    {
        text: '理论知识',
        items: [
            {text: 'MIT18.06 笔记', link: 'docs/MIT18.06/chapter01', activeMatch: '/docs/MIT18.06/'},
            {text: '深度学习', link: 'docs/deeplearning/README', activeMatch: '/docs/deeplearning/'},
        ],
    },

]