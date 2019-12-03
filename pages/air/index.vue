<template>
  <div class="air">
    <!-- 头部部分 -->
    <h3><span class="iconfont">&#xe67c;</span>国内机票</h3>
    <!-- 搜索框和banner部分 -->
    <div class="search-banner clearfix">
      <div class="search">
        <span>单程</span>
        <span>往返</span>
      </div>
      <div class="banner">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4121236200,1201346551&fm=26&gp=0.jpg" alt="">
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
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less" scoped>
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
      float: left;
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
}

</style>
