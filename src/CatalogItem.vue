<template>
  <div class="catalog-item-card">
    <img :src="getImgId()" />
    <p class="catalog-item-title">{{ this.catalogItem.title }}</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
// import store from "./vuex/store";

export default {
  name: "CatalogItem",
  components: {},
  props: {
    catalogItem: Object,
  },
  data() {
    return {
      imgPath: "./assets/itemsPics/" + this.catalogItem.id + ".jpeg",
    };
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.catalogItem);
    },
    getImgId() {
      const images = require.context("./assets/itemsPics", false, /\.jpeg$/);
      return images("./" + this.catalogItem.id + ".jpeg");
    },
  },
};
</script>

<style lang="scss">
.catalog-item-card {
  min-height: 200px;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.5s;
  .catalog-item-title {
    font-family: "Anton", sans-serif;
    font-size: 20px;
    margin: 0;
    padding: 1px;
  }
  img {
    width: 200px;
  }
  button {
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
  }
  button:hover {
    color: #ffffff;
    background-color: rgb(0, 0, 0);
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
