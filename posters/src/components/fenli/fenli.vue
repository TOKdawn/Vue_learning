<template>
<div id="fenli">
  <Row style="padding:20px">
        <i-col span="11">
            <Card :bordered="false">
                <p slot="title">ESLint</p>
                <p>严格的JS风格检测</p>
                <p>统一代码风格</p>
                <p>方便前端程序员间协作</p>
            </Card>
        </i-col>
        <i-col span="11" offset="2">
            <Card shadow>
                <p slot="title">ARP</p>
                <p>API接口模拟</p>
                <p>HTTP请求获取,告别mook数据</p>
                <p>方便前后端程序员间协作</p>
            </Card>
        </i-col>
    </Row>
   <a style="font-size:18px; color:#666;" href="http://rap2.taobao.org/repository/editor?id=1162&itf=3687"> 以下数据来自ARP</a>
    <i-table border :columns="columns1" :data="donationSeller"></i-table>
</div>
</template>
<script>

export default {
    data(){
        return {
            donationSeller: [],
             columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '钱数',
                        key: 'money'
                    },
                    {
                        title: '时间',
                        key: 'time'
                    }
                ]
        }
    },
  created(){
        let _this = this;
        this.$axios.get('/GET/donationSeller/').then(
            function (response) {
                // console.log(this);
                console.log("请求捐赠成功",response.data.donationData)
                _this.donationSeller = response.data.donationData
            })
            .catch(function (error) {
                console.log("请求2错误: "+error)
            })
  }
}
</script>
<style lang="scss" scoped>
a{
    color: #fff;
   
}
a:hover{
    color: #fff;
}

#fenli{
    background:#eee;
    padding: 20px;
    width: 100%;
    height: 100%;
    text-align: center;
}

</style>
