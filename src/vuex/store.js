import Vue from 'vue';
import Vuex from 'vuex' 

Vue.use (Vuex);

// global store for all items
let store = new Vuex.Store({
  // 
  state : {products: [] , toShow: [],
  cart : []},
  // changing state (they are synchonos)
  mutations : {SET_PRODUCTS_TO_STATE : (state, products)=> {
    state.products = products;
    state.toShow = products;
  },
  SET_CART :  (state, product) => {
    state.cart.push(product);
  },
  REMOVE_FROM_CART : (state , id ) => {
    state.cart = state.cart.filter((item) => {return item.id !==id});
  }
,
  FILTER_BY : (state, filterString) =>{
    if (filterString!=="none"){
    state.toShow = state.products;
    state.toShow = state.toShow.filter((item)=> {return item.type === filterString});
    }
    else {
      state.toShow = state.products;
    }
  }
},
  // asynchronous
  actions : {
    // base state for shop , can't use any api because of 
    GET_PRODUCTS_BASE_STATE ({commit}) {
    commit('SET_PRODUCTS_TO_STATE', [{
      id : 1 , title : 'Flux Redux Managment 2007', price : 3254
    },
  {id : 2 , title : 'Nike Air Max 90 Flux Redux', price : 12345 , type: "sneaker"},
  {id : 3 , title : 'Adidas Cow Managment Support Trees', price : 5600, type: "sneaker"},
  {id : 4 , title : 'Ecco2k sportiff Super Comfy Sport', price : 1678, type: "sneaker"},
  {id : 5 , title : 'Yung Old Adidas 90s Flux Redux', price : 23000, type: "sneaker"},
  {id : 6 , title : 'Raf Simons Adidas Ozweego Real', price : 12500, type: "sneaker"},
  {id : 7 , title : 'Nike Traineers Test Shoes', price : 5600, type: "sneaker"},
  {id : 8 , title : 'Basker And Robbinson Shoes 2007', price : 27500, type: "boot"},
  {id : 9 , title : 'Damn are those from army man', price : 82000, type: "boot"},
  {id : 10 , title : 'If you are reading this you are', price : 27000, type: "boot"},
  {id : 11 , title : 'Wrong in your life boy wtfd', price : 4300, type: "boot"},
  {id : 12 , title : 'Stop Please Do Something', price : 52500, type: "boot"},
]);
  return this.products;
    },
    ADD_TO_CART({commit}, product){
      commit("SET_CART", product)
    },
    DELETE_FROM_CART ({commit}, id){
      commit("REMOVE_FROM_CART", id)
    },
    FILTER_SHOP({commit}, filterString){
      commit("FILTER_BY", filterString)
    }
  },
  // short way of getting data from state
  getters : {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state){
      return state.cart;
    },
    TO_SHOW(state) {
      return state.toShow;
    }
  },
});

export default store;