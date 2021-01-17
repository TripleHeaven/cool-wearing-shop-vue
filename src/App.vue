<template>
  <div id="app">
    <div class="header">
      <a>START.</a><ModalWindow class="modalThing"></ModalWindow>
    </div>
    <div class="global-wrapper">
      <router-view />
    </div>
    <div class="footer">
      <span class="footer-header">END.</span>
      <span><a href="https://github.com/TripleHeaven">My GITHUB</a></span>
      <span
        ><a href="https://github.com/TripleHeaven/cool-wearing-shop-vue"
          >SOURCE CODE</a
        ></span
      >
    </div>
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { ModalWindow },
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
html,
body {
  margin: 0;
}
#app {
  //  header style
  @import url("https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Coda+Caption:wght@800&family=Roboto:ital,wght@0,500;0,700;0,900;1,500;1,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
  .header {
    display: flex;
    font-family: "Coda Caption", sans-serif;
    height: 80px;
    align-items: center;

    justify-content: space-around;
    font-size: 32px;
    border-bottom: 1px solid;
    border-color: rgba($color: #000000, $alpha: 0.1);
    .modalThing {
      display: flex;

      .openMode {
        border: none;
        background: #ffffff;
        font-family: "Coda Caption", sans-serif;
        font-size: 32px;

        animation: color-change 1s infinite;

        @keyframes color-change {
          0% {
            color: black;
          }
          50% {
            color: gray;
          }
          100% {
            color: #281d1d;
          }
        }
      }
    }
  }
  .global-wrapper {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 240px auto;
    column-gap: 40px;
    max-width: 1376px;
    margin: 0px auto;
  }
  .footer {
    margin-top: 40px;
    height: 200px;
    background: rgb(0, 0, 0);
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: inherit; /* blue colors for links too */
      text-decoration: inherit; /* no underline */
    }
    span {
      color: #fff;
      font-family: "Coda Caption", sans-serif;
      font-size: 32px;
      height: 50px;
      cursor: pointer;
    }
  }
}
</style>
