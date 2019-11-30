<template>
  <div class="header">
    <div class="header-con">
      <div class="box">
        <!-- Logo部分 -->
        <el-row>
          <div class="logo">
            <h1>
              <a href="/">
                <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
              </a>
            </h1>
          </div>
          <!-- 菜单栏 -->
          <el-row class="navtab">
            <nuxt-link to="/">首页</nuxt-link>
            <nuxt-link to="/post">旅游攻略</nuxt-link>
            <nuxt-link to="/hotel">酒店</nuxt-link>
            <nuxt-link to="/air">国内机票</nuxt-link>
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
                <i class=" el-icon-caret-bottom"></i>
              </span>
              </el-tooltip>
            </div>
          </span>
          <nuxt-link to="/login" class="register">登录/注册</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>