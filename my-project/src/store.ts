import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 用户
type UserDataType = {
  id:number;
  name:string;
  age:number;
}
// 接口
// Array<UserDataType> 数组泛型
interface stateType{
  userData:Array<UserDataType>;
  count:number;
  text:string
}

const state:stateType = {
  text:'我在学习vue-cli3.0',
  count:1,
  userData:[
    {
      id:0,
      name:'小泽',
      age:23
    },
    {
      id:1,
      name:'小小泽',
      age:22
    }
  ]
}

export default new Vuex.Store({
  state,
  mutations: {
    addCount(state):void{
      state.count ++
    }
  },
  actions: {
    addCount(context){
      context.commit('addCount')
    }
  }
});
