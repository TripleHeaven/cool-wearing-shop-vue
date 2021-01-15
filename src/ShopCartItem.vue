<template>
  <div class="cartItem">
    {{ this.cartItem }}
    <button @click="deleteCartItem">Deleting item from cart</button>
  </div>
</template>

<script>
// import store from "./vuex/store";

export default {
  name: "ShopCart",
  components: {},
  props: { cartItem: Object },
  data() {
    return {};
  },
  methods: {
    deleteCartItem() {
      this.$emit("deleteFromCart", this.cartItem.id);
    },
  },
  computed: {},
};
</script>

<style>
.cartItem {
  display: flex;
}
</style>
