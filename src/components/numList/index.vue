<template>
  <div class="num-list">
    <numItem
      v-for="(item, index) of numData"
      :key="index"
      :item="item"
      :data="data"
    />
  </div>
</template>
<script>

import numData from '@/datas/num';
import numItem from './item';

export default {
  name: 'numList',
  components: {
    numItem
  },
  props: {
    data: Object
  },
  setup() {
    return {
      numData
    }
  }
}
</script>
<style lang='scss' scoped>
  .num-list {
    display: flex;
    margin: .15rem 0;
    padding: .1rem;
    box-shadow: .02rem .02rem .05rem #999;
  }
</style>