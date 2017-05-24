<template>
<div class="bookdetail">
  <mt-header v-bind:title="myname" >
    <div slot="left">
       <mt-button @click="handleClose" icon="back"></mt-button>
    </div>
  </mt-header>
  <div class="wrapbook">
    <div class="left">
      <img v-bind:src="myimg">
    </div>
    <div class="right">
      <div class="name">{{myname}}</div>
      <div class="author">{{myauthor}}</div>
      <div>都市/都市生活</div>
      <div>1024万字/连载</div>
    </div>
    <div class="buttom">
      <mt-button  @click="toRead">免费试读</mt-button>
      <mt-button  @click="toList">查看目录</mt-button>
      <mt-button type="primary"  @click="toCase">加入书架</mt-button>
    </div>
  </div>
  <div class="descrip">
    《{{myname}}》由起点超人气作者'辰东'最新巨作,讲述的是　一粒尘可填海，一根草斩尽日月星辰，弹指间天翻地覆。 群雄并起，万族林立，诸圣争霸，乱天动地。问苍茫大地，谁主沉浮？！ 一个少年从大荒中走出，一切从这里开始…… 《完美世界小说》文笔流畅、洒脱、新颖，情节内容绝对一流,所以我们要多多支持'辰东'写的更好更精彩,支持《完美世界小说》请您购买正版、或多多帮助宣传、推荐本书,好的小说,有了您们的支持才能更精彩! 完美世界小说小说网每天第一时间更新《完美世界小说》最新章节,欢迎收藏!
  </div>
</div>
    



</template>
<script>
  import dyj from '../../../static/images/dyj.jpeg'
  import xylz from '../../../static/images/xylz.jpeg'
  import dzz from '../../../static/images/dzz.jpeg'
  var myimg = window.localStorage.getItem("bookImg")||dyj;
  var myname = window.localStorage.getItem("bookName")||'123';
  var myauthor = window.localStorage.getItem("bookAuthor")||'345';
  export default {
    data() {
        return {myimg,myname,myauthor}
    },
    methods:{
      handleClose(){
        window.history.back();  
      },
      toRead(){
        this.$router.push('/reading')
      },
      toList(){
        this.$router.push('/booklist')
      },
      toCase(){
        this.$router.push('/bookcase');
      }
    }
  }
</script>

<style lang="sass" scoped>
.link {
  color: #fff;
  text-decoration: none;
}
.bookdetail {
    background:#fff;
    width:100%;
    .wrapbook{
      width: 100%;
      padding: 20px 0;
      height: auto;
      background-color: #eee;
      border-bottom: solid #ccc 2px;
      overflow: auto;
      .left{
        float: left;
        width: 30%;
        margin-left: 5%;
      }
      .right{
        float: left;
        width: 55%;
        margin-left: 10%;
        div{
          height: 50px;
        }
        .name{
          font-size: 28px;
          font-weight: bolder;
        }
        .author{
          font-size: 20px;
          font-weight: bolder;
        }
      }
      .buttom{
        width: 100%;
        float: left;
        margin: 25px 5% 10px;
      }
    }
    .descrip{
      width: 90%;
      margin-left: 5%;
      margin-top:20px;
      font-size: 18px;
      line-height: 25px;
    }
}

</style>