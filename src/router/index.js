import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '../components/Mainpage.vue';
import About from '../components/About.vue';
import Contact from '../components/Contact.vue';

Vue.use(VueRouter)

const routes = [
  {
    path : "/",
    name : 'Mainpage',
    component : Mainpage
  },
  {
    path : "/about",
    name : "About",
    component : About
  },
  {
    path : "/contact",
    name : "Contact",
    component : Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
