<template>
  <div class="postHeader">
    <div @keydown.enter="handleSearch" class="search">
      <el-input v-model="searchData" autofocus placeholder="请输入想去的地方， 比如:'广州'" />
      <i @click="handleSearch" class="el-icon-search icon-search" />
    </div>
    <div class="tuijian">
      <span>推荐:</span>
      <a href="javascript:;">广州</a>
      <a href="javascript:;">上海</a>
      <a href="javascript:;">北京</a>
    </div>
    <div class="strategy">
      <h2>推荐攻略</h2>
      <el-button type="primary" icon="el-icon-edit">
        写游记
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件传过来的数据
  props: ['data'],
  data () {
    return {
      searchData: ''
    }
  },
  methods: {
    handleSearch () {
      // 对数据进行筛选
      const newData = this.data.filter((value) => {
        if (value.cityName.indexOf(this.searchData)!==-1) {
          return true
        }
      })
      console.log(newData)
    }
  }
}
</script>

<style lang="less" scoped>
.postHeader{
 width: 700px;
 .search{
   position: relative;
   height: 40px;
   border: 3px solid orange;
   padding-right: 40px;
   .el-input{
     margin-top: 1px;
     /deep/.el-input__inner{
       height: 33px;
       border: none;
     }
   }
   .icon-search{
     position: absolute;
     top: 0;
     right: 0;
     padding: 5px 8px;
     font-size: 24px;
     color: orange;
     font-weight: 600;
     cursor: pointer;
   }
 }
 .tuijian{
   display: flex;
   padding: 10px 0px;
   font-size: 12px;
   color: #666;
   span{
     margin-right: 10px;
   }
   a{
     margin-right: 5px;
     &:hover{
       color: orange;
       text-decoration: underline;
     }
   }
 }
 .strategy{
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #ddd;
   h2{
     font-size: 18px;
     font-weight: 500;
     padding-bottom: 12px;
     padding-top: 12px;
     color: orange;
     border-bottom: 2px solid orange;
   }
 }
}
</style>
