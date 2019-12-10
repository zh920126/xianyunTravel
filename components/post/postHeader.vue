<template>
  <div class="postHeader">
    <div class="search">
      <el-input style="height:36px;" v-model="input" placeholder="请输入内容"></el-input>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.postHeader{
 width: 700px;
 .search{
   height: 40px;
   border: 3px solid orange;
   .el-input{
     height: 30px;
     .el-input-inner{
       height: 30px;
     }
   }
 }
}
</style>