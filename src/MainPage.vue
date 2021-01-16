<template>
  <div class="inner-wrapper">
    <FilterProducts></FilterProducts>
    <Catalog></Catalog>
    <!-- <ShopCart v-if="CART.length" :cartData="CART"></ShopCart> -->
  </div>
</template>

<script>
import Catalog from "./Catalog.vue";
// import store from "./vuex/store";
// import ShopCart from "./ShopCart.vue";
import FilterProducts from "./FilterProducts.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainPage",
  components: {
    FilterProducts,
    Catalog,
    // ShopCart,
  },
  methods: {},
  computed: {
    ...mapGetters(["CART"]),
  },
};
</script>

<style lang="scss">
.inner-wrapper {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 240px auto;
  column-gap: 40px;
  max-width: 1376px;
  margin: 0px auto;
}
</style>
