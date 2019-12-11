<template>
  <div class="postAside">
    <ul class="hotCity">
      <li v-for="(value,index) in dataList" :key="index" class="clearfix">
        <span>{{ value.type }}</span>
        <i class="el-icon-arrow-right" />
        <ul class="tuijian">
          <li v-for="(value1,index1) in value.children" :key="index1">
            <span>{{ index1+1 }}</span>
            <a href="javascript:;">{{ value1.city }}</a>
            <a href="javascript:;">{{ value1.desc }}</a>
          </li>
        </ul>
      </li>
    </ul>
    <h4>
      推荐城市
    </h4>
    <div class="img">
      <a href="javascript:;"><img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2394972844,3024358326&fm=26&gp=0.jpg" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataList'],
  methods: {

  }
}
</script>

<style lang="less" scoped>
.postAside {
  width: 260px;
  .hotCity {
    > li {
      position: relative;
      height: 40px;
      padding: 0px 20px;
      line-height: 40px;
      border-top: 1px solid #ddd;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      border-collapse: collapse;
      &:nth-child(2) {
        .tuijian {
          position: absolute;
          top: -41px;
          left: 258px;
        }
      }
      &:nth-child(3){
       .tuijian{
          position: absolute;
        top: -81px;
        left: 258px;
       }
      }
      &:nth-child(4){
       .tuijian{
          position: absolute;
        top: -121px;
        left: 258px;
       }
      }
      .tuijian {
        position: absolute;
        top: -1px;
        left: 258px;
        width: 380px;
        border: 1px solid #ddd;
        border-collapse: collapse;
        display: none;
        background-color: #fff;
        padding: 15px;
        box-sizing: border-box;
        z-index: 1;
        li {
          display: flex;
          height: 30px;
          align-items: center;
          padding: 0px;
          > span {
            font-size: 22px;
            font-style: italic;
          }
          a {
            font-style: 14px;
            &:nth-child(2) {
              margin: 0px 10px;
            }
          }
        }
      }
      &:last-child {
        border-bottom: 1px solid #ddd;
      }
      &:hover {
        color: #ffa500;
        border-right: 1px solid #fff;
        z-index: 10;
        .tuijian {
          display: block;
          a {
            &:nth-child(2) {
              color: #ffa500;
            }
            &:nth-child(3) {
              color: #666;
            }
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      > span {
        float: left;
        font-size: 14px;
      }
      > i {
        float: right;
        line-height: 40px;
        font-size: 16px;
      }
    }
  }
  h4{
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
  .img{
    width: 260px;
    img{
      width: 100%;
    }
  }
}
</style>
