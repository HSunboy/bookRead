<template>
    <div>
        <head-top choose="detail" title="Hsing"></head-top>
        <div class="leftlist">
      
            <ul class="am-nav" style="margin-top:51px;">
    
                <li class="am-nav-header">基础</li>
                <li :class="{'am-active':nowpath=='/detail/overView'}"><router-link to="/detail/overView" >概述</router-link></li>
                <li :class="{'am-active':nowpath=='/detail/install'}"><router-link to="/detail/install" >安装</router-link></li>
                <li class="am-nav-divider"></li>
                <li class="am-nav-header">基本功能</li>
                 <li :class="{'am-active':nowpath=='/detail/menu'}"><router-link to="/detail/menu" >目录规范</router-link></li>
                 <li :class="{'am-active':nowpath=='/detail/config'}"><router-link to="/detail/config" >配置文件</router-link></li>
                 <li :class="{'am-active':nowpath=='/detail/run'}"><router-link to="/detail/run" >运行</router-link></li>
                <li class="am-nav-divider"></li>
                <li class="am-nav-header">模版</li>
                <li><a href="#">简介</a></li>
                <li><a href="#">Vue</a></li>
                <li class="am-nav-divider"></li>
                <li class="am-nav-header">云构建</li>
                <li><a href="#">客户端配置</a></li>
                <li><a href="#">服务端配置</a></li>
               
    
            </ul>
    
        </div>
        <router-view class="detail_content"></router-view>
        
    </div>
</template>

<script>
    import headTop from '../../components/myHeader'
    
    
    export default {
        data() {
            return {nowpath:''}
        },
        components: {
            headTop
        },
        methods:{
            updataPath(){
                return this.nowpath=this.$route.path
            }
        },
        watch:{
            '$route':'updataPath'
        },
        mounted:function(){
            this.nowpath=this.$route.path 
        }
    }
</script>

<style lang="sass" scoped>
.detail_content{
    left:220px;
    position:absolute;
    top:70px;
    right:20px;
}
   .leftlist{
      height:100%;
      overflow-y:auto;
      overflow-x:hidden;

       left:0px;
       position: fixed;
       width:180px;
   }

</style>