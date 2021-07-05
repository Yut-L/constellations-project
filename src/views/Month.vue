<template>
  <div class="container">
    <consCard :name="monthData.name" :allIndex="Number(monthData.all)" />
    <consList :data="monthData" />
  </div>
</template>

<script>
import getData from "@/serves";
import { onMounted, computed, ref, onActivated } from "vue";
import { useStore } from "vuex";

import consList from "@/components/list/month";

export default {
  name: "MonthPage",
  components: {
    consList
  },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref("");

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    // 判断当前tab和nav的星座名是否一致
    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });

    return {
      monthData: computed(() => state.month)
    };
  }
};
</script>