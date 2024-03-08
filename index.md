---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'home-layout'

hero:
  name: "Ash Blog"
  text: "Hello World!"
  tagline: It's not a bug – it's an undocumented feature.
  image:
    src: /logo.jpg
    alt: VitePress
  actions:
    - theme: brand
      text: Github主页
      link: https://github.com/KawaiiAsh
    - theme: alt
      text: 随便看看
      link: /#

features:
  - icon: 📚
    title: MIT 18.06 线性代数
    details: 用于个人学习 <br>转载至 ApacheCN的线性代数笔记
    link: /docs/MIT18.06/chapter01.html
    linkText: 线性代数
  - icon: 😊
    title: 个人博客
    details: 随便写写个人生活<br> 心情、记录、计划、想法
    link: /#
    linkText: 飞行随笔
  - icon: 💡
    title: 编程笔记
    details: 随手记录一些东西<br>例如在 Coding 的过程中遇到的突发奇想
    link: /#
    linkText: 随便看看
---

<style>
home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

home-layout .details small {
  opacity: 0.8;
}

home-layout .item:last-child .details {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>