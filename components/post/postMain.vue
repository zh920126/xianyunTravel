<template>
  <div class="postMain">
    <div v-if="value.images.length>=3" class="threePic">
      <div class="top">
        <a href="javasccript:;">{{ value.title }}</a>
      </div>
      <div class="description">
        <p><a href="javascript:;">{{ value.summary }}</a></p>
      </div>
      <div class="pic">
        <a v-for="(item,index1) in value.images" :key="index1" href="javascipt:;">
          <img
            :src="item"
            alt
          >
        </a>
      </div>
      <div class="address clearfix">
        <div class="left">
          <span>
            <i class="el-icon-location-outline" />
            {{ value.cityName }}
          </span>
          <div class="author clearfix">
            <span>by</span>
            <a href="javascript:;">
              <img
                src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2242212773,2792770847&fm=26&gp=0.jpg"
                alt
              >
            </a>
            <a href="javascript:;">{{ value.account.nickname }}</a>
          </div>
          <span>
            <i class="el-icon-view" />
            {{ value.watch }}
          </span>
        </div>
        <div class="right">
          <span>{{ value.like }} 赞</span>
        </div>
      </div>
    </div>
    <div v-else class="onePic clearfix">
      <div class="img">
        <a href="javascript:;">
          <img :src="value.images[0]" alt="">
        </a>
      </div>
      <div class="title">
        <h3><a href="javascript:;">{{ value.title }}</a></h3>
        <p><a href="javascript:;">{{ value.summary }}</a></p>
        <div class="address clearfix">
          <div class="left">
            <span>
              <i class="el-icon-location-outline" />
              {{ value.cityName }}
            </span>
            <div class="author clearfix">
              <span>by</span>
              <a href="javascript:;">
                <img
                  src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2242212773,2792770847&fm=26&gp=0.jpg"
                  alt
                >
              </a>
              <a href="javascript:;">地球发动机</a>
            </div>
            <span>
              <i class="el-icon-view" />
              {{ value.watch }}
            </span>
          </div>
          <div class="right">
            <span>{{ value.like }} 赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    value () {
      if (!this.post) {
        return ''
      } else {
        return this.post
      }
    }
  }
}
</script>

<style lang="less" scoped>
.postMain {
  width: 700px;
  .threePic {
    padding: 20px 0px;
    border-bottom: 1px solid #ddd;
    .top {
      margin-bottom: 20px;
      > a {
        font-size: 18px;
        &:hover {
          color: orange;
        }
      }
    }
    .description {
      margin-bottom: 15px;
      p {
        a{
          font-size: 14px;
        color: #666;
        line-height: 1.5;
        height: 63px;
        overflow: hidden;
        }
      }
    }
    .pic {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      overflow: hidden;
      a{
        float: left;
        width: 220px;
        height: 150px;
        &:nth-child(2){
          margin: 0px 20px;
        }
      }
      img {
        width: 220px;
        height: 150px;
      }
    }
    .address {
      .left {
        display: flex;
        float: left;
        align-items: center;
        padding-top: 2px;
        > span {
          font-size: 12px;
          color: #999;
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
        .author {
          display: flex;
          font-size: 12px;
          margin-right: 10px;
          > span {
            color: #999;
            margin-right: 5px;
          }
          > a {
            color: orange;
            &:nth-child(2) {
              display: block;
              width: 16px;
              height: 16px;
              margin-right: 5px;
              img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
              }
            }
          }
        }
      }
      .right{
        float: right;
        font-size: 16px;
        color: orange;
      }
    }
  }
  .onePic{
    padding: 20px 0px;
    border-bottom: 1px solid #ddd;
    .img{
      float: left;
      a{
        img{
          display: block;
          width: 220px;
          height: 150px;
        }
      }
    }
    .title{
      float: right;
      width: 470px;
      h3{
        a{
          font-size: 18px;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover{
            color: orange;
          }
        }
      }
      p {
        margin-top: 15px;
        a{
          font-size: 14px;
        color: #666;
        line-height: 1.5;
        height: 63px;
        overflow: hidden;
        }
      }
       .address {
         margin-top: 20px;
      .left {
        display: flex;
        float: left;
        align-items: center;
        padding-top: 2px;
        > span {
          font-size: 12px;
          color: #999;
          &:nth-child(1) {
            margin-right: 10px;
          }
        }
        .author {
          display: flex;
          font-size: 12px;
          margin-right: 10px;
          > span {
            color: #999;
            margin-right: 5px;
          }
          > a {
            color: orange;
            &:nth-child(2) {
              display: block;
              width: 16px;
              height: 16px;
              margin-right: 5px;
              img {
                width: 16px;
                height: 16px;
                border-radius: 50%;
              }
            }
          }
        }
      }
      .right{
        float: right;
        font-size: 16px;
        color: orange;
      }
    }
    }
  }
}
</style>
