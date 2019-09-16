<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <button @click="addCount()">{{count}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
// 组件传值通过@prop
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  // 公有属性,定义数据
  // public count: number = 1;
  public text:string = this.$store.state.text;

  // computed计算属性
  get count(){
    return this.$store.state.count
  }
  
  // 方法
  addCount():void{
    this.$store.dispatch('addCount');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
