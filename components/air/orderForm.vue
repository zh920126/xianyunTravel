<template>
  <div class="formList">
    <h3>乘机人</h3>
         <el-form class="member-info">
        <div class="member-info-item" v-for="(user, index) in users" :key="index">
          <el-form-item label="乘机人类型">
            <el-input placeholder="姓名" class="input-with-select" v-model="user.username">
              <el-select slot="prepend" value="1" placeholder="请选择">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>

          <span class="delete-user">-</span>
        </div>
      </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user:{
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