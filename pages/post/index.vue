<template>
  <div class="main clearfix">
    <!-- 引入侧边栏组件 -->
    <div class="aside">
      <PostAside :dataList="asideList" />
    </div>
    <!-- 引入头部组件 -->
    <div class="header">
      <PostHeader :data="postList_copy" />
    </div>
    <div class="postmain clearfix">
      <PostMain :post="value" v-for="(value,index) in showPost" :key="index" />
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageIndex"
          :page-sizes="[3, 6, 9, 12]"
          :page-size="pageSize"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
        />
      </div>
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
      // 定义变量，用来存储获取的城市列表数据，用来传递给子组件
      asideList: [
        {}
      ],
      // 定义变量用来存储获取的文章数据，传递给子组件
      postList: [
      ],
      // 复制数据进行数据的存储，以避免数据被污染
      postList_copy: [],
      // 设置分页器
      pageIndex: 1,
      pageSize: 3,
      total: 0
    }
  },
  computed: {
    // 使用计算属性来计算分页
    showPost () {
      if (!this.postList) {
        return ''
      } else {
        const start = (this.pageIndex - 1) * this.pageSize
        // 需要获取数据的条数
        const end = start + this.pageSize
        this.total = +this.postList.length
        return this.postList.slice(start, end)
      }
    }

  },
  mounted () {
    // 获取侧边栏数据--城市菜单列表
    this.getAsideData()
    // 获取文章数据
    this.getPostData()
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
    },
    handleCurrentChange (val) {
      this.pageIndex = val
    },
    // 封装获取侧边栏数据的函数
    getAsideData () {
      this.$axios({
        url: '/posts/cities'
      }).then((res) => {
      // console.log(res)
      // 将获取到的数据存储起来
        this.asideList = res.data.data
      // console.log(this.asideList)
      })
    },
    // 封装获取文章数据的函数
    getPostData () {
      this.$axios({
        url: '/posts'
      }).then((res) => {
        // console.log(res)
        this.postList = res.data.data
        // 存储备份数据，专门用来发往子组件
        this.postList_copy = { ...res.data.data }
        console.log(this.postList)
      })
    }
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
  .postmain{
    float: right;
    .pagination{
      margin-top: 20px;
      float: right;
      width: 700px;
    }
  }
}
</style>
