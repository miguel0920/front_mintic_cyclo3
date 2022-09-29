import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueSessionStorage from "vue-sessionstorage";


Vue.use(VueSessionStorage);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(axios);
Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');