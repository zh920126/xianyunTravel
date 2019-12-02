<template>
  <div class="login-header">
    <div class="login">
      <div class="btns">
        <span v-for="(value,index) in loginList" :key="index" :class="{orange:currentLogin===index}" @click="handleChose(index)">{{value}}</span>
        
      </div>
      <!-- 登录框 -->
      <div class="formInput" v-if="currentLogin===0">
        <el-form
          :model="userInfo"
          :rules="rules"
          ref="userInfo"
          class="demo-ruleForm"
        >
        <!-- 账号密码验证框 -->
          <el-form-item prop="username">
            <el-input v-model="userInfo.username" placeholder="用户名/手机"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="userInfo.password" placeholder="密码"></el-input>
          </el-form-item>
        <el-form-item>
          <!-- 忘记密码进行跳转 -->
          <span class="forgetpassword">忘记密码</span>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button type="primary" class="loginbotton" @click="handleLogin">登录</el-button>
        </el-form-item>
        </el-form>
      </div>
      <!-- 注册框 -->
      <div class="forminput-reg" v-if="currentLogin===1">
        <el-form :model="userRegisterInfo" :rules="rules" ref="userRegisterInfo" class="demo-ruleForm">
          <el-form-item prop="username">
            <!-- 用户注册的手机号 -->
            <el-input v-model="userRegisterInfo.username" placeholder="用户名/手机号"></el-input>
          </el-form-item>
          <el-form-item prop="registerCode" class="regCode">
            <!-- 用户注册的手机号 -->
            <el-input v-model="userRegisterInfo.registerCode" placeholder="验证码" class="registerCode"></el-input>
            <span class="getRes">发送验证码</span>
          </el-form-item>
          <el-form-item prop="nickname">
            <!-- 用户注册的昵称 -->
            <el-input v-model="userRegisterInfo.nickname" placeholder="你的昵称"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <!-- 用户注册的密码 -->
            <el-input v-model="userRegisterInfo.password" placeholder="密码" type="pssword"></el-input>
          </el-form-item>
          <el-form-item prop="confrimpassword">
            <!-- 重复密码 -->
            <el-input v-model="userRegisterInfo.confrimpassword" placeholder="确认密码" type="password"></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-form-item>
          <el-button type="primary" class="registerBotton" @click="handleRegister">注册</el-button>
        </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //设置变量用来使样式高亮，同时下面输入框进行变化
      loginList:["登录","注册"],
      currentLogin:0,
      //设置变量用来获取用户名和密码
      userInfo: {
        username: "13800138000",
        password: "123456"
      },
      //定义验证规则
      rules:{
        username:[
          {
            required:true,
            message:'请输入用户名或手机号',
            trigger:'blur'
          },
          {
            min:11,max:11,
            message:'请输入正确的11位手机号',
            trigger:'blur'
          }
        ],
        password:[
          {
            required:true,
            message:'请输入密码',
            trigger:'blur'
          },
          {
            min:3,max:16,
            message:'请输入3-16位的密码',
            trigger:'blur'
          }
        ]
      },
      //定义注册用户信息时获取数据
      userRegisterInfo:{
        username:'',
        registerCode:'',
        nickname:'',
        password:'',
        confrimpassword:'',
      }
    };
  },
  methods: {
    //点击时，产生高亮，同时改变login框的页面效果
    handleChose(index){
      //将对应 的index的值赋值给对应的切换类的变量
      this.currentLogin=index
      console.log(this.currentLogin);
      console.log(123);
    },
    handleLogin(){
      //使用element-ui表单验证对用户输入的账号密码进行验证
      this.$refs.userInfo.validate(valid=>{
        if(valid){
          // console.log(123);
          //当validate验证通过后进行用户登录请求发送
          this.$axios({
            method:'post',
            url:'/accounts/login',
            data:this.userInfo
          }).then(res=>{
            console.log(res);
            //提示用户登录成功
            this.$message.success('登录成功，正在为您跳转')
            //进行跳转
            setTimeout(() => {
              this.$router.replace('/')
            }, 1000);
            //当用户登录成功之后，需要将生成的token以及用户的信息储存到vuex中
            this.$store.commit("user/userMessage",res)
          })
        }
      })
    },
    //点击注册按钮，注册新用户
    handleRegister(){
      console.log(this.userRegisterInfo);
    }
  }
};
</script>

<style lang="less" scoped>
.orange{
  border-top-color: orange!important;
  background-color: #fff!important;
  color: orange!important;
  font-weight: 600;
}
.login-header {
  width: 100%;
  height: 700px;
  position: relative;
  background: url("http://157.122.54.189:9095/assets/images/th01.jfif");
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    .btns {
      span {
        width: 200px;
        height: 50px;
        line-height: 50px;
        font-size: 16px;
        color: #666;
        background-color: #eee;
        float: left;
        text-align: center;
        border-top: 2px solid #fff;
        cursor: pointer;
      }
    }
    .forgetpassword{
      float: right;
      font-size: 12px;
      color: #409eff;
      line-height: 0px;
    }
    .formInput{
      background-color: #fff;
      padding: 70px 20px 0.1px;
      button{
        display: block;
        width: 100%;
      }
    }
  }
}
.forminput-reg{
  padding: 70px 20px 20px;
  background-color: #fff;
  .regCode{
    width: 100%;
    .registerCode{
      width: 70%!important;
      float: left;
    }
      .getRes{
    display: block;
    float: right;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #dcdfe6;
    border-radius: 5px;
    background-color: #f5f7fa;
  }
  }
  .registerBotton{
    width: 100%;
  }
}
</style>
