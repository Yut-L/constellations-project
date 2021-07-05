<template>
  <div class="list">
    <summary0
      field="健康"
      :content="data.health"
    />
    <summary0
      field="学业"
      :content="data.work"
    />
    <summary0
      field="恋爱"
      :content="data.love"
    />
    <summary0
      field="财运"
      :content="data.money"
    />
    <summary0
      field="本月"
      :content="data.all"
    />
  </div>
</template>
<script>
export default {
  name:'monthList',
  props: {
    data: Object
  }
}
</script>
<style lang='scss' scoped>
  .list {
    padding: .15rem .1rem;
    box-sizing: border-box;
  }
</style>