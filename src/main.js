import Vue from 'vue';
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from "vue-router";
import moment from 'vue-moment';
import {routes} from "./util/routes";

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(moment)
const router =new VueRouter({routes});
Vue.prototype.moment = moment
Vue.config.productionTip = false;
new Vue({
   el: '#app',
   render: h => h(App),
   router
});