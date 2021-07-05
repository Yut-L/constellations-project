import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 导入公共组件
import CardPlugin from '@/components/common'

import "@/assets/css/resets.css";
import "@/assets/css/border.css";
import "@/assets/js/common";

createApp(App).use(store).use(router).use(CardPlugin).mount('#app')
