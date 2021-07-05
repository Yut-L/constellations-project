<template>
  <div class="card">
    <div class="wrapper">
      <img :src="require(`../../assets/img/${name || '白羊座'}.jpg`)" :alt="name" />
      <div class="mask">
        <h1>{{name || '白羊座'}}</h1>
        <p v-if="allIndex">综合指数：{{allIndex || 0}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "consCard",
  props: {
    name: String,
    allIndex: String | Number
  }
};
</script>
<style lang="scss" scoped>
@keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*中间状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为1*/
  }
}
.card {
  padding: 0.1rem;
  box-sizing: border-box;

  .wrapper {
    position: relative;
    border-radius: 0.15rem;
    box-shadow: 0.02rem 0.03rem 0.05rem #333;
    overflow: hidden;

    img {
      animation-name: fadeIn; /*动画名称*/
      animation-duration: 0.5s; /*动画持续时间*/
      animation-iteration-count: 1; /*动画次数*/
      animation-delay: 0s;
    }

    .mask {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      color: #ffd7f5;
      font-size: 0.5rem;

      p {
        font-size: 0.2rem;
        color: #fff;
        margin-top: 0.35rem;
      }
    }
  }
}
</style>