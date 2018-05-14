/*
* @Author: hinata
* @Date:   2018-04-19 15:35:26
* @Last Modified by:   Administrator
* @Last Modified time: 2018-04-20 14:36:52
*/
import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        test
    }
})