<template>
  <div>
    <ShopCartItem
      v-for="cartItem in CART"
      :key="cartItem.id"
      :cartItem="cartItem"
      @deleteFromCart="deleteFromCart"
      class="cartcontainer"
    />
  </div>
</template>

<script>
//  import store from "./vuex/store";

import ShopCartItem from "./ShopCartItem";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ShopCart",
  components: { ShopCartItem },
  props: { cartData: Array },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(id) {
      this.DELETE_FROM_CART(id);
    },
  },
};
</script>

<style lang="scss"></style>
