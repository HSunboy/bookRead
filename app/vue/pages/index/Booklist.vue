<template>
<div class="list">
  <ul>
    <li v-for="n in bookcount" @click="toRead(n)">第 {{n}} 章</li>
  </ul>
</div>
    



</template>
<script>

    export default {
        data() {
            return {
              bookcount:parseInt(this.$route.query.bookcount)
            }
        },
        methods:{
          loadTop(){

          },
          loadBottom(){

          },
          allLoaded(){

          },
          toRead(n){
            this.$router.push({
              path:'/reading',
              query:{
                bookName:this.$route.query.bookName,
                page:n
              }
            
            });
          }
        }
        
    }
</script>

<style lang="sass" scoped>
.list {
    background:#F5F5F5;
    width:100%;
    min-height:100%;
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