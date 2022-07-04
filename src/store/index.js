import Vue from 'vue';
import Vuex from 'vuex';
import {todoList} from './modules/todoList';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        todoList,
    }
});