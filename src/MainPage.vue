<template>
  <div>
    <Catalog></Catalog>
    <ShopCart v-if="CART.length" :cartData="CART"></ShopCart>
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
// import store from "./vuex/store";
import ShopCart from "./ShopCart";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: {
    Catalog,
    ShopCart,
  },
  methods: {},
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style></style>
