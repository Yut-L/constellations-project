<template>
  <div class="tab">
    <div class="tab-item" v-for="(item, index) of tabData" :key="index">
      <tab-icon :iconText="item.iconText" :path="item.path">{{item.tabText}}</tab-icon>
    </div>
  </div>
</template>

<script>
import TabIcon from "./icon";
import tabData from "@/datas/tab";
import { reactive, toRefs } from "vue";

export default {
  name: "Tab",
  components: {
    TabIcon
  },
  setup() {
    const state = reactive({
      tabData
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;

  z-index: 1;
  width: 100%;
  height: 0.44rem;
  border-top: 1px solid #ddd;
  background-color: #fff;
  max-width: 500px;

  .tab-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
    height: 100%;
  }
}
</style>