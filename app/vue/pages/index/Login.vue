<template>
  <div class="login">
    <mt-header title="登 录">
      <div slot="left">
        <mt-button @click="handleClose">关闭</mt-button>
      </div>
      <div slot="right">
        <router-link to="/register" class="link">注册</router-link>
      </div>
    </mt-header>
  
    <div class="loginbox">
      <div class="wrap">
        <div class="lab">请输入用户名</div>
        <input type="text" name="" v-model="username">
      </div>
      <div class="wrap">
        <div class="lab">请输入密码</div>
        <input type="password" name="" v-model="pwd">
      </div>
      <div class="wrap">
        <mt-button type="primary" size="large" @click="bookSubmit">登录</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  // import dyj from '../../../static/images/dyj.jpeg'
  // import xylz from '../../../static/images/xylz.jpeg'
  // import dzz from '../../../static/images/dzz.jpeg'
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
        username: '',
        pwd: ''
      }
    },
    methods: {
      handleClose() {
        window.history.back();
      },
      bookSubmit() {
  
        if (this.$data.username && this.$data.pwd) {
          Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
          });
          this.$http.get(url.login, {
            params: {
              username: this.$data.username,
              password: this.$data.pwd
            }
          }).then(res => {
            Indicator.close();
            console.log(res)
            if (res.body.isSuccess) {
              window.localStorage['sessionId'] = res.body.sessionId
              window.localStorage['username'] = this.$data.username
              this.$router.push('/index');
            } else {
              Toast({
                message: res.body.errorMsg,
                duration: 1000
              });
            }
          }, res => {
            Indicator.close();
            Toast({
              message: '服务器繁忙',
              duration: 1000
            });
          });
  
        } else {
          Toast({
            message: '请填写正确的信息',
            duration: 1000
          });
        }
  
      }
    }
  }
</script>

<style lang="sass" scoped>
.login {
    background:#fff;
    width:100%;
    height: 100%;
}
.link {
  color: #fff;
  text-decoration: none;
}
.loginbox {
  width:100%;
  margin:0 auto;
  background:#fff;
    .wrap{
      width: 80%;
      margin:30px auto;
      .lab{
        height: 50px;
        line-height: 50px;
        color: #666;
      }
      input{
        width: 100%;
        height: 40px;
        border: solid 1px #ddd;
        background-color: #eee;
      }
    }
   
}
</style>