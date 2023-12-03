import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import BadgeDirective from "primevue/badgedirective";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
  install(app: any) {
    app.use(PrimeVue);
    app.component("Sidebar", Sidebar);
    app.component("Button", Button);
    app.component("Dialog", Dialog);
    app.component("InputText", InputText);
    app.directive("badge", BadgeDirective);
  },
};
