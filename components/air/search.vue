<template>
  <div class="searchTicket">
    <el-form ref="form" :model="airList" label-width="80px">
      <el-form-item label="出发城市">
        <el-autocomplete class="el-autocomplete" :fetch-suggestions="getdepartCity" 
        :trigger-on-focus="false"
        @select="searchDepartCity"
        v-model="airList.departCity"
        :highlight-first-item="true"
        placeholder='请输入出发城市'>
        </el-autocomplete>
      </el-form-item>
      <el-form-item label="到达城市">
        <el-autocomplete
          :fetch-suggestions="queryDestSearch"
          v-model="airList.destCity"
          :trigger-on-focus="false"
          :highlight-first-item="true"
          placeholder="请搜索到达城市"
          @select="searchDestCity"
          class="el-autocomplete"
        ></el-autocomplete>
      </el-form-item>
    <el-form-item label='出发时间'>
       <el-date-picker
      v-model="airList.departDate"
      type="date"
      @change="changeDate"
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
//引入moment 对事件进行改造
import moment from 'moment'

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
      }
    }
  },
  methods: {
    //点击按钮时，发送搜索请求
    onSubmit(){
      console.log(this.airList)
      //提交前进行验证
      //遍历airList进行验证
      if(!this.airList.departCity){
        //提示用户，并返回
        this.$message.warning('请先选择出发城市')
        return false
      }
      if(!this.airList.departCode){
        this.$message.warning('出发城市无航班信息，请重新选择')
        return false
      }
      if(!this.airList.destCity){
        this.$message.warning('请选择到达城市')
        return false
      }
      if(!this.airList.destCode){
        this.$message.warning('到达城市无航班信息，请重新选择')
        return false
      }
      if(!this.airList.departDate){
        this.$message.warning('请选择航班时间')
        return false
      }
      //全部通过验证之后，进行路由跳转
      this.$router.push({
        path:'/air/fights',
        query:this.airList
      })
    },
    changeDate(){
      //对事件进行改造
      this.airList.departDate=moment(this.airList.departDate).format("YYYY-MM-DD")
      console.log(this.airList.departDate);
    },
    //点击换时，触发事件，将出发与到达的数据切换
    changeInfo(){
      //将需要替换的数据先解构出来 然后再依次进行替换
      let {departCity,departCode,destCity,destCode}=this.airList
      this.airList.departCity=destCity
      this.airList.departCode=destCode
      this.airList.destCity=departCity
      this.airList.destCode=departCode
    },
    //自动获取补全数据
    async getdepartCity(value,callback){
      //当用户输入的值有市时，将这个市干掉
      this.airList.departCity=value.replace("市","")
      //出发城市的数据获取
      let res=await this.searchCity(value)
      console.log(res);
      //当没有搜索到用户所输入的城市时，提示用户
      if(res.length===0){
        console.log(123);
        callback([{value:'出发城市不存在'}])
        //同时提示用户
        this.$message.warning('出发城市无航班信息，请重新选择')
      }else{
        //当用户不选择建议项的时候，默认给用户的的输入值第一个sort值
      this.airList.departCode=res[0].sort
      callback(res)
      }
    },
    //将数据进行封装成一个函数，方便调用
    searchCity(value){
      return this.$axios({
        url:'/airs/city',
        params:{
          name:value
        }
      }).then(res=>{
        console.log(res);
        let arr=res.data.data
        let cities= arr.map(item=>{
          return {
            ...item,
            //去掉城市名最后面的市
            value:item.name.replace("市", "")
          }
        })
        console.log(cities);
        //同时，返回数据之前，需要将没有sort值的选项删除掉
        let city=cities.filter(item=>{
          if(item.sort){
            return item
          }
        })
        console.log(city);
        return city
      })
    },
    //到达城市的数据获取
    async queryDestSearch(value,callback){
      //当用户输入的到达城市有市时，将市干掉
      this.airList.destCity=value.replace("市","")
      //调用封装的函数
      let res=await this.searchCity(value)
      //当用户搜索的到达城市不存在时，提示用户重新输入
      if(res.length===0){
        //在下拉框中提示用户，该城市不存在
        callback([{value:'到达城市不存在'}])
        //同时提示用户
        this.$message.warning('到达城市无航班信息，请重新选择')
      }else{
      //当用户不选择建议项的时候，默认给用户的的输入值第一个sort值
      this.airList.departCode=res[0].sort
      callback(res)
      }
    },
    //搜索出发城市
    searchDepartCity(value){
      console.log(value);
      //当选定一项时，将sort 存到定义好的变量当中去
      this.airList.departCode=value.sort
    },
    //搜索达到城市
    searchDestCity(value){
      //将sort存储到对应的变量当中去
      this.airList.destCode=value.sort
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
    right: 28px;
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