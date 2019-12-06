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
         <el-select v-model="value" style="width:120px" placeholder="起飞机场" size="mini">
          <el-option
            v-for="item in flightselect"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
         <el-select v-model="value"  style="width:120px" placeholder="起飞时间" size="mini">
          <el-option
            v-for="item in flightselect"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
         <el-select v-model="value"  style="width:120px" placeholder="航空公司" size="mini">
          <el-option
            v-for="item in flightselect"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
         <el-select v-model="value"  style="width:120px" placeholder="机型" size="mini">
          <el-option
            v-for="item in flightselect"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
       </div>
    </div>
    <div class="bottom">
      筛选:
      <el-button type="primary" round size="mini">撤销</el-button>
    </div>
  </div>
</template>

<script>
export default {
  //定义变量用于接收父组件发送过来的数据
  props: ["flightselect"]
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
      width: 200px;
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