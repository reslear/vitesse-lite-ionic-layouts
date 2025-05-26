import { IonicVue } from '@ionic/vue'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/**
 * Ionic Dark Palette
 * -----------------------------------------------------
 * For more information, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

// import '@ionic/vue/css/palettes/dark.always.css';
import '@ionic/vue/css/palettes/dark.class.css'
// import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css'

import 'uno.css'

const router = createRouter({
  routes, // : setupLayouts(routes),
  history: createWebHistory(import.meta.env.BASE_URL),
})

const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
