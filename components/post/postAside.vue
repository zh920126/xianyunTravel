<template>
  <div class="postAside">
    <ul class="hotCity">
      <li class="clearfix">
        <span>热门城市</span>
        <i class="el-icon-arrow-right"></i>
        <ul class="tuijian">
          <li>
            <span>1</span>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">世界著名古都和现代化国际城市</a>
          </li>
          <li>
            <span>2</span>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">粤港澳大湾区、泛珠江三角洲经济区</a>
          </li>
          <li>
            <span>3</span>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">长江入海口，东隔东中国海</a>
          </li>
          <li>
            <span>4</span>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">国家历史文化名城</a>
          </li>
          <li>
            <span>5</span>
            <a href="javascript:;">西安</a>
            <a href="javascript:;">中国国际形象最佳城市之一</a>
          </li>
        </ul>
      </li>
      <li class="clearfix">
        <span>推荐城市</span>
        <i class="el-icon-arrow-right"></i>
        <ul class="tuijian">
          <li>
            <span>1</span>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">世界著名古都和现代化国际城市</a>
          </li>
          <li>
            <span>2</span>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">粤港澳大湾区、泛珠江三角洲经济区</a>
          </li>
          <li>
            <span>3</span>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">长江入海口，东隔东中国海</a>
          </li>
          <li>
            <span>4</span>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">国家历史文化名城</a>
          </li>
          <li>
            <span>5</span>
            <a href="javascript:;">西安</a>
            <a href="javascript:;">中国国际形象最佳城市之一</a>
          </li>
        </ul>
      </li>
      <li class="clearfix">
        <span>奔向海岛</span>
        <i class="el-icon-arrow-right"></i>
        <ul class="tuijian">
          <li>
            <span>1</span>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">世界著名古都和现代化国际城市</a>
          </li>
          <li>
            <span>2</span>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">粤港澳大湾区、泛珠江三角洲经济区</a>
          </li>
          <li>
            <span>3</span>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">长江入海口，东隔东中国海</a>
          </li>
          <li>
            <span>4</span>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">国家历史文化名城</a>
          </li>
          <li>
            <span>5</span>
            <a href="javascript:;">西安</a>
            <a href="javascript:;">中国国际形象最佳城市之一</a>
          </li>
        </ul>
      </li>
      <li class="clearfix">
        <span>主题推荐</span>
        <i class="el-icon-arrow-right"></i>
        <ul class="tuijian">
          <li>
            <span>1</span>
            <a href="javascript:;">北京</a>
            <a href="javascript:;">世界著名古都和现代化国际城市</a>
          </li>
          <li>
            <span>2</span>
            <a href="javascript:;">广州</a>
            <a href="javascript:;">粤港澳大湾区、泛珠江三角洲经济区</a>
          </li>
          <li>
            <span>3</span>
            <a href="javascript:;">上海</a>
            <a href="javascript:;">长江入海口，东隔东中国海</a>
          </li>
          <li>
            <span>4</span>
            <a href="javascript:;">成都</a>
            <a href="javascript:;">国家历史文化名城</a>
          </li>
          <li>
            <span>5</span>
            <a href="javascript:;">西安</a>
            <a href="javascript:;">中国国际形象最佳城市之一</a>
          </li>
        </ul>
      </li>
    </ul>
    <h4>推荐城市</h4>
    <div class="img">
      <a href="javascript:;"><img src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2394972844,3024358326&fm=26&gp=0.jpg" alt=""></a>
    </div>
  </div>
</template>

<script>
export default {};
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