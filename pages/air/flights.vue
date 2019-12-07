<template>
  <div class="container clearfix">
    <!-- {{$store.state.history.userHistory}} -->
    <div class="left">
      <!-- 引入头部组件 -->
      <SelectFlight :flightselect="flightsData_copy" @filterMessage="handleFilter" />
      <FightsHeader />
      <fightsMessage :flight="item" v-for="(item, index) in dataList" :key="index" />
      <!-- 分页器 -->
      <el-pagination
        v-if="flightsData.flights.length"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPages||0"
      ></el-pagination>
      <div class="showNone" v-if="!flightsData.flights.length">没有其他航班信息了</div>
    </div>
    <div class="right clearfix">
      <div class="clearfix">
        <div class="renz">
          <span class="iconfont">&#xe79f;</span>
          <span>航协认证</span>
        </div>
        <div class="promise">
          <span class="iconfont">&#xe60d;</span>
          <span>出行保证</span>
        </div>
        <div class="call">
          <span class="iconfont">&#xe60c;</span>
          <span>7X24</span>
        </div>
      </div>
      <p>免费客服电话：4006345678转2</p>
    </div>
    <div class="rightbottom">
      <p>历史查询</p>
      <div class="history" v-for="(value,index) in $store.state.history.userHistory" :key="index">
        <div class="fromTo">
          <span>{{value.departCity}} - {{value.destCity}}</span>
          <span>{{value.departDate}}</span>
        </div>
        <a :href="`/air/flights?departCity=${value.departCity}&departCode=${value.departCode}&destCity=${value.destCity}&destCode=${value.destCode}&departDate=${value.departDate}`">选择</a>
        <span @click="handleRemoveHistory(index)">X</span>
      </div>
    </div>
  </div>
</template>

<script>
// 引入飞机票页面的头部组件
import FightsHeader from "@/components/air/fightsHeader.vue";
import fightsMessage from "@/components/air/fightsMessage.vue";
import SelectFlight from "@/components/air/selectFlight.vue";

export default {
  components: {
    // 组件组件
    FightsHeader,
    fightsMessage,
    SelectFlight
  },
  data() {
    return {
      //进行筛选时数据被污染，所以需要重新定义一份数据
      flightsData_copy: {
        flights: [],
        info: {},
        options: {}
      }, // 航班总数据
      flightsData: {
        flights: [],
        info: {},
        options: {}
      }, // 航班总数据
      // dataList: [], // 航班列表数据，用来渲染页面
      pageIndex: 1, //打开页面显示第1页
      pageSize: 5, //默认每页显示的数据
      totalPages: "" //总页数
    };
  },
  methods: {
    handleSizeChange(val) {
      // console.log(val);
      //当选择每页的数据条数时，给pagesize重新赋值
      this.pageSize = val;
      //同时调用封装的init函数进行数据的获取
      // this.init()
    },
    handleCurrentChange(val) {
      // console.log(val);
      //获取当前的页码
      this.pageIndex = val;
      //调用封装的函数init进行点击翻页时的数据的获取
      // this.init()
    },
    //将获取页面的数据封装成函数
    init() {
      this.$axios({
        url: "/airs",
        // 参数可以通过 this.$route.query
        // 这里面数据本来就是一个对象,所以无需自己拼接
        params: this.$route.query
      }).then(res => {
        // console.log(res);
        this.flightsData = res.data;
        //将数据深拷贝一份存起来，用来避免数据的污染
        this.flightsData_copy = { ...res.data };
      });
    },
    handleFilter(newFlightlist) {
      // console.log(newFlightlist);
      this.flightsData.flights = newFlightlist;
    },
    //点击历史记录时，进行跳转
    handlejump(index) {
      this.$router.push({
        path: "/air/flights",
        query: this.$store.state.history.userHistory[index]
      });
    },
    //点击X时，删除掉这条历史记录
    handleRemoveHistory(index){
      this.$store.commit('history/DelUserHistory',index)
    }
  },
  computed: {
    dataList() {
      //设置分页
      //开始页面的索引值
      let start = (this.pageIndex - 1) * this.pageSize;
      //需要获取数据的条数
      let end = start + this.pageSize;
      this.totalPages = this.flightsData.flights.length;
      console.log(this.totalPages);
      return this.flightsData.flights.slice(start, end);
      // //总共数据的条数
    }
  },
  // 使用钩子函数获取所有的航班信息
  mounted() {
    // console.log(this.$route.query);
    // 对于路由,两种参数分别是 params 和 query
    // 对于 axios 两种参数分别是 data 和 params
    //调用封装的函数进行数据的获取并渲染页面
    this.init();
  }
};
</script>

<style lang="less" scoped>
.showNone {
  width: 745px;
  height: 100px;
  line-height: 50px;
  font-size: 30px;
  color: orange;
  text-align: center;
  background-color: #eee;
}
.container {
  width: 1000px;
  margin: 0 auto;
  margin-top: 20px;
  .left {
    width: 745px;
    float: left;
  }
  .right {
    float: right;
    width: 240px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 10px 0px 0px;
    .renz,
    .promise,
    .call {
      float: left;
      width: 33%;
      span {
        display: block;
        &:nth-child(1) {
          font-size: 40px;
          color: #409eff;
          text-align: center;
        }
        &:nth-child(2) {
          text-align: center;
          font-size: 12px;
        }
      }
    }
    .promise {
      span {
        &:nth-child(1) {
          color: green;
        }
      }
    }
    p {
      margin-top: 10px;
      height: 32px;
      line-height: 32px;
      padding-left: 10px;
      font-size: 14px;
      background-color: #f6f6f6;
    }
  }
  .rightbottom {
    width: 240px;
    float: right;
    border: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px 10px 20px;
    > p {
      padding-bottom: 10px;
      border-bottom: 1px solid #ddd;
    }
    .history {
      display: flex;
      padding-top: 10px;
      justify-content: space-between;
      >a{
        margin-top: 10px;
        cursor: pointer;
        background-color: orange;
        margin-left: 50px;
          padding: 0px 10px;
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          color: #fff;
          border-radius: 5px;
      }
      > span {
        margin-top: 10px;
        cursor: pointer;
        background-color: orange;
        &:nth-child(3) {
          padding: 5px;
          height: 20px;
          line-height: 10px;
          border-radius: 5px;
          color: #fff;
          background-color: #ccc;
        }
      }
      .fromTo {
        span {
          display: block;
          &:nth-child(2) {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
