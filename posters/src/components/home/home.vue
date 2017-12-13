<style scoped lang="scss">
    $--main-font-color: #888;
    $--title-font-color: #666;
    $--wit-font-color: #fff;
     .layout-header{
        height: 60px;
        // background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        color: $--title-font-color;
        font-size: 23px;
       text-align: center !important;
       line-height: 60px;
       vertical-align: center;
        background: hsl(210, 13%, 60%);
        color: hsl(210, 13%, 30%);
        text-shadow: 0 1px 1px hsla(0, 0%, 100%, .8);        
    }
    body{
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        height: 100vh;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    #row{
        height: 100vh;
    }
    .ico_img{
        height: 100%;
        margin:auto;
        left: 0px;
        right: 0px;
        position: relative;
        display: block;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: scroll;
        background: #fff;
        border-radius: 4px;
        height: 82vh;

    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
       
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
   
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        color:$--wit-font-color;
        line-height: 30px;
        font-size: 18px;
        padding-left: 7px;
        
    }
</style>
<template>
    <div class="layout">
        <Row type="flex" id="row">
            <i-col span="5" class="layout-menu-left">
                <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left">
                        <img src="./img/ico.png" class="ico_img">
                    </div>
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            VUE
                        </template>
                        <Menu-item name="1-1" ><p @click="change(1)">响应式</p></Menu-item>
                        <Menu-item name="1-2"><p @click="change(2)">路由</p></Menu-item>
                        <Menu-item name="1-3" ><p @click="change(3)">组件化</p></Menu-item>
                        <Menu-item name="1-4"  ><p@click="change(4)">模块化</p></Menu-item>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            工程化
                        </template>
                        <Menu-item name="2-1"><p @click="change(5)">前端工程化</p></Menu-item>
                        <Menu-item name="2-2"><p @click="change(6)">前后端分离</p></Menu-item>
                    </Submenu>
                    
                </Menu>
            </i-col>
            <i-col span="19">
                <div class="layout-header">{{main_title}}</div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="/b/basic">首页</Breadcrumb-item>
                        <Breadcrumb-item>{{fenye}}</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                        <router-view>
                        </router-view>
                </div>
                <div class="layout-copy">
                    2017 &copy; DawninShaodw
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
            return{
                 main_title: '当我们讨论VUE,我们在讨论什么',
                 fenye: 'VUE介绍'
            }
    },
    methods: {
        change (type){
            console.log("aaaa")
            switch(type){
                case 1: 
                    this.fenye = '响应式',
                    this.$router.push('/b/xiangyingshi')
                    break;
                case 2: 
                    this.fenye = '路由',
                    this.$router.push('/b/luyou')
                    break;
                case 3: 
                    this.fenye = '组件化'
                    this.$router.push('/b/zujianhua')
                    break;
                case 4: 
                    this.fenyue= '模块化'
                    this.$router.push('/b/mokuaihua')
                    break;
                case 5: 
                    this.fenye = '工程化'
                    this.$router.push('/b/gongchenghua')
                    break;
                case 6: 
                    this.fenye = '前后端分离'
                    this.$router.push('/b/fenli')
                
            }
        }
    }
    }
</script>