import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueStripeMenu from 'vue-stripe-menu';
import 'vue-stripe-menu/dist/vue-stripe-menu.css';

Vue.use(VueStripeMenu);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
