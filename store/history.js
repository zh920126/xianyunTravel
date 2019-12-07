//将用户搜索的数据存储到vuex ，然后储存到本地存储中去
export const state=()=>({
  userHistory:[]
})

//使用mutations来修改history的数据
export const mutations={
  //里面的每一个属性都是一个函数，函数有两个参数，第一个是需要修修改的数据
  //第二个是传入的参数
  setUserHistory(state,data){
    state.userHistory.push(data)
  },
  //删除历史记录
  DelUserHistory(state,index){
    state.userHistory.splice(index,1)
  }
}