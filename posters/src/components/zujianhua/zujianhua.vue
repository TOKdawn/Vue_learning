<template>
<div id="zujian">
  <Row>
        <i-col span="12"> <Card style="width:320px">
        <div style="text-align:center">
            <img src="./images/logo.png" style="width:50%">
            <h3>一套基于 Vue.js 的高质量UI组件库</h3>
        </div>
    </Card></i-col>
        <i-col span="12"><Card :bordered="false"style="width:380px">
            <p slot="title">组件化
            </p>
            <p>在Vue的理念里,页面是由一个个组件构成的,你可以编写自己的组件复用,也可以使用别人开发好的组件,组件的使用很方便,只需要引入后在js中进行注册然后直接写入模板里即可,由组件也引出了很多基于VUE的前端UI框架,比如iview,ElementUI等等,使用这些UI框架可以很容易的统一页面风格,加快开发流程
            </p>
        </Card>
        </i-col>
    </Row>
    <div class="show">
      <Row>
        <Col span="12">
            <Date-picker type="date" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
        <Col span="12">
            <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
        </Col>
    </Row>
     <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress>
     <i-circle :percent="80">
        <span class="demo-i-circle-inner" style="font-size:24px">80%</span>
    </i-circle>
    <i-circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
    </i-circle>
    <i-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-i-circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
    </i-circle>
 
      <Button type="primary" @click="open(false)">打开提醒</Button>
    <Button @click="open(true)">打开提醒（仅标题）</Button>
      </div>
</div>
</template>
<script>
 export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: '这是通知标题',
                    desc: nodesc ? '' : '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
#zujian{
    background:#eee;
    padding: 30px;
    width: 100%;
    height: 100%;
    text-align: center;
}
.show{
  background: #fff;
  padding: 100px;
  margin-top: 10px;
}
</style>
