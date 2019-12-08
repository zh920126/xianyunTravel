<template>
  <div class="orderList clearfix">
    <!-- 这里是表单页面 -->
    <orderForm :airsDate="airsDate" @sendTotalPrice="handleGetTotalPrice"/>
    <!-- 这里是侧边栏组件 -->
    <orderAside :airsDate="airsDate" :totalPrice="totalPrice"/>
  </div>
</template>

<script>
//引入组件
import orderAside from '@/components/air/orderAside.vue'
import orderForm from '@/components/air/orderForm.vue'
export default {
  data () {
    return {
      airsDate:{
        seat_infos:{},
        dep_time:"",
        arr_time:"",
        insurances:[]
      },
      //定义一个变量用来接收表单组件传送过来的总价格
      totalPrice:0
    }
  },
  components: {
    orderAside,orderForm
  },
  mounted () {
    //使用钩子函数来获取用户选择的机票的详情
    this.$axios({
      url:`/airs/${this.$route.query.id}`,
      params:{
        seat_xid:this.$route.query.seat_xid
      }
    }).then(res=>{
      //请求成功之后将数据赋值，并传给子组件
      console.log(res);
      this.airsDate=res.data
      console.log(this.airsDate);
    }).catch(err=>{
      console.log(err);
    })
  },
  methods: {
    handleGetTotalPrice(res){
      console.log("价格改变了");
      console.log(res);
      //将获取到的数据存到预先定义好的变量当中
      this.totalPrice=res
    }
  }
}
</script>

<style>
.orderList{
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0px;
}

</style>