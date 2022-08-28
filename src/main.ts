import App from '@/App.vue'
import '@/index.css'
import { createApp } from 'vue'
import { FormRendererPlugin } from './plugins/FormRendererPlugin'

createApp(App).use(FormRendererPlugin, { color: '#FFA500' }).mount('#app')
