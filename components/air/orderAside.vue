<template>
  <div class="aside">
    <!-- 顶部时间项 -->
    <div class="departDate">
      <span>2019-04-15</span>
      <span>广州 - 上海</span>
    </div>
    <!-- 机场与飞行时长项 -->
    <div class="airport">
      <div class="depart">
        <span>20:30</span>
        <span>白云机场T1</span>
      </div>
      <div class="flightTime">
        <span>---2时20分---</span>
        <span>东航MU5316</span>
      </div>
      <div class="dest">
        <span>22:50</span>
        <span>浦东机场T2</span>
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
        <span>￥1345元</span>
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
        <span>￥2790</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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