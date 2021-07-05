<template>
  <div class="list">
    <consItem
      title="明日日期"
      :content="data.datetime"
    />
    <consItem
      title="配对星座"
      :content="data.QFriend"
    />
    <consItem
      title="幸运颜色"
      :content="data.color"
    />
    <consItem
      title="幸运数字"
      :content="data.number"
    />
    <summary0
      field="明日"
      :content="data.summary"
    />
  </div>
</template>
<script>
export default {
  name:'tomorrowList',
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