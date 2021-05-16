import Vue from "vue";
import App from "./App.vue";
import "./components/message/index";
const app = new Vue({
  render: (h) => h(App),
});
app.$mount("#app");
export default app;
