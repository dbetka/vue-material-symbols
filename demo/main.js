import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'material-symbols/index.css'
import materialIcons from '../dist/index.es'

createApp(App)
  .use(materialIcons, {
    defaultComponentName: 'MaterialIcon',
    defaultFilled: true,
    defaultSize: 26,
  })
  .mount('#app')
