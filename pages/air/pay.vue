<template>
  <div class="pay">
    <div class="main">
      <div class="top clearfix">
        <p>支付总金额<span>￥1395.00</span></p>
      </div>
      <div class="payPage">
        <h2>微信支付</h2>
        <div class="mainPage clearfix">
          <div class="qrcode">
            <canvas style="width:200px;height:200px" />
            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <div class="description">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // 使用钩子函数获取订单的详细信息
    // 获取订单ID信息
    const id = this.$route.params.id
    console.log(id)
    this.$axios({
      url: '/airorders/'
    })
  }
}
</script>

<style lang="less" scoped>
.pay{
  background-color: #f5f5f5;
  padding: 30px;
  .main{
    width: 1000px;
    margin: 0 auto;
    background-color: #fff;
    .top{
      background-color: #f5f5f5;
      height: 50px;
      line-height: 40px;
      padding-bottom: 10px;
      p{
        float: right;
        font-size: 16px;
        span{
          font-size: 28px;
          color: #ff4500;
        }
      }
    }
    .payPage{
      border-top: 5px solid #ffa500;
      padding: 30px;
      h2{
        font-size: 28px;
        font-weight: 500;
      }
      .mainPage{
        padding: 0px 80px;
        position: relative;
        .qrcode{
          position: absolute;
          left:-80;
          top:50%;
          transform: translateY(-50%);
          width: 230px;
          height: 310px;
          border: 1px solid #ddd;
          font-size: 16px;
          padding: 15px;
          canvas{
            margin-bottom: 10px;
          }
          p{
            height: 32px;
            line-height: 32px;
            text-align: center;
          }
        }
        .description{
          float: right;
        }
      }
    }
  }
}
</style>
