import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import store from './stores'

createApp(App).use(store).use(createPinia()).use(router).mount('#app')
