import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../dist/index.css'
import materialIcons from '../'

createApp(App)
  .use(materialIcons, {
    defaultFilled: true,
    defaultSize: 26,
  })
  .mount('#app')
