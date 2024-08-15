import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueLazyLoad from 'vue3-lazy'
import './assets/styles/global.css'

const app = createApp(App)

app.use(router)
// app.use(VueLazyLoad, {
//     loading: new URL('@/assets/image/avatar/wk.jpg', import.meta.url).href, // 图片加载时默认图片
//     error: new URL('@/assets/image/avatar/wk.jpg', import.meta.url).href // 图片加载失败时默认图片
//     // 还可以有其他配置
// })
app.mount('#app')
