import Register from '../components/register.vue';
import Home from     '../components/home.vue';
import Vr from 'vue-router';
import Vue from 'vue';



// USE
Vue.use(Vr);

export default  new Vr({

  routes:[
    {
      path:'/',
      name:'Home',
      component:Home
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    }

],
mode:'history'
})
