import Vue from 'vue';
import Vr from 'vue-router';
import Register from '../components/Register.vue';

// USE
Vue.use(Vr);

export default new Vr({
  routes:[
    {
      path:'/',
      name:'Register',
      component:Register
    }
  ]
})
