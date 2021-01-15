import Vue from "vue";
import Router from 'vue-router';

// компоненты для отображения в роутах

import About from "./About.vue";

Vue.use(Router);

import MainPage from "./MainPage.vue";

export default new Router ({
  mode: 'history',
  routes : [
    {
    path: '/',
    component: MainPage ,
  },
  {
    path: '/about',
    component : About, 
  },
//   {
//     // динамический путь
//     path: '/shop-item/:id',
//     component: ContactDetail ,
//     props: true,
// },
  ]
})