<template>
  <div class="formList">
    <h3>乘机人</h3>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="乘机人">
          <el-input placeholder="请输入内容" v-model="username" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="成人" label="成人">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
          </el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form:{
        username:""
      }
    }
  }
};
</script>

<style lang="less" scoped>
.formList {
  float: left;
  width: 600px;
}
</style>