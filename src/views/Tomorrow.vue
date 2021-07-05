<template>
  <div class="container">
    <consCard 
    :name="tomorrowData.name"
    :allIndex="tomorrowData.all"
    />
    <consList
    :data='tomorrowData'
    />
  </div>
</template>

<script>
import getData from "@/serves";
import {onMounted, computed, ref, onActivated} from "vue";
import {useStore} from "vuex";

import consList from "@/components/list/tomorrow";

export default {
  name: "TomorrowPage",
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
      tomorrowData: computed(() => state.tomorrow)
    }  
  }
}
</script>