//将用户数据存到vuex
//因为vuex是在node后台运行，是没有dom中的api--localStorage的  所以只能存在vuex中
//固定写法，所有仓库里面的数据都叫state
export const state=()=>({
  //使用接口返回的用户的数据类型
  userMessage:{
    token:'',
    user:{}
  }
})
//vuex里面的数据改变需要使用函数来改变，不能直接使用赋值//mutations用来改变数据参数
//
export const mutations= {
  //mutations里面的每一个属性都是一个函数
  //有两个参数，第一个是我们的状态对象 state 第二个是我们需要改变的数据
  setUserMessage(state,data){
    state.userMessage=data
  }
}