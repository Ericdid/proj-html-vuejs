//import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

library.add(faLocationDot);

import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
