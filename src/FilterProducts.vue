<template>
  <div :class="isToggleOpen ? `filter-wrapper-open` : `filter-wrapper`">
    <!-- <div class="filter-header" @click="toggleOpen">
      Filters
    </div> -->
    <input type="checkbox" id="accordeonVar" />
    <label for="accordeonVar" class="filter-header">Products Catalog</label>
    <div class="filter-items">
      <div class="filter-item" @click="FILTER_SHOP(`none`)">
        Clear Filter
      </div>
      <div class="filter-item" @click="FILTER_SHOP(`sneaker`)">
        Sneakers
      </div>
      <div class="filter-item" @click="FILTER_SHOP(`boot`)">
        Boots
      </div>
    </div>
  </div>
  <!-- {{ this.$store.state.products }} -->
</template>

<script>
// import store from "./vuex/store";
// import { mapActions, mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "FilterProducts",
  components: {},
  data() {
    return { isToggleOpen: false };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_BASE_STATE", "FILTER_SHOP"]),
    toggleOpen() {
      this.isToggleOpen = !this.isToggleOpen;
      console.log(this.isToggleOpen);
    },
  },
  computed: {},
  mounted() {},
};
</script>

<style lang="scss">
.filter-wrapper {
  display: flex;
  max-width: 245px;
  flex-direction: column;
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  :checked ~ .filter-items {
    visibility: visible;
    opacity: 1;
    height: 100px;
    padding-left: 10px;
    font-family: "Anton", sans-serif;
    font-size: 24px;
    transition: all 0.4s linear;
  }
  :checked ~ .filter-header::after {
    transform: translateY(-50%) rotate(0deg);
  }
  .filter-header {
    font-family: "Anton", sans-serif;
    font-size: 24px;
    height: 40px;
    position: relative;
    cursor: pointer;
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 0px;
      transform: translateY(-50%) rotate(90deg);
      transition: all 0.4s ease;
      width: 30px;
      height: 30px;
      background-image: url(./assets/down-arrow.svg);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  .filter-items {
    visibility: hidden;
    cursor: pointer;
    opacity: 0;
    height: 0;
    font-family: "Anton", sans-serif;
    transition: all 0.4s linear;
  }
  //   .filter-header {
  //     font-family: "Anton", sans-serif;
  //     font-size: 24px;
  //     height: 40px;
  //     -webkit-box-align: center;
  //     align-items: center;
  //     margin-top: 30px;
  //     position: relative;
  //     transition: all 0.4s linear;
  //     &::after {
  //       content: "";
  //       position: absolute;
  //       top: 50%;
  //       right: 0px;
  //       transform: translateY(-50%) rotate(-90deg);
  //       transition: all 0.4s ease;
  //       width: 30px;
  //       height: 30px;
  //       background-image: url(./assets/down-arrow.svg);
  //       background-position: center;
  //       background-size: contain;
  //       background-repeat: no-repeat;
  //     }
  //   }
  //   .filter-items {
  //     color: black;
  //     font-size: 18px;
  //     opacity: 0;
  //     max-height: 0px;
  //     overflow-y: hidden;
  //     transition: all 0.4 ease-out;
  //   }
  // }
  // .filter-wrapper-open {
  //   display: flex;
  //   max-width: 245px;
  //   flex-direction: column;
  //   .filter-header {
  //     font-family: "Anton", sans-serif;
  //     font-size: 24px;
  //     height: 40px;
  //     -webkit-box-align: center;
  //     align-items: center;
  //     margin-top: 30px;
  //     position: relative;
  //     transition: all 0.4s linear;
  //     &::after {
  //       content: "";
  //       position: absolute;
  //       top: 50%;
  //       right: 0px;
  //       transform: translateY(-50%) rotate(0deg);
  //       transition: all 0.4s ease;
  //       width: 30px;
  //       height: 30px;
  //       background-image: url(./assets/down-arrow.svg);
  //       background-position: center;
  //       background-size: contain;
  //       background-repeat: no-repeat;
  //     }
  //   }
  //   .filter-items {
  //     color: black;
  //     font-size: 18px;
  //     opacity: 1;
  //     max-height: 1000px;
  //     overflow-y: inherit;
  //     font-family: "Anton", sans-serif;
  //     transition: all 0.4 ease-out;
  //     padding-left: 10px;
  //   }
}
</style>
