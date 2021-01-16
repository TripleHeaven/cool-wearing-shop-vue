<template>
  <div id="app">
    <a class="header">START.</a>
    <div class="global-wrapper">
      <router-view />
    </div>
  </div>
</template>

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
    text-align: center;
    justify-content: center;
    font-size: 32px;
    border-bottom: 1px solid;
    border-color: rgba($color: #000000, $alpha: 0.1);
  }
  .global-wrapper {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: 240px auto;
    column-gap: 40px;
    max-width: 1376px;
    margin: 0px auto;
  }
}
</style>
