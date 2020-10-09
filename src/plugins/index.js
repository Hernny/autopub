import Vue from "vue";

// import frameworks
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "@/sass/main.scss";

// page progress bar package
import VueProgressBar from "vue-progressbar";

const progressOptions = {
  color: "#7ecbfa",
  failedColor: "#dc3545",
  thickness: "5px"
};

// import vuelidate validation package
import Vuelidate from "vuelidate";

// import graph
//import VueGraph from "vue-graph";

// bootstrap vue 'toast' requirements
import PortalVue from "portal-vue";

//FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas, far);

// register plugins globably
Vue.use(PortalVue);
Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueProgressBar, progressOptions);
//Vue.use(VueGraph);
Vue.component("font-awesome-icon", FontAwesomeIcon);
