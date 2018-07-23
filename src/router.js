import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Graph from './views/Graph.vue';
import Data from './views/Data.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/graph',
      name: 'graph',
      component: Graph,
    },
    {
      path: '/data',
      name: 'data',
      component: Data,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
