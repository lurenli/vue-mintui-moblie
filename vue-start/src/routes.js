import Vue from 'vue';
import Router from 'vue-router';
//import PageTransition from './components/PageTransition';
//import Index from './components/Index.vue';
//import Users from './components/users/Users.vue';
//import See from './components/see/See.vue';
//import Me from './components/me/Me.vue';

const PageTransition = resolve => require(['./components/PageTransition'], resolve);
const Index = resolve => require(['./components/Index.vue'], resolve);
const Users = resolve => require(['./components/users/Users.vue'], resolve);
const See = resolve => require(['./components/see/See.vue'], resolve);
const Me = resolve => require(['./components/me/Me.vue'], resolve);
const Count = resolve => require(['./components/count/Count.vue'], resolve);

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(Router)

export const routes = [
   {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
        path: '',
        component: Index
    },{
    	path:'/users',
    	component:Users
    },
    {
    	path:'/see',
    	component:See
    },
    {
    	path:'/me',
    	name:'me',
    	component:Me
    },
    {
    	path:'/count',
    	name:'count',
    	component:Count
    }]
  }
] 
