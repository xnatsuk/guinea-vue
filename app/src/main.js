import { createApp, h, provide } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient, apolloProvider } from './apollo-client'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(apolloProvider)
app.use(router)
app.mount('#app')
