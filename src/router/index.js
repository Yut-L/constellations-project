// import { codePointAt } from 'core-js/fn/string'
import { createRouter, createWebHistory } from 'vue-router'
import Today from "@/views/Today"

const Tomorrow = () => import("../views/Tomorrow.vue")
const Week = () => import("../views/Week.vue")
const Month = () => import("../views/Month.vue")
const Year = () => import("../views/Year.vue")

const routes = [
  {
    path: "/",
    name: "today",
    component: Today
  },
  {
    path: "/tomorrow",
    name: "tomorrow",
    component: Tomorrow
  },
  {
    path: "/week",
    name: "week",
    component: Week
  },
  {
    path: "/month",
    name: "month",
    component: Month
  },
  {
    path: "/year",
    name: "year",
    component: Year
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
