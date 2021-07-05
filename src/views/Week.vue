<template>
  <div class="container">
    <consCard 
    :name="weekData.name"
    :allIndex="weekData.all"
    />
    <consList
      :data='weekData'
    />
  </div>
</template>

<script>
import getData from "@/serves";
import {onMounted, compile, computed, ref, onActivated} from "vue";
import {useStore} from "vuex";

import consList from "@/components/list/week"

export default {
  name: "WeekPage",
  components: {
    consList
  },
  setup () {
        const store = useStore(),
          state = store.state,
          status = ref('');

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    onActivated(() => {
      if(status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    })
 
    return {
      weekData: computed(() => state.week)
    }
  }
}
</script>