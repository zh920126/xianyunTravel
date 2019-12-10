<template>
  <div>酒店首页
    <h2>高德地图实例</h2>
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  mounted () {
     window.onLoad  = function(){
        var map = new AMap.Map('map',{
        zoom:11,//级别
        center: [113.1, 30.6],//中心点坐标
        viewMode:'3D'//使用3D视图
    });
  }
  var url = 'https://webapi.amap.com/maps?v=1.4.15&key=	e7df17c3b13a3901bcb1c0f7c6d28e75&callback=onLoad';
  var jsapi = document.createElement('script');
  jsapi.charset = 'utf-8';
  jsapi.src = url;
  document.head.appendChild(jsapi);
  }
}
</script>

<style lang="less" scoped>
#map{
  width: 500px;
  height: 500px;
}

</style>
