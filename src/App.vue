<template>
  <div id="app">
    <my-header>星座物语</my-header>
    <NavBar />
    <errorTip v-if="0" />
    <router-view v-slot="{Component}" v-else>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>
import MyHeader from "@/components/header/index.vue";
import Tab from "@/components/tab/index.vue";
import { watch, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NavBar from "@/components/navBar";
import errorTip from "@/components/errorTip";

export default {
  name: "App",
  components: {
    MyHeader,
    Tab,
    NavBar,
    errorTip
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();

    // 刷新回到默认页面并更新Vuex
    router.push("/");
    store.commit("setField", "today");

    // 监听当前tab的路由跳转并更新Vuex
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      value => {
        store.commit("setField", value);
      }
    );

    return {
      errorCode: computed(() => state.errorCode)
    };
  }
};
</script>