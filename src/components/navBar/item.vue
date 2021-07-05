<template>
  <div :class="['nav-item', {'nav-current': index === curIdx}]" @click="navClick(index)">{{item}}</div>
</template>
<script>
export default {
  name: "navItem",
  props: {
    item: String,
    curIdx: Number,
    index: Number
  },
  setup(props, { emit }) {
    const navClick = index => {
      emit("navClick", index);
    };
    return {
      navClick
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-item {
  width: 0.8rem;
  height: 100%;
  font-size: 0.14rem;
  line-height: 0.38rem;
  text-align: center;
  color: #666;

  &.nav-current {
    color: #db7093;
    font-weight: bold;
  }
}
</style>