<template>
  <div class="header">
    <div class="header-con">
      <!-- <div>{{$store.state.user.userMessage.token}}</div> -->
      <div class="box">
        <!-- Logo部分 -->
        <el-row>
          <div class="logo">
            <h1>
              <a href="/">
                <img src="http://157.122.54.189:9093/images/logo.jpg" alt>
              </a>
            </h1>
          </div>
          <!-- 菜单栏 -->
          <el-row class="navtab">
            <nuxt-link to="/">
              首页
            </nuxt-link>
            <nuxt-link to="/post">
              旅游攻略
            </nuxt-link>
            <nuxt-link to="/hotel">
              酒店
            </nuxt-link>
            <nuxt-link to="/air">
              国内机票
            </nuxt-link>
          </el-row>
        </el-row>

        <!-- 登录/注册 -->
        <div class="login">
          <span>
            <div class="right">
              <el-tooltip
                class="item"
                effect="dark"
                content="消息"
                placement="bottom"
              >
                <!-- <i class="el-icon-bell"></i> -->
                <span class="el-icon-bell">消息
                  <i class=" el-icon-caret-bottom" />
                </span>
              </el-tooltip>
            </div>
          </span>
          <nuxt-link v-if="!$store.state.user.userMessage.token" to="/user/login" class="register">
            登录/注册
          </nuxt-link>
          <div v-if="$store.state.user.userMessage.token" class="has_login">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img :src="$axios.defaults.baseURL+$store.state.user.userMessage.user.defaultAvatar" alt="">
                <span>{{ $store.state.user.userMessage.user.nickname }}</span>
                <i class="el-icon-caret-bottom el-icon--right" />
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div @click="handleUserCenter">
                    个人中心
                  </div>
                </el-dropdown-item>
                <el-dropdown-item>
                  <div @click="handleLogout">
                    退出
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 点击按钮时，退出所登录的用户，同时销毁该用户的数据
    handleLogout () {
      // 调用vuex的store中的mutations
      console.log(123)
      this.$store.commit('user/clearUserMessage')
    },
    // 点击跳转个人中心页面
    handleUserCenter () {
      this.$router.push('/user/personal')
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  height: 70px;
  border-bottom: 1px solid #ddd;
  .header-con {
    position: relative;
    height: 70px;
    width: 1000px;
    margin: 0 auto;
    .box {
      height: 70px;
    }
    div {
      float: left;
    }
    .logo {
      margin-right: 50px;
      width: 156px;
      height: 60px;
      line-height: 60px;
      h1 {
        a {
          img {
            width: 100%;
            vertical-align: middle;
          }
        }
      }
    }
    .navtab {
      a {
        float: left;
        padding: 22px;
        color: #000;
        font-size: 16px;
        box-sizing: border-box;
        &:hover {
          box-sizing: border-box;
          padding: 20px;
          color: #409eff;
          border-bottom: 4px solid #409eff;
        }
        &:focus {
          background-color: #409eff;
          color: #fff;
        }
      }
    }
    .login {
      height: 70px;
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
      span {
        margin-right: 15px;
      }
      .register{
        &:hover{
          color: #409eff;
          border-bottom: 1px solid #409eff;
        }
      }
    }
  }
}
.has_login{
  img{
    width: 40px;
    border-radius: 50%;
    // width: 100%;
    vertical-align: middle;
  }
  span{
    padding: 0px 0px 0px 10px;
    margin: 0px!important;
  }
}
</style>
