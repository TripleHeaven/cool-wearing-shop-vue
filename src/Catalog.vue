<template>
  <div class="catalog-wrapper">
    <div class="catalog-header">Products Catalog</div>
    <div class="catalog-items-container">
      <CatalogItem
        v-for="catalogItem in TO_SHOW"
        :key="catalogItem.id"
        :catalogItem="catalogItem"
        @addToCart="addToCart"
      >
      </CatalogItem>
    </div>
    <!-- {{ this.$store.state.products }} -->
  </div>
</template>

<script>
// import store from "./vuex/store";
import { mapActions, mapGetters } from "vuex";
import CatalogItem from "./CatalogItem.vue";

export default {
  name: "Catalog",
  components: { CatalogItem },
  methods: {
    ...mapActions(["GET_PRODUCTS_BASE_STATE", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "TO_SHOW"]),
  },
  mounted() {
    this.GET_PRODUCTS_BASE_STATE();
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.catalog-wrapper {
  padding: 12px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  .catalog-header {
    font-family: "Coda Caption", sans-serif;
    font-size: 42px;
    display: flex;
  }
  .catalog-items-container {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    column-gap: 50px;
    row-gap: 24px;
  }
}
</style>
