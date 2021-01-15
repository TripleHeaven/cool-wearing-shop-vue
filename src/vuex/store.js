import Vue from 'vue';
import Vuex from 'vuex' 

Vue.use (Vuex);

// global store for all items
let store = new Vuex.Store({
  // 
  state : {products: [],
  cart : []},
  // changing state (they are synchonos)
  mutations : {SET_PRODUCTS_TO_STATE : (state, products)=> {
    state.products = products;
  },
  SET_CART :  (state, product) => {
    state.cart.push(product);
  },
  REMOVE_FROM_CART : (state , id ) => {
    state.cart = state.cart.filter((item) => {return item.id !==id});
  }
},
  // asynchronous
  actions : {
    // base state for shop , can't use any api because of 
    GET_PRODUCTS_BASE_STATE ({commit}) {
    commit('SET_PRODUCTS_TO_STATE', [{
      id : 1 , title : 'Flux Redux Managment 2007', price : 3254
    },
  {id : 2 , title : 'Nike Air Max 90 Flux Redux', price : 12345},
  {id : 3 , title : 'Adidas Cow Managment', price : 5600},
  {id : 4 , title : 'Ecco2k sportiff Super Comfy Sport', price : 1678},
  {id : 5 , title : 'Yung Old Adidas 90s Flux Redux', price : 23000},
  {id : 6 , title : 'Raf Simons Adidas Ozweego Real', price : 12500},
  {id : 7 , title : 'Nike Traineers Test Shoes', price : 5600},
  {id : 8 , title : 'Basker And Robbinson Shoes 2007', price : 27500},
  {id : 9 , title : 'Damn are those from army man', price : 82000},
  {id : 10 , title : 'If you are reading this you are', price : 27000},
  {id : 11 , title : 'Wrong in your life', price : 4300},
  {id : 12 , title : 'Stop Please', price : 52500},
]);
  return this.products;
    },
    ADD_TO_CART({commit}, product){
      commit("SET_CART", product)
    },
    DELETE_FROM_CART ({commit}, id){
      commit("REMOVE_FROM_CART", id)
    }
  },
  // short way of getting data from state
  getters : {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state){
      return state.cart
    }
  },
});

export default store;