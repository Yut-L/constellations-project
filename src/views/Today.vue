<template>
  <div class="container">
    <consCard 
    :name="todayData.name"
    :allIndex="todayData.all"
    />
    <numList :data='todayData'/>
    <consList :data='todayData'/>
  </div>
</template>

<script>
import getData from "@/serves";
import {onMounted, computed, ref, onActivated} from "vue";
import {useStore} from "vuex";

import numList from '@/components/numList';
import consList from '@/components/list/today';

export default {
  name: "TodayPage",
  components: {
    numList,
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
      todayData: computed(() => state.today),
    }
  }
}
</script>