import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 按需引入 Vant
import { Tabbar, TabbarItem } from 'vant';
import 'vant/lib/index.css'
// CSS 重置的现代替代方案
import 'normalize.css/normalize.css'

// 实例化 Vue 实例
const app = createApp(App)

// 安装 Vant 相关使用插件
app.use(Tabbar);
app.use(TabbarItem);

createApp(App).mount('#app')
