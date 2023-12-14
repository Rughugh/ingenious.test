import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StopsView from "@/views/StopsView.vue";
import BusLinesView from "@/views/BusLinesView.vue";

const routes: Array<RouteRecordRaw> = [{
    path: '/stops',
    name: 'stops',
    component: StopsView
  },{
    path: '/buslines',
    name: 'buslines',
    component: BusLinesView
},
  {
    path: '/',
    name: 'Default',
    component: StopsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
