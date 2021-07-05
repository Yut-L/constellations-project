<template>
  <div class="container">
    <consCard 
    :name="yearData.name"
    :allIndex="yearData.all"
    />
    <consList
      :data='yearData'
    />
  </div>
</template>

<script>
import getData from "@/serves";
import {onMounted, computed, ref, onActivated} from "vue";
import {useStore} from "vuex";

import consList from "@/components/list/year"

export default {
  name: "YearPage",
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
      yearData: computed(() => state.year)
    }
  }
}
</script>