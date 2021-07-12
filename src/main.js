import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import globalComponent from './components/common/global.js'
import installVant from './plugins/vant.js'
import installDirectives from './directive/index.js'
import 'amfe-flexible'
import 'styles/index.less'
import FastClick from 'fastclick'

FastClick(document.body)

const app = createApp(App)
app.use(store).use(router).use(globalComponent)
installVant(app)
installDirectives(app)

// 路由准备就绪后挂载APP实例
router.isReady().then(() => app.mount('#app'))
