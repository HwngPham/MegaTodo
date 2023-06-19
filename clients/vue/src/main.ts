import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";

const app = createApp(App);
app.config.errorHandler = (err) => {
  console.error(err);
};

app.use(router).use(ElementPlus).mount("#app");
