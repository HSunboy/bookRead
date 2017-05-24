<template>
<div class="indexbox">
  <div class="mtheader">
    <mt-header title="我的书架">
      <div slot="left">
         <mt-button @click="handleClose" icon="back"></mt-button>
      </div>
      <div slot="right">
         <router-link to="/index" class="link">首页</router-link>
      </div>
    </mt-header>
  </div>
    <div class="flexbox">
        <template v-for="book in books">
          <div class="flexitem" @click="toReading">
            <img v-bind:src="book.img"/>
            <div class="msg">{{book.name}}
                <span>{{book.author}}</span>
            </div>
        </div>
        </template>
        <!-- <div class="flexitem" >+</div>  -->
        <div class="flexitem">+</div>  
        
        
    </div>
</div>
    



</template>
<script>
   import dyj from '../../../static/images/dyj.jpeg'
   import xylz from '../../../static/images/xylz.jpeg'
   import dzz from '../../../static/images/dzz.jpeg'
   var books=[{
       img:dyj,
       name:'我是大赢家',
       author:'梦一如年'
   },{
       img:xylz,
       name:'雪鹰领主',
       author:'我爱西红柿'
   },{
       img:dzz,
       name:'大主宰',
       author:'天蚕土豆'
   },{
       img:dyj,
       name:'我是大赢家',
       author:'梦一如年'
   },{
       img:xylz,
       name:'雪鹰领主',
       author:'我爱西红柿'
   },{
       img:dzz,
       name:'大主宰',
       author:'天蚕土豆'
   },{
       img:dyj,
       name:'我是大赢家',
       author:'梦一如年'
   },{
       img:xylz,
       name:'雪鹰领主',
       author:'我爱西红柿'
   },{
       img:dzz,
       name:'大主宰',
       author:'天蚕土豆'
   },
   {
       img:dyj,
       name:'我是大赢家',
       author:'梦一如年'
   },{
       img:xylz,
       name:'雪鹰领主',
       author:'我爱西红柿'
   },{
       img:dzz,
       name:'大主宰',
       author:'天蚕土豆'
   },
   {
       img:dyj,
       name:'我是大赢家',
       author:'梦一如年'
   },{
       img:xylz,
       name:'雪鹰领主',
       author:'我爱西红柿'
   },{
       img:dzz,
       name:'大主宰',
       author:'天蚕土豆'
   }]

    export default {
        data() {
            return {books}
        },
        methods:{
          toReading(){
            // window.localStorage.setItem("bookImg",img);
            // window.localStorage.setItem("bookName",name);
            // window.localStorage.setItem("bookAuthor",author);
            this.$router.push('/reading');
          },
          handleClose(){
            window.history.back();  
          }
        }
    }
</script>

<style lang="sass" scoped>
.indexbox {
    background:#F5F5F5;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
}
.link {
  color: #fff;
  text-decoration: none;
}
    .flexbox {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        width:90%;
        margin:0 auto;
        background:#FFF;
       
        
        box-shadow:0px 0px 10px 5px #DCDCDC;
        .flexitem {
            width:85px;
            height:160px;
            margin-top:5px;
            margin-left:5px;
            margin-right:5px;
            

            img {
                width:100%;
                height:70%;
                box-shadow:0 1px 3px rgba(0,0,0,.3);
            }
            .msg {
                padding-top:2px;
                text-align:center;
                color:#000;
                font-size:14px;
            }
            span {
                display:block;
                color:#666;
                font-size:12px;
            }

        }
    }
</style>