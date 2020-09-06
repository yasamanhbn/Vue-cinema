import Vue from 'vue';
import App from './App.vue'
import VueResource from 'vue-resource'
import moment from 'vue-moment';

Vue.use(VueResource)
Vue.use(moment)
Vue.prototype.moment = moment
Vue.config.productionTip = false;
new Vue({
   el: '#app',
   render: h => h(App)
});