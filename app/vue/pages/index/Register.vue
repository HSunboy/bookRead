<template>
  <div class="login">
    <mt-header title="注册">
      <div slot="left">
        <mt-button @click="handleClose" icon="back"></mt-button>
      </div>
      <div slot="right">
        <router-link to="/login" class="link">登录</router-link>
      </div>
    </mt-header>
  
    <div class="loginbox">
      <div class="wrap">
        <div class="lab">请输入账户</div>
        <input type="text" name="" v-model="username">
      </div>
      <div class="wrap">
        <div class="lab">请输入密码</div>
        <input type="password" name="" v-model="pwd">
      </div>
      <div class="wrap">
        <div class="lab">请再次输入密码</div>
        <input type="password" name="" v-model="conPwd">
      </div>
      <div class="wrap">
        <mt-button type="primary" size="large" @click="rgSuccess">注册</mt-button>
      </div>
    </div>
  </div>
</template>

<script>

  import url from '../../../url.js'
  import {
    Toast
  } from 'mint-ui';
  export default {
    data() {
      return {
        username: '',
        pwd: '',
        conPwd: ''
      }
    },
    methods: {
      rgSuccess() {
        if (this.$data.username && this.$data.pwd && (this.$data.pwd == this.$data.conPwd)) {
          this.$http.get(url.register, {
            params: {
              username: this.$data.username,
              password: this.$data.pwd,
              sex: 1
            }
          }).then(response => {
            console.log(response)
            if (response.body.isSuccess) {
              Toast({
                message: '注册成功',
                duration: 1000
              });
              var that = this
              setTimeout(function() {
                that.$router.push('/login')
  
              }, 1100)
            } else {
              Toast({
                message: '注册失败',
                duration: 1000
              });
            }
  
          }, response => {
            Toast({
              message: '注册失败',
              duration: 1000
            });
          })
  
        } else {
          Toast({
            message: '请填写正确的信息',
            duration: 1000
          });
        }
  
  
  
      },
      handleClose() {
        window.history.back();
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