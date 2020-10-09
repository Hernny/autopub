import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home.vue";
import Auth from "../views/auth.vue";
import Dashboard from "../views/dashboard.vue";
import Contact from "../views/contact.vue";
import Vin from "../views/vin.vue";
import Create from "../views/create.vue";
import Preview from "../views/preview.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { layout: "default" }
  },
  {
    path: "/auth",
    name: "auth",
    component: Auth,
    meta: { layout: "auth" }
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: { layout: "default" }
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: { layout: "default" }
  },
  {
    path: "/vin",
    name: "vin",
    component: Vin,
    meta: { layout: "default" }
  },
  {
    path: "/create",
    name: "create",
    component: Create,
    meta: { layout: "default" }
  },
  {
    path: "/preview",
    name: "preview",
    component: Preview,
    meta: { layout: "default" }
  }
];
const router = new VueRouter({
    routes
});

export default router;