<template>
  <div class="list">
    <consItem
      title="本周日期"
      :content="data.date"
    />
    <summary0
      field="工作"
      :content="data.work"
    />
        <summary0
      field="学业"
      :content="data.job"
    />
        <summary0
      field="恋爱"
      :content="data.love"
    />
        <summary0
      field="财运"
      :content="data.money"
    />
  </div>
</template>
<script>
export default {
  name:'weekList',
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