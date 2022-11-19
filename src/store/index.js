import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);
import home from "./home";
import about from "./about";


export default new Vuex.Store({
  
    modules:{
        home,
        about
    }
});