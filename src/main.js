import Vue from 'vue';
import Vuetify from 'vuetify';
import UploadButton from 'vuetify-upload-button';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(Vuetify);
Vue.use(UploadButton);

export const eventBus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

export default {
  components: {
    UploadButton,
  },
};
