<template>
  <div>
    <ShopCartItem
      v-for="cartItem in cartData"
      :key="cartItem.id"
      :cartItem="cartItem"
      @deleteFromCart="deleteFromCart"
    />
  </div>
</template>

<script>
// import store from "./vuex/store";
import ShopCartItem from "./ShopCartItem";
import { mapActions } from "vuex";
export default {
  name: "ShopCart",
  components: { ShopCartItem },
  props: { cartData: Array },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),
    deleteFromCart(id) {
      console.log("dick");
      this.DELETE_FROM_CART(id);
    },
  },
};
</script>

<style></style>
