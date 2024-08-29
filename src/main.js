import './assets/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {
    createApp
} from 'vue'
import App from './App.vue'
import {
    createRouter,
    createMemoryHistory
} from 'vue-router'
import HomePage from './components/HomePage.vue'
import CreatePage from './components/CreatePage.vue'

const routes = [{
        path: '/',
        component: HomePage,
        name: 'homepage'
    }, {
        path: '/create',
        component: CreatePage,
        name: 'createTodo'
    },

]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')