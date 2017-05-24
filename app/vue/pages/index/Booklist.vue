<template>
<div class="list">
  <ul>
    <li v-for="n in 100" @click="toRead">弟 {{n}} 章</li>
  </ul>
</div>
    



</template>
<script>
   import dyj from '../../../static/images/dyj.jpeg'
   import xylz from '../../../static/images/xylz.jpeg'
   import dzz from '../../../static/images/dzz.jpeg'

    export default {
        data() {
            return {}
        },
        methods:{
          loadTop(){

          },
          loadBottom(){

          },
          allLoaded(){

          },
          toRead(){
            this.$router.push('/reading');
          }
        }
    }
</script>

<style lang="sass" scoped>
.list {
    background:#F5F5F5;
    width:100%;
    ul{
      width: 90%;
      margin-left: 5%;
      list-style: none;
      li{
        width: 90%;
        height: 40px;
        line-height: 40px;
        border-bottom: solid #ccc 1px;
        font-weight: 20px;
      }
    }
}
</style>