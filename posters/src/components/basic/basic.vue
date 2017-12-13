<template>
  <div id="basic">
      
      <img src="./logo.png" >
        <Card :bordered="false">
            <p slot="title"> VUE </p>
            <p style="padding:30px; font-size:18px;">Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。</p>
                <Row style="width:20%; margin-left:40%;">
                  <i-col span="12"><i-button type="ghost" shape="circle" style="background:#37ad70; color:#fff" ><a href="https://cn.vuejs.org/">VUE官网</a></i-button></i-col>
                  <i-col span="12"><i-button type="ghost" shape="circle"><a href="https://github.com/vuejs/vue" style="color:#2fa15d">GITHUB</a></i-button></i-col>
             </Row>
        </Card>
        
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
a{
    color: #fff;
   
}
a:hover{
    color: #fff;
}

#basic{
    background:#eee;
    padding: 20px;
    width: 100%;
    height: 100%;
    text-align: center;
}

</style>
