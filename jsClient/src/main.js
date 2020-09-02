// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
const axios = require('axios');

Vue.config.productionTip = false

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.prototype.axios = axios;
Vue.prototype.baseUrl = "http://127.0.0.1:7001";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
