<template>
  <div>
    <button class="openMode" @click="isModalOpen = !isModalOpen">CART</button>
    <transition v-if="isModalOpen" name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">
                Your Cart
              </slot>
            </div>

            <div class="modal-body">
              <slot v-if="CART.length" name="body">
                <ShopCart></ShopCart>
              </slot>
              <div class="cartEmpty" v-else>Cart is empty</div>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                Updates are coming soon
                <button
                  class="modal-default-button"
                  @click="isModalOpen = !isModalOpen"
                >
                  Back to shop
                </button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ShopCart from "./ShopCart";
import { mapGetters } from "vuex";
export default {
  name: "CatalogItem",
  components: { ShopCart },
  props: {},
  data() {
    return {
      isModalOpen: false,
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
};
</script>

<style lang="scss">
.cartEmpty {
  font-family: "Coda Caption", sans-serif;
  font-size: 42px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  height: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  font-size: 22px;
  font-family: "Coda Caption", sans-serif;
}

.modal-body {
  margin: 20px 0;
  margin-right: -15px;
  height: 300px;
  overflow-y: scroll;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
