import { createApp } from 'vue'
import App from './components/App.vue'
import { store } from './vuex/store'

const app = createApp(App)
app.use(store);

app.mount('#app')
