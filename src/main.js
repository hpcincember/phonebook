// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/HelloWorld'
import About from './components/About'
import Phonebook from './components/Phonebook'
require('./assets/sass/main.scss');
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Hello },
  { path: '/about', component: About },
  { path: '/phonebook', component: Phonebook }
];

const router = new VueRouter({
	routes:routes
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
