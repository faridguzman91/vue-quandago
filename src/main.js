import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./includes/routes";
import pinia from "./includes/pinia";
import primevue from "./includes/primevue";
import faIcons from "./includes/fontawesome";
import "./styles/index.css";

import App from "./App.vue";

createApp(App)
  .use(router)
  .use(pinia)
  .use(primevue)
  .use(faIcons)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
