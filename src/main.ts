import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import Rules from '@/lib/validacoes';

Vue.config.productionTip = false
Vue.use(Rules);

new Vue({
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
