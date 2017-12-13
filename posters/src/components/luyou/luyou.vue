<template>
<div id="luyou">
     <div style="padding: 20px">
        <Card :bordered="false">
            <p slot="title">前端路由</p>
            <p>
              利用Vue-router我们可以方便的编写前端路由,前端路由主要应用在单页面应用中,帮助前后端分离.</br>
              利用Vue-router可以实现很多路由功能,比如动态路由,路由拦截,路由嵌套等等等等.

            </p>
            
        </Card>
      <img src="./img/luyou.png" style="width:80% ; margin:30px; height:auto; ">
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
#luyou{
    background:#eee;
    padding: 30px;
    width: 100%;
    text-align: center;
}
p {
  font-size: 18px;
}
</style>
