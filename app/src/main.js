import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { defaultConfig, plugin } from '@formkit/vue'
import { apolloClient, apolloProvider } from './apollo-client'
import App from './App.vue'
import router from './router'
import formKitConfig from '../formkit.config.js';
import './assets/styles.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})
app.use(plugin, defaultConfig(formKitConfig))
app.use(apolloProvider)
app.use(router)
app.mount('#app')
