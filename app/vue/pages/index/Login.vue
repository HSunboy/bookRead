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
      <div class="lab">请输入账户</div>
      <input type="text" name="">
    </div>  
    <div class="wrap">
      <div class="lab">请输入手机号码</div>
      <input type="text" name="">
    </div>
    <div class="wrap">  
      <mt-button type="primary" size="large" @click="bookSubmit">登录</mt-button>
    </div>
    <div class="wrap">  
      <mt-button type="primary" size="large">忘记密码？</mt-button>
    </div>                
  </div>
</div>
    



</template>
<script>
   // import dyj from '../../../static/images/dyj.jpeg'
   // import xylz from '../../../static/images/xylz.jpeg'
   // import dzz from '../../../static/images/dzz.jpeg'

    export default {
        data() {
            return {}
        },
        methods:{
          handleClose () {
            window.history.back();  
          },
          bookSubmit () {
            this.$router.push('/index');
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