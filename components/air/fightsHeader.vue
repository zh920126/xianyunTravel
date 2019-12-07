<template>
  <div class="airHead clearfix">
    <span>航空信息</span>
    <span>起飞时间</span>
    <span>到达时间</span>
    <span>价格</span>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .airHead{
    margin-bottom: 10px;
    width: 745px;
    height: 40px;
    border: 1px solid #ddd;
    background-color: #f6f6f6;
    span{
      float: left;
      font-size: 12px;
      color: #666;
      line-height: 40px;
      margin-bottom: 10px;
      padding: 0px 15px;
      text-align: center;
      &:nth-child(1),&:nth-child(4){
        width: 20%;
      }
      &:nth-child(2),&:nth-child(3){
        width: 30%;
      }
    }
  }
</style>