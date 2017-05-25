<template>
  <div v-html="book" class="read">

  </div>
</template>

<script>
  
  import url from '../../../url.js';
  import {
    Indicator
  } from 'mint-ui';
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        book: ''
      }
    },
    mounted() {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
      this.$http.get(url.getDetailBook, {
        params: {
          sessionId: window.localStorage['sessionId'],
          username: window.localStorage['username'],
          bookName: this.$route.query.bookName,
          page:'第'+this.$route.query.page+'章'
        }
      }).then(res => {
        Indicator.close();
        if (res.body.isSuccess) {
          this.$data.book = res.body.msg.replace(/\n/g,'<br>')
        } else {
          Toast({
            message: '获取书籍失败',
            duration: 1000
          });
        }
      }, res => {
        Indicator.close();
        Toast({
          message: '获取书籍失败',
          duration: 1000
        });
      })
    }
  }
</script>

<style lang="sass" scoped>
.read {
  background:#F5F5F5;
  width:100%;
  padding-left:12px;
  padding-right:12px;
  padding-top:8px;
  padding-bottom:15px;
  box-sizing: border-box;
}
</style>