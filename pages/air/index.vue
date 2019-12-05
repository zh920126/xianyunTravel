<template>
  <div class="air">
    <!-- 头部部分 -->
    <h3><span class="iconfont">&#xe67c;</span>国内机票</h3>
    <!-- 搜索框和banner部分 -->
    <div class="search-banner clearfix">
      <div class="search">
        <div class="return clearfix">
          <span :class="{orange:currentTab===0}"><span class="iconfont">&#xe94c;</span>
            单程</span>
          <span @click="handleCheck"><span class="iconfont">&#xe8da;</span>
            往返</span>
        </div>
        <Search></Search>
      </div>
      <div class="banner">
        <a href="http://www.baidu.com"><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4121236200,1201346551&fm=26&gp=0.jpg" alt=""></a>
      </div>
    </div>
    <!-- 服务部分 -->
    <div class="service">
      <div class="renz">
        <span class="iconfont">&#xe79f;</span>
        <span>100%航协认证</span>
      </div>
      <div class="promise">
        <span class="iconfont">&#xe60d;</span>
        <span>出行保证</span>
      </div>
      <div class="serve">
        <span class="iconfont">&#xe60c;</span>
        <span>7X24小时服务</span>
      </div>
    </div>
    <!-- 特价机票 -->
    <div class="special-ticket">
      <span class="iconfont">&#xe902;</span>
      <span>特价机票</span>
    </div>
    <!-- 底部图片栏 -->
    <div class="pics clearfix">
      <div class="pic" v-for="(value,index) in discountedTicket" :key="index">
        <!-- 在此处跳转的路由当中进行路由参数的拼接 -->
         <a :href="`/air/fights?departCity=${value.departCity}&departCode=${value.departCode}&destCity=${value.destCity}&destCode=${value.destCode}&departDate=${value.departDate}`"><img :src="value.cover" alt="">
         <div class="description">
           <span>{{value.departCity}}-{{value.destCity}}</span>
           <span>￥{{value.price}}</span>
         </div>
         </a>
      </div>
    </div>
  </div>
</template>

<script>
//引入组件
import Search from '../../components/air/search.vue'
export default {
  data () {
    return {
        //添加变量对点击之后的样式进行切换
        currentTab:0,
        //添加变量用来对特价机票栏进行渲染
        discountedTicket:[]
    }
  },
  components: {
    //注册组件
    Search,
  },
  methods: {
    //当单击往返按钮时，提示用户此功能尚未开通
    handleCheck(){
       this.$confirm('目前暂不支持往返，请使用单程选票！', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancelButton:false,
          type: 'warning'
        })
    }
  },
  mounted () {
    //当页面刚打开时就使用钩子函数获取特价机票详情进行页面的渲染
    this.$axios({
      url:'/airs/sale'
    }).then(res=>{
      // console.log(res);
      this.discountedTicket=res.data.data
    })
  }
  
}
</script>

<style lang="less" scoped>
.orange{
  border-top: 3px solid #ffa500!important;
  background-color: #fff!important;
}
.air{
  width: 1000px;
  margin: 0 auto;
  h3{
    margin: 15px 0px;
    color: #ffa500;
    font-size: 20px;
    font-weight: 500;
    >span{
      margin-right: 10px;
    }
  }
  .search-banner{
    height: 350px;
    .search{
      height: 350px;
      float: left;
      border: 1px solid #ddd;
      border-top: none;
      .return{
        > span{
          float: left;
          flex: 1;
          height: 50px;
          width: 179px;
          line-height: 50px;
          text-align: center;
          font-size: 18px;
          border-top: 3px solid #eee;
          ;background-color: #eee;
          span{
            font-size: 16px;
            color: #000;
            font-weight: 600;
          }
        }
      }
    }
    .banner{
      width: 620px;
      float: right;
      img{
        width: 100%;
        height: 350px;
      }
    }
  }
  .service{
    width: 100%;
    height: 50px;
    padding: 5px;
    margin: 15px 0px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    background-color: #f5f5f5;
    display: flex;
    font-size: 16px;
    .renz{
      flex: 1;
      height: 38px;
      line-height: 38px;
      text-align: center;
      span{
        &:nth-child(1){
          font-size: 30px;
          color: skyblue;
        }
      }
    }
    .promise{
      flex: 1;
      height: 38px;
      line-height: 38px;
      text-align: center;
      border-right: 1px solid #ddd;
      border-left: 1px solid #ddd;
      span{
        &:nth-child(1){
          font-size: 30px;
          color: green;
        }
      }
    }
    .serve{
      flex: 1;
      height: 38px;
      line-height: 38px;
      text-align: center;
      span{
        &:nth-child(1){
          font-size: 30px;
          color: #409eff;
        }
      }
    }
  }
  .special-ticket{
    margin: 15px 0px;
    color: #409eff;
    font-size: 20px;
    span{
      &:nth-child(1){
        font-size: 20px;
      }
    }
  }
  .pics{
    width: 100%;
    margin-bottom: 50px;
    padding: 20px;
    border: 1px solid #ddd;
    .pic{
      float: left;
      width: 225px;
      border: 1px solid #ddd;
      box-sizing: border-box;
      &:nth-child(n+2){
        margin-left: 19px;
      }
      a{
        display: block;
        position: relative;
        height: 140px;
        overflow: hidden;
        .description{
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, .4);
          height: 30px;
          line-height: 30px;
          width: 100%;
          color: #fff;
          display: flex;
          justify-content: space-between;
          padding: 0px 10px;
        }
        img{
          width: 100%;
          display: block;
          }
      }
    }
  }
}

</style>
