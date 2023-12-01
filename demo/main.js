import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'material-symbols/index.css'
import materialIcons from '../'

createApp(App)
  .use(materialIcons, {
    defaultComponentName: 'MaterialIcon',
    defaultFilled: true,
    defaultSize: 26,
  })
  .mount('#app')
