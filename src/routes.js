import Vue from 'vue'
import VueRouter from 'vue-router'
import indexPage from './components/header.vue'
import homePage from './views/home.vue'
import aboutPage from './views/about.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path:'/',
            component: homePage
        },
        {
            path: '/about',
            component: aboutPage
        }
    ]
})