<template>
  <div class="container clearfix">
    <div class="left">
      <!-- 引入头部组件 -->
      <FightsHeader />
      <fightsMessage :flight="item" v-for="(item, index) in dataList" :key="index" />
    </div>
    <div class="right clearfix">
      <div class="clearfix">
        <div class="renz">
          <span class="iconfont">&#xe79f;</span>
          <span>航协认证</span>
        </div>
        <div class="promise">
          <span class="iconfont">&#xe60d;</span>
          <span>出行保证</span>
        </div>
        <div class="call">
          <span class="iconfont">&#xe60c;</span>
          <span>7X24</span>
        </div>
      </div>
      <p>免费客服电话：4006345678转2</p>
    </div>
  </div>
</template>

<script>
// 引入飞机票页面的头部组件
import FightsHeader from '../../components/air/fightsHeader.vue'
import fightsMessage from '../../components/air/fightsMessage.vue'
export default {
  components: {
    // 组件组件
    FightsHeader, fightsMessage
  },
  data () {
    return {
      flightsData: {}, // 航班总数据
      dataList: [] // 航班列表数据，用来渲染页面
    }
  },
  // 使用钩子函数获取所有的航班信息
  mounted () {
    // console.log(this.$route.query);
    // 对于路由,两种参数分别是 params 和 query
    // 对于 axios 两种参数分别是 data 和 params

    this.$axios({
      url: '/airs',
      // 参数可以通过 this.$route.query
      // 这里面数据本来就是一个对象,所以无需自己拼接
      params: this.$route.query
    }).then((res) => {
      this.flightsData = res.data
      this.dataList = this.flightsData.flights
    })
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .left{
    width: 745px;
    float: left;
  }
  .right{
    float: right;
    width: 240px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 10px 0px 0px;
    .renz,.promise,.call{
      float: left;
      width: 33%;
      span{
        display: block;
        &:nth-child(1){
          font-size: 40px;
          color: #409eff;
          text-align: center;
        }
        &:nth-child(2){
          text-align: center;
          font-size: 12px;
        }
      }
    }
    .promise{
      span{
        &:nth-child(1){
          color: green;
        }
      }
    }
    p{
      margin-top: 10px;
      height: 32px;
      line-height: 32px;
      padding-left: 10px;
      font-size: 14px;
      background-color: #f6f6f6;
    }
  }
}
</style>
