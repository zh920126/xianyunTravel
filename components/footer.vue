<template>
  <div class="footer">
    <div class="container">
      <div class="descript">
         <dl>
        <dt>闲云旅游旅游网</dt>
        <dd>上亿旅行者共同打造的"旅行神器"</dd>
        <dd><span>60,000 </span>多个全球旅游目的地</dd>
        <dd><span>600,000</span>个细分目的地新玩法</dd>
        <dd><span>760,000,000</span> 次攻略下载</dd>
        <dd><span>38,000</span> 家旅游产品供应商</dd>
      </dl>
      <dl>
        <dt>关于我们</dt>
        <dd>隐私政策 商标声明</dd>
        <dd>服务协议 游记协议</dd>
        <dd>商城平台服务协议</dd>
        <dd>网络信息侵权通知指引</dd>
        <dd>闲云旅游旅游网服务监督员</dd>
        <dd>网站地图加入闲云旅游</dd>
      </dl>
      <dl>
        <dt>旅行服务</dt>
        <dd><a href="">旅游攻略</a><a href="">酒店预订</a> </dd>
        <dd><a href="">旅游特价</a><a href="">国际租车</a> </dd>
        <dd><a href="">旅游问答</a><a href="">旅游保险</a> </dd>
        <dd><a href="">旅游指南</a><a href="">订火车票</a> </dd>
        <dd><a href="">旅游资讯</a><a href="">APP下载</a> </dd>
      </dl>
      </div>
      <div class="erweima">
        <img src="http://157.122.54.189:9093/images/1556522965.png" alt="">
        <span>关注我们</span>
      </div>
      <div class="footer-reg">
        <p>京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.footer{
  height: 300px;
  padding-top: 30px;
  background-color: #333;
  .container{
    width: 1000px;
    margin: 0 auto;
    .descript{
      float: left;
      width: 75%;
      padding-bottom: 20px;
      dl{
        float: left;
        color: #ccc;
        dt{
                  font-size: 16px;
                  padding-bottom: 15px;
        }
        dd{
          font-size: 12px;
          line-height: 20px;
        }
        &:nth-child(1){
          margin-right: 50px;
          span{
            color: #ff8c28;
          }
        }
        &:nth-child(2){
          margin-right: 40px;
        }
        &:nth-child(3){
          dd{
            // width: 30px;
            a{
              font-size: 12px;
              color: #ccc;
              &:nth-child(1){
                float: left;
                margin-right: 5px;
              }
              &:nth-child(2){
                float: right;
              }
            }
          }
        }
      }
    }
    .erweima{
      float: right;
      width: 250px;
      text-align: center;
      img{
        width: 140px;
        display: block;
        margin: 0 auto;
      }
      span{
        margin-top: 5px;
      }
    }
    .footer-reg{
      float: left;
      width: 1000px;
      line-height: 60px;
      text-align: center;
      font-size: 12px;
      color: #333;
            border-top: 1px solid #666;
    }
  }
}

</style>