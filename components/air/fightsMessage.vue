<template>
  <div class="flight-item">
    <div @click="handleCurrentTab">
      <!-- 显示的机票信息 -->
      <el-row type="flex" align="middle" class="flight-info">
        <el-col :span="6">
          <span>{{ flight.airline_name }}</span>
          {{ flight.flight_no }}
        </el-col>
        <el-col :span="12">
          <el-row type="flex" justify="space-between" class="flight-info-center">
            <el-col :span="8" class="flight-airport">
              <strong>{{ flight.dep_time }}</strong>
              <span>{{ flight.org_airport_name + flight.org_airport_quay }}</span>
            </el-col>
            <el-col :span="8" class="flight-time">
              <span>{{flightTime}}</span>
            </el-col>
            <el-col :span="8" class="flight-airport">
              <strong>{{ flight.arr_time }}</strong>
              <span>{{ flight.dst_airport_name+flight.dst_airport_quay }}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="flight-info-right">
          ￥
          <span class="sell-price">{{ flight.base_price }}</span>起
        </el-col>
      </el-row>
    </div>
    <div v-show="currentTab" class="flight-recommend">
      <!-- 隐藏的座位信息列表 -->
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="4">
          低价推荐
        </el-col>
        <el-col :span="20">
          <el-row
            v-for="(item,index) in flight.seat_infos"
            :key="index"
            type="flex"
            justify="space-between"
            align="middle"
            class="flight-sell"
          >
            <el-col :span="16" class="flight-sell-left">
              <span>{{ item.name }}</span>
              | {{ item.supplierName }}
            </el-col>
            <el-col :span="5" class="price">
              ￥{{ item.settle_price_coupon }}
            </el-col>
            <el-col :span="3" class="choose-button">
              <el-button type="warning" size="mini">
                选定
              </el-button>
              <p>剩余：83</p>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['flight'],
  data () {
    return {
      // 定义变量用来点击时弹框
      currentTab: false
    }
  },
  methods: {
    handleCurrentTab () {
      this.currentTab = !this.currentTab
    }
  },
  computed: {
    //使用计算属性计算出航班的飞行时间
    //将时间全部转化为毫秒后进行运算
    flightTime(){
      let departTime=this.flight.dep_time.split(":")
      let arrTime=this.flight.arr_time.split(":")
      //将所有的时间数据全部转化为分钟之后进行运算
      let departSec=departTime[0]*60+(+departTime[1])
      let destSec=arrTime[0]*60+(+arrTime[1])
      //使用到达时间减去出发时间，然后转化为小时和分钟，进行显示
      let flightalltime=destSec-departSec
      if(flightalltime<0){
        flightalltime=destSec+24*60-departSec
      }
      let hours=Math.floor(flightalltime/60)
      let minutes=Math.floor(flightalltime%60)
      return hours+"时"+minutes+"分"
    }
  }
}
</script>

<style scoped lang="less">
.flight-item {
  border: 1px #ddd solid;
  margin-bottom: 10px;

  .flight-info {
    padding: 15px;
    cursor: pointer;

    > div {
      &:first-child,
      &:last-child {
        text-align: center;
      }
    }
  }

  .flight-info-center {
    padding: 0 30px;
    text-align: center;

    .flight-airport {
      strong {
        display: block;
        font-size: 24px;
        font-weight: normal;
      }
      span {
        font-size: 12px;
        color: #999;
      }
    }

    .flight-time {
      span {
        display: inline-block;
        padding: 10px 0;
        border-bottom: 1px #eee solid;
        color: #999;
      }
    }
  }

  .flight-info-right {
    .sell-price {
      font-size: 24px;
      color: orange;
      margin: 0 2px;
    }
  }
}

.flight-recommend {
  background: #f6f6f6;
  border-top: 1px #eee solid;
  padding: 0 20px;

  .flight-sell {
    border-bottom: 1px #eee solid;
    padding: 10px 0;

    &:last-child {
      border-bottom: none;
    }

    .flight-sell-left {
      font-size: 12px;
      span {
        color: green;
      }
    }

    .price {
      font-size: 20px;
      color: orange;
    }

    .choose-button {
      text-align: center;
      color: #666;
      button {
        display: block;
        width: 100%;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
