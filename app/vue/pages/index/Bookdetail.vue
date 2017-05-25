<template>
  <div class="bookdetail">
    <mt-header v-bind:title="bookName">
      <div slot="left">
        <mt-button @click="handleClose" icon="back"></mt-button>
      </div>
    </mt-header>
    <div class="wrapbook">
      <div class="left">
        <img v-bind:src="bookImg">
      </div>
      <div class="right">
        <div class="name">{{bookName}}</div>
        <div class="author">{{bookAuthor}}</div>
        <div>共
          <mt-badge size="small">{{bookCount}}</mt-badge> 章</div>
      </div>
      <div class="buttom">
  
        <mt-button type="danger" @click="toList">查看目录</mt-button>
        <mt-button type="primary" @click="toCase">加入书架</mt-button>
      </div>
    </div>
    <div class="descrip">
      {{bookMsg}}
    </div>
  </div>
</template>

<script>

  import url from '../../../url.js';
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        bookMsg: this.$route.query.bookMsg,
        bookName: this.$route.query.bookName,
        bookAuthor: this.$route.query.bookAuthor,
        bookImg: this.$route.query.bookImg,
        bookCount: this.$route.query.bookcount
      }
    },
    methods: {
      handleClose() {
        window.history.back();
      },
      toList() {
        this.$router.push({
          path: '/booklist',
          query: {
            bookName: this.$data.bookName,
            bookcount: this.$route.query.bookcount
          }
        })
      },
      toCase() {
        this.$http.get(url.addBook, {
          params: {
            sessionId: window.localStorage['sessionId'],
            username: window.localStorage['username'],
            bookName: this.$data.bookName
          }
        }).then(res => {
          if (res.body.isSuccess) {
            Toast({
              message: '加入成功',
              duration: 1000
            });
          }else{
            Toast({
              message: '加入失败',
              duration: 1000
            });
          }
  
        }, res => {
          Toast({
            message: '加入失败',
            duration: 1000
          });
        })
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
        height:150px;
        img {
          max-height:100%;
          width:100%;
        }
      }
      .right{
        float: left;
        width: 55%;
        margin-left: 10%;
        div {
          height: 50px;
        }
        .name{
          font-size: 28px;
          font-weight: bolder;
        }
        .author{
          font-size: 16px;
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
      padding-bottom:20px;
    }
}

</style>