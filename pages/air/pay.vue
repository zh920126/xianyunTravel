<template>
  <div class="pay">
    <div class="main">
      <div class="top clearfix">
        <p>支付总金额<span>￥{{ orderList.price }}.00</span></p>
      </div>
      <div class="payPage">
        <h2>微信支付</h2>
        <div class="mainPage clearfix">
          <div class="qrcode">
            <canvas ref="qrcodeCanvas" style="width:200px;height:200px" />
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
// 引入qrcode二维码生成器
import Qrcode from 'qrcode'

export default {
  data () {
    return {
      // 定义变量获取数据用于渲染页面
      orderList: {}
    }
  },
  watch: {
    // 为了防止页面打开时。token值还没有获取到，所以需要对token进行侦听
    '$store.state.user.userMessage.token' () {
      this.getData()
    }
  },
  mounted () {
    // 使用钩子函数获取订单的详细信息
    console.log(Qrcode)
    // 获取token
    const token = this.$store.state.user.userMessage.token
    // 如果用户已登录就发送请求
    if (token) {
      this.getData()
    }
  },
  methods: {
    getData () {
      const id = this.$route.query.id
      console.log(this.$route.query)
      // 获取token
      const token = this.$store.state.user.userMessage.token
      // 如果用户已登录就发送请求
      if (token) {
        this.$axios({
          url: '/airorders/' + id,
          headers: {
            Authorization: 'Bearer ' + token
          }
        }).then((res) => {
          console.log(res)
          // 将获取到的数据赋值给预先定义好的变量
          this.orderList = res.data
          // 当数据获取完成之后需要使用Qrcode来生成二维码图片
          // 要生成二维码就需要两个属性 1.dom 2.支付链接
          // Qrcode插件 需要使用toCanvas 方法来生生canvas图像
          // 有四个参数,我们现在只用到3个参数 canvas dom, text(链接), options(选项,现在只用到宽度设置)
          Qrcode.toCanvas(this.$refs.qrcodeCanvas, this.orderList.payInfo.code_url, {
            width: 200
          })
        }).catch((err) => {
          console.log(err)
        })
      }
    }
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
