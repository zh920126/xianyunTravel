<template>
  <div class="aside">
    <!-- 顶部时间项 -->
    <div class="departDate">
      <span>{{airsDate.arr_date}}</span>
      <span>{{airsDate.org_city_name}} - {{airsDate.dst_city_name}}</span>
    </div>
    <!-- 机场与飞行时长项 -->
    <div class="airport">
      <div class="depart">
        <span>{{airsDate.dep_time}}</span>
        <span>{{airsDate.org_airport_name}}{{airsDate.org_airport_quay}}</span>
      </div>
      <div class="flightTime">
        <span>---{{flightTime}}---</span>
        <span>{{airsDate.airline}}{{airsDate.flight_no}}</span>
      </div>
      <div class="dest">
        <span>{{airsDate.arr_time}}</span>
        <span>{{airsDate.dst_airport_name}}{{airsDate.dst_airport_quay}}</span>
      </div>
    </div>
    <!-- 订单总价 -->
    <div class="orderForm">
      <div class="order">
        <span>订单总价</span>
        <span>金额</span>
        <span>数量</span>
      </div>
      <div class="ticket">
        <span>成人机票</span>
        <span>￥{{airsDate.seat_infos.par_price}}元</span>
        <span>x1</span>
      </div>
      <div class="fuelOil">
        <span>机键+燃油</span>
        <span>￥50/人/单程</span>
        <span>x1</span>
      </div>
      <!-- 应付总金额项 -->
      <div class="totalPsrice">
        <span>应付总额:</span>
        <span>￥{{totalPrice}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //接收父组件传递过来的数据进行渲染
  props: ["airsDate","totalPrice"],
  computed: {
    //使用计算属性来计算出飞行时长
    flightTime(){
      let departTime=this.airsDate.dep_time.split(":")
      let arrTime=this.airsDate.arr_time.split(":")
      //将所有的时间数据全部转化为分钟之后进行运算
      let departSec=departTime[0]*60+(+departTime[1])
      let destSec=arrTime[0]*60+(+arrTime[1])
      //使用到达时间减去出发时间，然后转化为小时和分钟，进行显示
      let flightalltimes=destSec-departSec
      if(flightalltimes<0){
        flightalltimes=destSec+24*60-departSec
      }
      let hours=Math.floor(flightalltimes/60)
      let minutes=Math.floor(flightalltimes%60)
      return hours+"时"+minutes+"分"
    }
  }
}
</script>

<style lang="less" scoped>
.aside{
  float: right;
  width: 350px;
  border: 1px solid #ddd;
  .departDate{
    display: flex;
    justify-content: space-between;
    padding: 15px;
    span{
      &:nth-child(1){
        font-size: 16px;
      }
      &:nth-child(2){
        font-size: 14px;
      }
    }
  }
  .airport{
    padding: 0px 15px 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #ddd;
    div{
      width: 33%; 
      font-size: 12px;
      color: #999;
      &:nth-child(1),&:nth-child(3){
        span{
          display: block;
          text-align: left;
          &:nth-child(1){
            font-size: 22px;
            color: #000;
            margin-bottom: 5px;
          }
        }
      }
      &:nth-child(2){
        margin-top: 10px;
        text-align: center;
        span{
          display: block;
        }
      }
      &:nth-child(3){
        span{
          text-align: right;
        }
      }
    }
  }
  .orderForm{
    .order,.ticket,.fuelOil{
      display: flex;
      justify-content: space-between;
      padding:10px 15px;
      border-bottom: 1px dashed #ddd;
      font-size: 14px;
      color: #666;
    }
    .totalPsrice{
      padding: 20px 15px;
      display: flex;
      justify-content: space-between;
      color: #666;
      span{
        &:nth-child(2){
          font-size: 28px;
          color: orange;
        }
      }
    }
  }
}
</style>