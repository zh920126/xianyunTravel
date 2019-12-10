<template>
  <div class="main clearfix">
    <!-- 引入侧边栏组件 -->
    <div class="aside">
      <PostAside />
    </div>
    <!-- 引入头部组件 -->
    <div class="header">
      <PostHeader />
    </div>
  </div>
</template>

<script>
//引入侧边栏组件
import PostAside from "@/components/post/postAside.vue";
//引入头部组件
import PostHeader from "@/components/post/postHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    //注册组件
    PostAside,
    PostHeader
  },
  mounted() {
    this.$axios({
      url: "/posts/cities"
    }).then(res => {
      console.log(res);
    });
  }
};
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
}
</style>
