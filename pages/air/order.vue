<template>
  <div class="orderList clearfix">
    <!-- 这里是表单页面 -->
    <orderForm/>
    <!-- 这里是侧边栏组件 -->
    <orderAside/>
  </div>
</template>

<script>
//引入组件
import orderAside from '@/components/air/orderAside.vue'
import orderForm from '@/components/air/orderForm.vue'
export default {
  components: {
    orderAside,orderForm
  }
}
</script>

<style>
.orderList{
  width: 1000px;
  margin: 0 auto;
}

</style>