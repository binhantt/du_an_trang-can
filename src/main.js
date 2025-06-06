
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import {createBootstrap} from 'bootstrap-vue-next'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'animate.css';
const app = createApp(App)
app.use(router)
app.use(createBootstrap()) 
app.mount('#app')
