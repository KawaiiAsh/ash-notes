// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import Theme from 'vitepress/theme'
import './rainbow.css'
import './vars.css'
import './overrides.css'

// 删除了 HomePage 的引入
// import HomePage from './components/HomePage.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout) // 删除了 HomePage 的插槽
  },
  enhanceApp({ router }) {
    if (typeof window === 'undefined')
      return

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
