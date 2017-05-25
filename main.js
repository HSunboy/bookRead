import Vue from 'vue'
import app from './App.vue'
import routes from './app/router/router'
import vueRouter from 'vue-router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'




Vue.config.debug = true;
Vue.use(VueResource);
Vue.use(vueRouter)
Vue.use(MintUI)
const router = new vueRouter({
    routes
})


new Vue({
    router
}).$mount('#app')