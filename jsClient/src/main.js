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
Vue.prototype.baseUrl = "http://be628bda554a.ngrok.io";

import 'element-ui/lib/theme-chalk/index.css';
import { Input, Select,Option,Button,Alert } from 'element-ui';
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Alert);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
