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
          <el-form-item prop="captcha" class="regCode">
            <!-- 用户注册的手机号 -->
            <el-input v-model="userRegisterInfo.captcha" placeholder="验证码" class="registerCode"></el-input>
            <span class="getRes" @click="handleRegCode">发送验证码</span>
          </el-form-item>
          <el-form-item prop="nickname">
            <!-- 用户注册的昵称 -->
            <el-input v-model="userRegisterInfo.nickname" placeholder="你的昵称" type="text"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <!-- 用户注册的密码 -->
            <el-input v-model="userRegisterInfo.password" placeholder="密码" type="password"></el-input>
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
        ],
        registerCode:[
           {
            required:true,
            message:'请输入验证码',
            trigger:'blur'
          },
          {
            min:6,max:6,
            message:'请输入正确的验证码',
            trigger:'blur'
          }
        ],
        nickname:[
          {
            required:true,
            message:'请输入昵称',
            trigger:'blur'
          }
        ],
        confrimpassword:[
          {
            required:true,
            message:'请重复密码',
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
        username:'13111111111',
        captcha:'',
        nickname:'',
        password:'',
        confrimpassword:'',
      },
      //定义变量来存储发送给用户的验证码
      code:'',
    };
  },
  methods: {
    //点击按钮时发送验证码
    handleRegCode(){
      //获取验证码之前先对手机号码进行验证
      if(!this.userRegisterInfo.username.trim()){
        //当用户未输入手机号码时，进行提示
        this.$message.warning('请输入手机号')
        return false
      }else if(/^1[34578]\d{9}$/.test(this.userRegisterInfo.username)){
        //当用户输入正确的手机号码时，发送axios请求，获取验证码
        this.$axios({
          method:'post',
          url:"/captchas",
          data:{tel:this.userRegisterInfo.username}
        }).then(res=>{
          console.log(res);
          this.$message.success('你的验证码是'+res.data.code)
          // this.$alert(res.data.code,'恭喜你，你的验证码是')
          //同时将用户获取到的验证码存储起来
          // console.log(123);
          this.code=res.data.code
          console.log(this.code);
        }).catch(err=>{
          //验证码发送失败时，提示用户
          // this.$message.warning('验证码发送失败，请重试')
        })
      }else{
        //当用户输入的手机号，不是正确的11位数时，提示用户
        this.$message.warning('请输入正确的手机号')
        return false
      }
    },
    //点击时，产生高亮，同时改变login框的页面效果
    handleChose(index){
      //将对应 的index的值赋值给对应的切换类的变量
      this.currentLogin=index
      // console.log(this.currentLogin);
      // console.log(123);
    },
    handleLogin(){
      //使用element-ui表单验证对用户输入的账号密码进行验证
      this.$refs.userInfo.validate(valid=>{
        if(valid){
          // console.log(123);
          //当validate验证通过后进行用户登录请求发送
          //使用vuex的actions替换这里的axios登录
          this.$store.dispatch('user/login',this.userInfo).then(res=>{
            console.log(res);
            //必须接收返回值，然后对返回值进行验证，如果有返回值，表示登录成功
            if(res.token){
              //登录成功之后提示用户
              this.$message.success('登录成功，正在为您跳转')
              //进行路由的跳转
              this.$router.replace('/')
            }
          }).catch(err=>{
            //登录失败提示用户
            this.$message.warning('用户名或密码错误，请重新登录')
          })
        }
      })
    },
    //点击注册按钮，注册新用户
    handleRegister(){
      // console.log(this.userRegisterInfo);
      //准备数据，将userRedsgisterInfo的最后一项删除
      //点击注册时，先使用element-ui的表单验证方法对表单数据进行验证
      this.$refs.userRegisterInfo.validate(valid=>{
        if(valid){
          //当表单内的数据验证成功之后，发起axios请求，进行新用户的注册
        //  当两次密码不一致时，不能提交并返回提示用户
        if(this.userRegisterInfo.password!==this.userRegisterInfo.confrimpassword){
          this.$message.warning('两次输入的密码不一致，请确认')
          return false
        }
        //输入的验证码和系统发送的验证码不一致时，返回并提示用户
        if(this.userRegisterInfo.captcha!==this.code){
          this.$message.warning('验证码错误，请重新输入')
          return false
        }
        //改造数据，最后一项重复密码的数据不需要
        // delete this.userRegisterInfo.confrimpassword
         delete this.userRegisterInfo.confrimpassword
        //当上述验证通过之后，发送ajax请求注册新用户
        this.$axios({
          method:'post',
          url:'/accounts/register',
          data:this.userRegisterInfo
        }).then(res=>{
          console.log(res);
          //提示用户注册成功
          this.$message.success('恭喜你，注册成功')
          //登录成功之后跳转到登录界面进行登录
          this.currentLogin=0
        })
        }
      })
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
    cursor: pointer;
  }
  }
  .registerBotton{
    width: 100%;
  }
}
</style>
