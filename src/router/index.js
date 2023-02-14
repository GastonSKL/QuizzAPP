import { createRouter, createWebHistory } from "vue-router";
import QuiezesView from "../views/QuizesView.vue";
import QuiezView from "../views/QuizView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "quizes",
      component: QuiezesView,
    },
    {
      path: "/quiz/:id",
      name: "quiz",
      component: QuiezView,
    },
  ],
});

export default router;
