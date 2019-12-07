<template>
  <div class="selectair">
    <div class="top clearfix">
        <div class="flightMessage">
              单程:
          <span>{{flightselect.info.departCity}} - {{flightselect.info.destCity}}</span>
          <span>/</span>
          <span>{{flightselect.info.departDate}}</span>
        </div>
       <div class="selectflight">
         <el-select v-model="airport" style="width:120px" placeholder="起飞机场" size="mini" @change="handleSendAll">
          <el-option
            v-for="(item,index) in flightselect.options.airport"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
         <el-select v-model="flightDate" style="width:120px" placeholder="起飞时间" size="mini" @change="handleSendAll">
          <el-option
            v-for="(item,index) in flightselect.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`">
          </el-option>
        </el-select>
         <el-select v-model="company" style="width:120px" placeholder="航空公司" size="mini" @change="handleSendAll">
          <el-option
            v-for="(item,index) in flightselect.options.company"
            :key="index"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
         <el-select v-model="airSize" style="width:120px" placeholder="机型" size="mini" @change="handleSendAll">
          <el-option
            v-for="(item,index) in planeSize"
            :key="index"
            :label="item.size"
            :value="item.value">
          </el-option>
        </el-select>
       </div>
    </div>
    <div class="bottom">
      筛选:
      <el-button type="primary" round size="mini" @click="handleCancle">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  //定义变量用于接收父组件发送过来的数据
  props: ["flightselect"],
  data () {
    return {
    //设置变量用来存储删选条件  
    airport:'',//起飞机场
    flightDate:'',//起飞时间
    company:'',//航空公司
    airSize:'',//机型
    planeSize:[
      {size:'大',value:'L'},
      {size:'中',value:'M'},
      {size:'小',value:'S'}
    ]
    }
  },
  methods: {
    //点击取消时，取消筛选
    handleCancle(){
      // console.log(this.flightselect);
      //将所有的筛选属性还原即可
      this.airport='',
      this.flightDate='',
      this.company='',
      this.airSize=''
      //同时发送事件给父组件进行数据的渲染
      let newFlightlist=this.flightselect.flights
      this.$emit('filterMessage',newFlightlist)
    },
    //筛选起飞机场
    handleAirport(oldFlightlist){
      console.log(this.airport);
      //将数据进行筛选，使用filter进行筛选，只保留符合条件的数据
      let newFlightlist=oldFlightlist.filter(value=>{
        if(value.org_airport_name===this.airport)
        return true
      })
      return newFlightlist
      // console.log(newFlightlist);
      //将筛选后的新数据发送给父组件
      // this.$emit('filterMessage',newFlightlist)
    },
    //筛选起飞时间 
    handleFlightTime(oldFlightlist){
      console.log(this.flightDate);
      //获取起飞开始时间
      let before=+this.flightDate.split(",")[0]
      console.log(before);
      //获取起飞结束时间
      let after=+this.flightDate.split(",")[1]
      console.log(after);
      //进行起飞时间的筛选
      let newFlightlist=oldFlightlist.filter(value=>{
        if(+value.dep_time.split(":")[0]>=before&&+value.dep_time.split(":")[0]<after)
        return true
      })
      // console.log(newFlightlist);
      // this.$emit("filterMessage",newFlightlist)
      return newFlightlist
    },
    //筛选航空公司
    handleCompany(oldFlightlist){
      console.log(this.company);
      //筛选航空公司
      let newFlightlist=oldFlightlist.filter(value=>
      value.airline_name === this.company)
      // this.$emit('filterMessage',newFlightlist)
      // console.log(newFlightlist);
      return newFlightlist
    },
    //筛选机型
    handleAirSize(oldFlightlist){
      console.log(this.airSize);
      //筛选机型
      let newFlightlist=oldFlightlist.filter(value=>value.plane_size === this.airSize)
      console.log(newFlightlist);
      // this.$emit('filterMessage',newFlightlist)
      return newFlightlist
    },
    //每次发送数据都需要将所有的筛选类型全部发送过去，不然就会出现只能筛选单一项的问题
    handleSendAll(){
      // 进行判定，获取所有的筛选数据
      let newFlightlist=this.flightselect.flights
      //将数据传入起飞机场进行筛选
      if(this.airport){
        newFlightlist=this.handleAirport(newFlightlist)
      }
      //将数据传入起飞时间进行筛选
      if(this.flightDate){
        newFlightlist=this.handleFlightTime(newFlightlist)
      }
      //将数据传入起飞公司进行筛选
      if(this.company){
        newFlightlist=this.handleCompany(newFlightlist)
      }
      //将输入传入飞机类型进行筛选
      if(this.airSize){
        newFlightlist=this.handleAirSize(newFlightlist)
      }
      //最后将所有筛选完的数据发送到父组件进行渲染
      this.$emit('filterMessage',newFlightlist)
    }
  }
}
</script>

<style lang="less" scoped>
.selectair{
  font-size: 14px;
  width: 750px;
  margin-bottom: 20px;
  .top{
    height: 28px;
    margin-bottom: 10px;
    .flightMessage{
      float: left;
      width: 220px;
      height: 28px;
      line-height: 28px;
      span{
        &:nth-child(1){
          margin-left: 10px;
        }
      }
    }
    .selectflight{
      float: right;
      width: 500px;
    }
  }
  .bottom{
    font-size: 14px;
    display: flex;
    align-items: center;
    >.el-button{
      margin-left: 10px;
      border: 1px solid #b3d8ff;
      background-color: #ecf5ff;
      font-size: 12px;
      color: #409eff;
      &:hover{
        background-color: #409eff;
        color: #fff;
      }
      &:active{
        background-color: #3a8ee6;
      }
    }
  }
}
</style>