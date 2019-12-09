<template>
  <div class="formList">
    <!-- 乘机人表单 -->
    <div class="top">
      <h3>乘机人</h3>
      <el-form class="member-info">
        <div v-for="(value,index) in users" :key="index" class="man">
          <el-form-item label="乘机人类型">
            <el-input v-model="value.username" placeholder="请输入姓名" class="input-with-select">
              <el-select slot="prepend" placeholder="请选择" value="1" style="width:100px">
                <el-option label="成人" value="1" />
              </el-select>
            </el-input>
          </el-form-item>
          <el-form-item label="证件类型">
            <el-input v-model="value.id" placeholder="请输入证件号" class="input-with-select">
              <el-select slot="prepend" placeholder="请选择" value="1" style="width:100px">
                <el-option label="身份证" value="1" />
              </el-select>
            </el-input>
          </el-form-item>
          <!-- 删除一位乘机人,需要传入参数--user数组的索引值 -->
          <div @click="handleDelUser(index)" class="del">
            -
          </div>
        </div>
      </el-form>
      <el-button @click="handleAddUser" type="primary">
        添加乘机人
      </el-button>
    </div>
    <!-- 保险部分 -->
    <div class="insurance">
      <h3>保险</h3>
      <el-checkbox-group v-model="insurances">
        <div v-for="(value,index) in airsDate.insurances" :key="index">
          <el-checkbox :label="value.id" border>
            {{ value.type }}: ￥{{ value.price }}x1 最高赔付{{ value.compensation }}
          </el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
    <!-- 联系人部分 -->
    <div class="linkman">
      <h3>联系人</h3>
      <el-form ref="form" :model="{contactName,contactPhone,captcha}" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="contactName" />
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="contactPhone">
            <el-button slot="append" @click="handleCaptcha" type="success">
              发送验证码
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="captcha" />
        </el-form-item>
      </el-form>
    </div>
    <el-button @click="handleSubmitOrder" type="primary" style="width:200px;margin-left:300px">
      提交订单
    </el-button>
    <!-- 计算和属性必须要被调用才能生效，否则就不会生效 -->
    <div v-show="false">
      {{ totalPrice }}
    </div>
  </div>
</template>

<script>
export default {
  // 获取父组件里面传送过来的信息
  props: ['airsDate'],
  data () {
    return {
      users: [{ username: '', id: '' }],
      insurances: [],
      contactName: '',
      contactPhone: '13012345678',
      invoice: false,
      captcha: ''
    }
  },
  // 通过计算属性得出总价，并传递给父组件
  computed: {
    totalPrice () {
      // 计算得出用户的票价
      const userTicketPrice = +this.airsDate.seat_infos.par_price * this.users.length
      // 保险价钱
      const insurancesPrice = +30 * this.insurances.length * this.users.length
      // 燃油附加费
      const fuelOilPrice = +50 * this.users.length
      // 计算总价
      const res = userTicketPrice + insurancesPrice + fuelOilPrice
      // 将数据传送给父组件，然后右父组件传送给侧边栏的子组件
      this.$emit('sendTotalPrice', res)
      return res
    }
  },
  methods: {
    // 点击添加乘机人时，添加一位乘机人
    handleAddUser () {
      this.users.push({
        username: '',
        id: ''
      })
    },
    // 点击删除按钮时，删除对应索引的乘机人
    handleDelUser (index) {
      this.users.splice(index, 1)
    },
    // 发送验证码
    handleCaptcha () {
      if (!/^1[345678]\d{9}$/.test(this.contactPhone)) {
        // 手机号验证失败就需要提示用户并返回
        this.$message.warning('请输入正确的手机号')
        return false
      }
      // 验证手机号成功后，发送axios请求，获取验证码
      this.$axios({
        method: 'post',
        url: '/captchas',
        data: {
          tel: this.contactPhone
        }
      }).then((res) => {
        console.log(res)
        // 验证码发送成功之后，提示用户
        this.$confirm('您的验证码是000000', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
      })
    },
    // 点击提交时，发送axios请求
    handleSubmitOrder () {
      const formList = {
        users: this.users,
        insurances: this.insurances,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        invoice: this.invoice,
        seat_xid: this.$route.query.seat_xid,
        air: this.$route.query.id,
        captcha: this.captcha
      }
      console.log(formList)
      // 提交前需要对数据进行验证
      // 验证乘机人
      let flag
      // 对乘机人姓名进行遍历，有一项为空就不能提交
      this.users.forEach((value) => {
        if (!value.username) {
          flag = true
        }
      })
      // 当没有乘机人星际人姓名时，提示用户，并阻止提交
      if (flag) {
        this.$confirm('请填写乘机人姓名', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
        return false
      }
      // 遍历乘机人身份证，如果不符合规则就提示用户，并阻止提交
      let isFlag
      this.users.forEach((value) => {
        // 乘机人没有填写身份证号码时，提示用户
        if (!value.id) {
          isFlag = true
        }
      })
      if (isFlag) {
        this.$confirm('请输入乘机人的身份证号码', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
        return false
      }
      // 乘机人身份证号码不符合规则时，提示用户并阻止提交
      let flagNo
      this.users.forEach((value) => {
        if (!/^\d{18}$/.test(value.id)) {
          flagNo = true
        }
      })
      if (flagNo) {
        this.$confirm('请输入正确的身份证号码', '提示', {
          confirmButtonText: '确定',
          showCancelButton: false,
          type: 'warning'
        })
        return false
      }
    }
  }
}
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
    padding-bottom: 20px;
  }
}
</style>
