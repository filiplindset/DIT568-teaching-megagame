import { createRouter, createWebHistory } from "vue-router";
import HostView from "@/views/HostView.vue";
import MainPage from '@/views/MainPage.vue';
import ChooseFactionPageVue from "@/views/ChooseFactionPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: ChooseFactionPageVue,
        },
        {
            path: "/host",
            name: "host",
            component: HostView,
        }
    ],
});
export default router;