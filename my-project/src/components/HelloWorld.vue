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
  };
  test(){
    // 1、
    // for(var i = 0; i<3; i++){
    //   setTimeout(()=>{
    //     console.log(i)
    //   },0)
    // }
    // 2、
    // var a = {}, b = a;
    // b.name = '小泽';
    // console.log(a.name)
    // 3、
    // function animals(...types){
    //   console.log(types)
    // }
    // animals('1', '2', '3');
    // 4、
    // var a = null;
    // console.log(typeof a);
    // 5、
    // var uname = 'jack';
    // function change(){
    //   console.log(uname);
    //   var uname = '小泽';
    //   console.log(uname);
    // }
    // change();
    // 6、
    // +function(foo){
    //   return typeof foo.bar;
    // }({foo:{bar:1}});
    // 7、
    // var num = 10;
    // function add(){
    //   var num = 0;
    //   return function(){
    //     num += 1;
    //     console.log(num);
    //   }
    // }
    // var s = add();
    // s();
    // s();
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
