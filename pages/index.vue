<template>
  <div class="container">
    <!-- <div>{{$store.state.user.userMessage.token}}</div> -->
    <!-- 幻灯片 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <div
          :style="`
             background:url(${$axios.defaults.baseURL}${item.url}) center center no-repeat;
             background-size:contain contain;
             `"
          class="banner-image"
        />
      </el-carousel-item>
    </el-carousel>
    <!-- 搜索框 -->
    <div class="search">
      <span v-for="(value,index) in options" :key="index" :class="{white:currentOptions===index}" @click="handlerOptions(index)">{{ value.title }}</span>
      <input :placeholder="options[currentOptions].placeholder" v-model="searchInfo" type="text">
      <!-- 点击搜索图标时触发事件 -->
      <i @click="handleSearch" class="el-icon-search icon-search" />
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // 定义变量来获取用户输入的搜索关键字
      searchInfo: '',
      // 定义变量用来当点击搜索框上的类型时，发生变化
      currentOptions: 0,
      // 定义变量用来接收轮播图的图片
      banners: [],
      // 定义变量用来渲染搜索框
      options: [
        {
          title: '攻略',
          placeholder: '搜索城市',
          url: '/post'
        },
        {
          title: '酒店',
          placeholder: '请输入城市搜索酒店',
          url: '/hotel'
        },
        {
          title: '机票',
          placeholder: '请输入出发地址',
          url: '/air'
        }
      ]
    }
  },
  async mounted () {
    const res = await this.$axios({
      url: '/scenics/banners'
    })
    // console.log(res);
    this.banners = res.data.data
    // 试验vuex
    // setTimeout(() => {
    //   this.$store.commit("user/setUserMessage","121313")
    // }, 1000);
  },
  methods: {
    // 当点击搜索类型时，将对应的索引值赋值给定义的变量，用来改变背景颜色
    handlerOptions (index) {
      // 需要对index进行判断，如果是点击的机票就直接跳转到飞机票页面
      if (index === 2) {
        this.$router.push('/air')
      } else {
        this.currentOptions = index
      }
    },
    // 搜索
    handleSearch () {
      // 点击搜索时，需要按照搜索的类别来进行跳转到对应类目的页面
      if (this.currentOptions === 0) {
        if (this.searchInfo.trim('') !== '') {
          // console.log(123);
          // 当用户输入城市后进行跳转
          this.$router.push('/post')
        } else {
          // 当搜索的数据为空时，提示用户需要输入搜索关键字才能搜索
          this.$message.warning('请输入想搜索的城市')
        }
      }
      if (this.currentOptions === 1) {
        if (this.searchInfo.trim('') !== '') {
          // console.log(123);
          // 当用户输入城市后进行跳转
          this.$router.push('/hotel')
        } else {
          // 当搜索的数据为空时，提示用户需要输入搜索关键字才能搜索
          this.$message.warning('请输入城市来获取酒店信息')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.white{
  background-color: #fff!important;
  color: #000!important;
}
.container {
  position: relative;
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
  /deep/ .el-carousel__container {
    height: 700px;
  }
  .banner-image {
    width: 100%;
    height: 100%;
  }
  .search {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 10;
    transform: translate(-50%, -50%);
    span {
      display: block;
      float: left;
      width: 90px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: rgba(0,0,0,.5);
      color: #fff;
      cursor: pointer;
      ::after {
        transform: scale(1.1, 1.3) perspective(0.5em) rotateX(2.2deg);
      }
    }
    input {
      width: 550px;
      height: 46px;
      background: #fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255, 255, 255, 0.2) solid;
      border-top: none;
      box-sizing: unset;
      color: #757575;
      font-size: 16px;
      text-indent: 20px;
    }
    .icon-search{
      position: absolute;
      top: 40px;
      left: 500px;
      padding: 10px;
      font-size: 30px;
      cursor: pointer;
    }
  }
}
.el-carousel--horizontal {
  overflow-x: show;
}
</style>
