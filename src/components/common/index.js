import consCard from "@/components/common/card";
import consItem from "@/components/common/consItem";
import summary0 from "@/components/common/summary";

let CardPlugin = {};

// 注册全局组件
CardPlugin.install = function(Vue) {
  Vue.component(consCard.name, consCard);
  Vue.component(consItem.name, consItem);
  Vue.component(summary0.name, summary0);
}

export default CardPlugin;