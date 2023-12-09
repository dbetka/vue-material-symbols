import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'material-symbols/index.css'
import materialSymbolsPlugin from '@root'

createApp(App)
  .use(materialSymbolsPlugin)
  .mount('#app')
