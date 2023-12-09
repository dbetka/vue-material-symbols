import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'material-symbols/index.css'
import materialSymbolsPlugin from '@root'

createApp(App)
  .use(materialSymbolsPlugin, {
    defaultFilled: true,
    defaultSize: 26,
  })
  .mount('#app')
