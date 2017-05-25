<template>
    <div class="indexbox">
        <div class="mtheader">
            <mt-header title="全部文章">
                <div slot="left">
                    <mt-button @click="handleClose" icon="back"></mt-button>
                </div>
                <div slot="right">
                    <router-link to="/bookcase" class="link">书架</router-link>
                </div>
            </mt-header>
        </div>
        <div class="flexbox">
            <template v-for="book in books">
                     <div class="flexitem" @click="toDetail(baseUrl+'/images/'+book.bookname+'.jpg',book.bookname,book.writername,book.bookmsg,book.bookcount)">
                    <img v-bind:src="baseUrl+'/images/'+book.bookname+'.jpg'"/>
                    <div class="msg">{{book.bookname}}
                        <span>{{book.writername}}</span>
                    </div>
                </div>
</template>
       
        
        
    </div>
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
                baseUrl:url.statusUrl,
                books: []
            }
        },
        methods: {
            toDetail(img, name, author,msg,count) {
                
                this.$router.push({
                    path:'/bookdetail',
                    query:{
                        bookImg:img,
                        bookName:name,
                        bookAuthor:author,
                        bookMsg:msg,
                        bookcount:count
                    }
                
                });
            },
            handleClose() {
                window.history.back();
            }
        },
        mounted() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            this.$http.get(url.getBookList, {
                params: {
                    sessionId: window.localStorage['sessionId'],
                    username: window.localStorage['username']
                }
            }).then(res => {
                Indicator.close();
                if (res.body.isSuccess) {
                    this.$data.books = res.body.books
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
.indexbox {
    background:#F5F5F5;
    width:100%;
    padding-top:10px;
    padding-bottom:10px;
    min-height:100%;
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
        margin-top:40px;
        padding-top:5px;
        background:#FFF;
       min-height:100%;
        
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