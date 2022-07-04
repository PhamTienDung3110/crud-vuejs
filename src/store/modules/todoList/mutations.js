

export const mutations = {
    setProducts(state, todo) {
        Vue.set(state, 'todoList', todo);
    },
    addProduct(state, product) {
        let products = state.todoList;
        products.push(product);
        Vue.set(state, 'todoList', products);
    },
  };