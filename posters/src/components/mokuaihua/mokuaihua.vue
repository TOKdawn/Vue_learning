<template>
<div id="mok">
   <Alert>
       <h2> 资源整合</h2>
        <span slot="desc">  Vue一般把模板,js,css写在同一个.vue的文件中,并且静态文件写在同级目录下,这样就可以方便定位页面对应的css,js,方便后期更改 </span>
      
    </Alert>
    <Alert type="success">
       <h2> 功能模块化</h2>
        <span slot="desc">Vue推荐把网址的各个部分都模块化,就是写成组件,再拼装成一体,各个模块有独立的命名空间,包括vue-router,vuex都支持模块化,把同类功能封装在一起,以减少文件大小,方便后期定位</span>
    </Alert>
    
    <Alert type="error">
        <h2>JS模块化</h2>
        <span slot="desc">
             现在业界也都推崇模块化的开发思想,模块化的核心思想是低耦合,可扩展,模块化的js文件应该以文件为单位独立,通过import相互调用,对外只暴露一个对象,通过操作此对象,实现特定的功能.
             
        </span>
    </Alert>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
#mok{
    background:#eee;
    padding: 30px;
    width: 100%;
    height: 100%;
    text-align: center;
}
span{
  font-size: 17px;
  padding: 20px;
  margin-top: 20px;
}
</style>
