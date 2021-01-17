<template>
  <div class="shop-item-card">
    <img :src="getImgId()" />
    <p class="shop-item-title">{{ this.cartItem.title }}</p>
    <button class="buttonDel" @click="deleteCartItem">Delete from cart</button>
  </div>
  <!-- <div class="cartItem">
    {{ this.cartItem }}
    <button @click="deleteCartItem">Deleting item from cart</button>
  </div> -->
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
    getImgId() {
      const images = require.context("./assets/itemsPics", false, /\.jpeg$/);
      return images("./" + this.cartItem.id + ".jpeg");
    },
  },
  computed: {},
};
</script>

<style lang="scss">
.shop-item-card {
  min-height: 150px;
  flex: 1 1 0%;
  display: flex;
  -webkit-box-pack: start;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.5s;
  .shop-item-title {
    font-family: "Anton", sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 1px;
    width: 270px;
  }
  img {
    width: 100px;
  }
  .buttonDel {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid rgb(0, 0, 0);
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: rgb(0, 0, 0);
    text-align: center;
    transition: all 0.3s;
    font-size: 12px;
  }
  .buttonDel:hover {
    color: rgb(0, 0, 0);
    background-color: gray;
  }
  @media all and (max-width: 30em) {
    button {
      display: block;
      margin: 0.4em auto;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 1);
    color: #fff;
  }
}
</style>
