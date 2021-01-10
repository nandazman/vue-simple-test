import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import { VTable, VPagination } from "vue-easytable";
import actions from "./components/actions/ActionDataTable.vue";
import detail from "./components/actions/ActionDetail.vue";

import "vue-easytable/libs/themes-base/index.css";
import vuetify from "./plugins/vuetify";

// Register to global
Vue.component(VTable.name, VTable);
Vue.component(VPagination.name, VPagination);
Vue.component("actions", actions);
Vue.component("detail", detail);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
