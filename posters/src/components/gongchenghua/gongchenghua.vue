<template>
<div id="gongcheng">
   <Collapse active-key="1" accordion>
        <Panel key="1">
            Webpack
            <p slot="content">
               WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。
                <Collapse accordion>
                    <Panel>
                       本地服务器与热更新
                        <p slot="content">使用Webpack可以方便的搭建本地服务器,在本地模拟服务器环境,并且具有热更新的功能,可以极大程度简洁开发流程</p>
                    </Panel>
                    <Panel>
                        包管理
                        <p slot="content">内置包管理工具,方便引入vue组件,可以自行配置路径缩写,方便定位资源</p>
                    </Panel>
                    <Panel>
                        资源分割与js压缩
                        <p slot="content">在打包过程中会把小图片编码化,把vue文件压制成js,并且压缩js以减少http请求次数,自动帮你进行前端性能优化</p>
                    </Panel>
                </Collapse>

                </p>
        </Panel>
        <Panel key="2">
            SCSS/LESS
            <p slot="content" style="padding:20px;">SCSS是一种CSS预处理器,它的优势在于开发效率高。对于一些样式复杂的站点，用 SCSS 之类的工具生成代码比手写 CSS 快得多。而且也方便后期的样式更改
                <img src="./img/1.png" >
            </p>
        </Panel>
        <Panel key="3">
           Babel
            <p slot="content">Babel是把ES6语法转换为ES5的转换工具</br>vue支持并且推荐用ES6的语法来编写JavaScript,但是ES6的语法还没有在浏览器界得到广泛的支持,所以就要通过Babel来进行转义</p>
        </Panel>
    </Collapse>
</div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
#gongcheng{
    background:#eee;
    padding: 20px;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 18px;
}
#gongcheng img{
    width: 100%;
}

</style>
