<template>
  <div class="main clearfix">
    <!-- 引入侧边栏组件 -->
    <div class="aside">
      <PostAside :dataList="asideList" />
    </div>
    <!-- 引入头部组件 -->
    <div class="header">
      <PostHeader />
    </div>
    <div class="postMain">
      <PostMain />
    </div>
  </div>
</template>

<script>
// 引入侧边栏组件
import PostAside from '@/components/post/postAside.vue'
// 引入头部组件
import PostHeader from '@/components/post/postHeader.vue'
// 引入主要内容部分组件
import PostMain from '@/components/post/postMain.vue'
export default {
  components: {
    // 注册组件
    PostAside,
    PostHeader,
    PostMain
  },
  data () {
    return {
      // 定义变量，用来存储获取的数据，用来传递给子组件
      asideList: [
        {}
      ]
    }
  },
  mounted () {
    this.$axios({
      url: '/posts/cities'
    }).then((res) => {
      console.log(res)
      // 将获取到的数据存储起来
      this.asideList = res.data.data
      // console.log(this.asideList)
    })
  }
}
</script>

<style lang="less" scoped>
.main {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0px;
  .aside{
    float: left;
  }
  .header{
    float: right;
  }
  .postMain{
    float: right;
  }
}
</style>
