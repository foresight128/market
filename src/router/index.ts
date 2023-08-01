import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/view/MainPage.vue';
import SesuInnviraPage from '@/view/SesuInnviraPage.vue';
import ReddPage from '@/view/ReddPage.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage,
    },
    {
      path: '/sesuinnvira',
      component: SesuInnviraPage,
    },
    {
      path: '/reddplus',
      component: ReddPage,
    },
  ],
});
