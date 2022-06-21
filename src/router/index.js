import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/form",
    name: "MainForm",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/MainForm.vue"),
  },
  {
    path: "/event/:id",
    props: true,
    name: "EventDetails",
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/EventDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
