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
    // console.log(Qrcode)
    // 获取token
    const token = this.$store.state.user.userMessage.token
    // 如果用户已登录就发送请求
    if (token) {
      this.getData()
    }
  },
  methods: {
    // 封装函数获取数据，并生成二维码
    getData () {
      const id = this.$route.query.id
      // console.log(this.$route.query)
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
          // 使用qrcode来生成二维码
          Qrcode.toCanvas(this.$refs.qrcodeCanvas, this.orderList.payInfo.code_url, { width: 200 })
          // 生成完二维码之后就需要查询支付状态
          this.checkStatus()
          // 当获取数据之后，发送axios请求，获取微信付款的数据
          // this.$axios({
          //   method: 'post',
          //   url: '/airorders/pay',
          //   data: {
          //     amount: this.orderList.price,
          //     order_no: this.orderList.orderNo
          //   },
          //   headers: {
          //     Authorization: 'Bearer ' + token
          //   }
          // }).then((res) => {
          //   console.log(res)
          //   Qrcode.toCanvas(this.$refs.qrcodeCanvas, res.data.code_url, { width: 200 })
          // })
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    // 使用轮询查询支付状态
    checkStatus () {
      // 发送axios请求来查看支付状态
      const token = this.$store.state.user.userMessage.token
      this.$axios({
        method: 'post',
        url: '/airorders/checkpay',
        data: {
          id: this.orderList.id,
          nonce_str: this.orderList.price,
          out_trade_no: this.orderList.orderNo
        },
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then((res) => {
        console.log(res)
        // 对返回结果进行判断,如果未支付就需要再次询问
        if (res.data.trade_state === 'NOTPAY') {
          // 如果未支付，就需要进行轮询，知道成功为止
          setTimeout(() => {
            this.checkStatus()
          }, 2000)
        } else {
          // 除去未支付之外的状态 例如：支付成功获取失败之类
          // 对各种支付状态进行判定，然后提示用户
          this.checkPay(res)
        }
      })
    },
    // 判断函数
    checkPay (res) {
      if (res.data.stade_state === 'SUCCESS') {
        this.$message.success(res.data.statusTxt)
        // 如果支付成功就需要跳转到首页
        this.$router.push('/')
      }
      // 其他状态跳转到机票搜索页面
      if (res.data.stade_state === 'CLOSE') {
        this.$message.warning(res.data.statusTxt)
        this.$router.push('/air')
      }
      if (res.data.stade_state === 'REVOKED') {
        this.$message.warning(res.data.statusTxt)
        this.$router.push('/air')
      }
      if (res.data.stade_state === 'PAYERROR') {
        this.$message.warning(res.data.statusTxt)
        this.$router.push('/air')
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
