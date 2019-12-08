<template>
  <div class="formList">
    <!-- 乘机人表单 -->
    <div class="top">
      <h3>乘机人</h3>
      <el-form class="member-info">
        <div class="man">
          <el-form-item label="乘机人类型">
            <el-input placeholder="请输入姓名" v-model="user.username" class="input-with-select">
              <el-select slot="prepend" placeholder="请选择" value="1" style="width:100px">
                <el-option label="成人" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-input placeholder="请输入证件号" v-model="user.id" class="input-with-select">
              <el-select slot="prepend" placeholder="请选择" value="1" style="width:100px">
                <el-option label="身份证" value="1"></el-option>
              </el-select>
            </el-input>
          </el-form-item>
          <div class="del">-</div>
        </div>
      </el-form>
      <el-button type="primary">添加乘机人</el-button>
    </div>
    <!-- 保险部分 -->
    <div class="insurance">
      <h3>保险</h3>
      <el-checkbox-group v-model="checkList">
        <div>
          <el-checkbox v-model="checked3" label="备选项1" border></el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
    <!-- 联系人部分 -->
    <div class="linkman">
      <h3>联系人</h3>
      <el-form ref="form" :model="linkname" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="linkname.name"></el-input>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="linkname.name">
            <el-button type="success" slot="append">发送验证码</el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="linkname.captcha"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" style="width:200px;margin-left:300px">提交订单</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: [{ username: "", id: "" }],
      checkList: [],
      linkname: {
        name: "",
        captcha: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.formList {
  float: left;
  width: 600px;
  h3 {
    font-size: 22px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  .man {
    border-bottom: 1px dashed #ddd;
    margin-bottom: 20px;
    position: relative;
    &:nth-child(1){
      .del{
        display: none;
      }
    }
    .del {
      width: 20px;
      height: 20px;
      background-color: #ddd;
      line-height: 10px;
      text-align: center;
      border-radius: 50%;
      color: #fff;
      font-size: 40px;
      position: absolute;
      right: -30px;
      top: 100px;
      cursor: pointer;
    }
  }
  .insurance{
    margin-top: 20px;
    margin-bottom: 20px;
    border-top: 1px dashed #ddd;
    border-bottom: 1px dashed #ddd;
    padding-top: 20px;
    padding-bottom: 20px;
    div{
      margin-bottom: 10px;
    }
  }
  .linkman{
    width: 350px;
  }
}
</style>