<template>
  <header class="header">
    <img src="../../assets/img/cons.png" />
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      header1: "星座物语"
    };
  },
  name: "myHeader"
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 0.44rem;
  background-color: #db7093;
  color: #fff;
  font-size: 0.18rem;
  max-width: 5rem;

  img {
    width: 0.23rem;
    margin-right: 0.05rem;
  }
}
</style>