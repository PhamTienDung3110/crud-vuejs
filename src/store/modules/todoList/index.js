import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
    todoList: [],
    status: null,
};
const namespaced = true;
export const todoList = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};