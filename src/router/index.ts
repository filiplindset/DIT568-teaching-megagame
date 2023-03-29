import { createRouter, createWebHistory } from "vue-router";
import HostView from "@/views/HostView.vue";
import StartView from '@/views/StartView.vue';
import PlayerView from '@/views/PlayerView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: StartView,
        },
        {
            path: "/host",
            name: "host",
            component: HostView,
        },
        {
            path: "/player",
            name: "player",
            component: PlayerView
        }
    ],
});
export default router;