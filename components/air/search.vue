<template>
  <div class="searchTicket">
    <el-form ref="form" :model="airList" label-width="80px">
      <el-form-item label="出发城市">
        <el-input v-model="airList.departCity" placeholder='请输入出发城市'></el-input>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-input v-model="airList.destCity" placeholder='请输入到达城市'></el-input>
      </el-form-item>
    <el-form-item label='出发时间'>
       <el-date-picker
      v-model="airList.departDate"
      type="date"
      placeholder="2019-12-03">
    </el-date-picker>
    </el-form-item>
     <el-form-item>
      <el-button type="primary" class="btn" icon="el-icon-search" @click="onSubmit">搜索</el-button>
    </el-form-item>
    <div class="change">
      <span @click="changeInfo">换</span>
    </div>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //定义变量用来存储搜索的机票信息
      airList:{
        departCity:'',//出发城市
        departCode:'',//出发城市代码
        destCity:'',//目标城市
        destCode:'',//目标城市代码
        departDate:''//出发日期
      },
      //设置变量用来切换出发城市与到达城市的值
      changeInfomation:''
    }
  },
  methods: {
    //点击按钮时，发送搜索请求
    onSubmit(){
      console.log(this.airList)
    },
    //点击换时，触发事件，将出发与到达的数据切换
    changeInfo(){
      //先将出发城市赋值给变量
      this.changeInfomation=this.airList.departCity
      //然后再将到达城市赋值给出发城市
      this.airList.departCity=this.airList.destCity
      //最后将变量的值赋值给到达城市
      this.airList.destCity=this.changeInfomation
    }
  }
}
</script>

<style lang='less' scoped>
.searchTicket{
  padding: 15px 43px 15px 15px;
  position: relative;
  .btn{
    width: 100%;
  }
  .change{
    position: absolute;
    top: 56px;
    right: 14px;
    &::before{
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 29px;
      width: 2px;
      height: 20px;
      background-color: #999;
      transform: rotateZ(90deg);
    }
    &::after{
      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: -29px;
      width: 2px;
      height: 20px;
      background-color: #999;
      transform: rotateZ(90deg);
    }
    span{
      position: relative;
      display: block;
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
      color: #fff;
      background-color: #999;
      cursor: pointer;
      &::before{
        content:'';
        position: absolute;
        left: 10px;
        top: -20px;
        width: 2px;
        background-color: #999;
        height: 20px;
      }
      &::after{
        content:'';
        position: absolute;
        left: 10px;
        top: 20px;
        width: 2px;
        background-color: #999;
        height: 20px;
      }
    }
  }
}

</style>