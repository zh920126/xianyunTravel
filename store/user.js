//将用户数据存到vuex
//因为vuex是在node后台运行，是没有dom中的api--localStorage的  所以只能存在vuex中
export const state=()=>({
  //使用接口返回的用户的数据类型
  userMessage:{
    token:'',
    user:{}
  }
})