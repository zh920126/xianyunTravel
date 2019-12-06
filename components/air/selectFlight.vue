<template>
  <div class="selectair">
    <div class="top clearfix">
        <div class="flightMessage">
              单程:
          <span>广州 - 上海</span>
          <span>/</span>
          <span>2019-12-6</span>
        </div>
       <div class="selectflight">
         <el-select v-model="airport" style="width:120px" placeholder="起飞机场" size="mini">
          <el-option
            v-for="(item,index) in flightselect.flights"
            :key="index"
            :label="item.org_airport_name"
            :value="item.org_airport_name">
          </el-option>
        </el-select>
         <el-select v-model="flightTime" style="width:120px" placeholder="起飞时间" size="mini">
          <el-option
            v-for="(item,index) in flightselect.options.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="`${item.from},${item.to}`">
          </el-option>
        </el-select>
         <el-select v-model="company" style="width:120px" placeholder="航空公司" size="mini">
          <el-option
            v-for="(item,index) in flightselect.flights"
            :key="index"
            :label="item.airline_name"
            :value="item.airline_name">
          </el-option>
        </el-select>
         <el-select v-model="airSize" style="width:120px" placeholder="机型" size="mini">
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
    flightTime:'',//起飞时间
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
      console.log(this.flightselect);
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