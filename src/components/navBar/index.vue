<template>
  <div class="nav-bar">
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width: ${navData.length * .8}rem`">
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :curIdx="curIdx"
          :index="index"
          @navClick="navClick"
          @click="getName(item)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import getData from "@/serves";
import navData from "@/datas/nav";
import NavItem from "./item";
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "navBar",
  components: {
    NavItem
  },
  setup() {
    const curIdx = ref(0);
    const navClick = index => {
      curIdx.value = index;
    };
    const store = useStore();
    const getName = item => {
      // 提交当前星座名称到Vuex
      store.commit("setConName", item);
      // 请求数据更新页面
      getData(store);
    };

    return {
      navData,
      curIdx,
      navClick,
      getName
    };
  }
};
</script>
<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0.44rem;
  z-index: 1;
  max-width: 4.95rem;
  height: 0.4rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.6rem;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>