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
//!!!注意 mutations只能接受同步代码
export const mutations= {
  //mutations里面的每一个属性都是一个函数
  //有两个参数，第一个是我们的状态对象 state 第二个是我们需要改变的数据
  setUserMessage(state,data){
    state.userMessage=data
  },
  //创建清理数据的函数，用来实现退出功能
  clearUserMessage(state){
    //清空vuex中的state的数据
    state.userMessage={
      token:'',
      user:{}
    }
    //同时清空利用插件存储到本地储存中的vuex数据
    localStorage.removeItem('store')
  }
}

//actions能支持异步的代码，异步的代码比如axios只能使用actions
export const actions= {
  //里面每一个属性都是一个函数
  //里面有两个参数 第一个参数是commit，第二个是数据
  login({commit},data){
    //因为vuex里面不能进行路由的跳转，所以必须返回数据，在vue组件中进行判定之后再进行下一步的操作
    return this.$axios({
      method:'post',
      url:'/accounts/login',
      data
    }).then(res=>{
      console.log(res);
      //登录成功之后需要将数据存储到vuex中
      commit('setUserMessage',res.data)
      //需要返会数据，在vue组件中进行验证，然后提示用户以及路由的跳转
      return res.data
    }).catch(err=>{
      
    })
  }
}