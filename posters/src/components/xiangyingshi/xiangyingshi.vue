<template>
<div  id="xiang">
 <Card :bordered="false">
   <p slot="title">响应式开发</p>
   <p>把服务器端的数据快速且优美的展示给用户就是前端开发者的工作,所以视图与数据的绑定是前端开发者一直在面对的问题,大明鼎鼎的JQ就是因为因为他方便的数据获取,dom查询,dom操作才统治了前端届这么多年,包括现在JQ也是前端开发者必须要学的技术,当然不是因为它重要,而且因为大量的JQ页面的历史遗留问题,JQ显然已经不再适合这个版本了,现在是响应式编程的天下</p>
 </Card>
 <div style="margin-top:30px;">
  <input type="text" v-model="height1">
        <input type="text" v-model="width1">
        <input type="text" v-model="area"> height = {{height1}},width={{width1}},area={{area}}
 </div >
         <div id="zvue">
        <div id="calculator">
            <div class="top">

                <span class="clear" @click="eliminate()">C</span>

                <div class="screen">
                    <p>{{show}}</p>
                    {{results}}
                </div>

            </div>

            <div class="keys">
                <span @click="triangle(1)">sin</span>
                <span @click="triangle(2)">cos</span>
                <span @click="triangle(3)">tan</span>

                <span class="operator" @click="addsymbol(5)">^</span>

                <span @click="addnum(7)">7</span>

                <span @click="addnum(8)">8</span>

                <span @click="addnum(9)">9</span>

                <span class="operator" @click="addsymbol(1)">+</span>

                <span @click="addnum(4)">4</span>

                <span @click="addnum(5)">5</span>

                <span @click="addnum(6)">6</span>

                <span class="operator" @click="addsymbol(2)">-</span>

                <span @click="addnum(1)">1</span>

                <span @click="addnum(2)">2</span>
                <span @click="addnum(3)">3</span>
                <span class="operator" @click="addsymbol(4)">/</span>
                <span @click="addnum(0)">0</span>
                <span @click="addpoint()">.</span>
                <span class="eval" @click="eval()">=</span>
                <span class="operator" @click="addsymbol(3)">x</span>
            </div>
        </div>
    </div>

</div>

</template>
<script>
export default {
  data(){
           return { height1: '10',
            width1: '9',
              results: 0,
            newnum: 0,
            oldnum: 0,
            symbol: 0,
            point: 0,
            show: '',
           }
        },
       computed: {
            area: {
                get: function() {
                    console.log("get!!!   ");
                    return this.height1 * this.width1;
                },
                set: function(newVal) {
                    console.log("set!!!     ");
                    var elem = newVal.split('');
                    this.height1 = elem[0];
                    this.width1 = elem[1];
                }
            }
        },
        methods: {
           
             addnum: function(num) {
                this.show = '';
                if (this.point) {
                    this.newnum = this.newnum + num * Math.pow(0.1, this.point);
                    this.results = this.newnum;
                    this.point += 1;
                } else {
                    this.newnum = this.newnum * 10 + num;
                    this.results = this.newnum;
                }
            },
            addpoint: function() {
                this.show = '.';
                this.point = 1;
            },
            addsymbol: function(symbol) {
                if (this.newnum !== 0 && this.oldnum != 0) { // 连续按符号
                    switch (this.symbol) {
                        case 1:
                            this.results = this.oldnum + this.newnum;
                            this.oldnum = this.results;
                            this.newnum = 0;
                            break;
                        case 2:
                            this.results = this.oldnum - this.newnum;
                            this.oldnum = this.results;
                            this.newnum = 0;

                            break;
                        case 3:
                            this.results = this.oldnum * this.newnum;
                            this.oldnum = this.results;
                            this.newnum = 0;
                            break;
                        case 4:
                            if (this.newnum == 0) {
                                this.results = "false";
                            }
                            this.results = this.oldnum / this.newnum;
                            this.oldnum = this.results;
                            this.newnum = 0;
                            break;
                        case 5:
                            this.results = Math.pow(this.oldnum, this.newnum);
                            this.oldnum = this.results;
                            this.newnum = 0;
                            break;
                    }
                }
                switch (symbol) {
                    case 1:
                        this.show = '+';
                        break;
                    case 2:
                        this.show = '-';
                        break;
                    case 3:
                        this.show = 'x';
                        break;
                    case 4:
                        this.show = '/';
                        break;
                    case 5:
                        this.show = '^';
                        break;

                }
                if (this.newnum !== 0) { // 算出结果后直接按符号
                    this.oldnum = this.newnum;
                }
                this.newnum = 0;
                this.point = 0;
                this.symbol = symbol;
            },
            eval: function() {
                switch (this.symbol) {
                    case 1:
                        this.results = this.oldnum + this.newnum;
                        this.oldnum = this.results;
                        this.newnum = 0;
                        break;
                    case 2:
                        this.results = this.oldnum - this.newnum;
                        this.oldnum = this.results;
                        this.newnum = 0;
                        break;
                    case 3:
                        this.results = this.oldnum * this.newnum;
                        this.oldnum = this.results;
                        this.newnum = 0;
                        break;
                    case 4:
                        if (this.newnum == 0) {
                            this.results = "false";
                        }
                        this.results = this.oldnum / this.newnum;
                        this.oldnum = this.results;
                        this.newnum = 0;
                        break;
                    case 5:
                        this.results = Math.pow(this.oldnum, this.newnum);
                        this.oldnum = this.results;
                        this.newnum = 0;
                        break;
                }
            },
            triangle: function(type) {
                switch (type) {
                    case 1:
                        this.newnum = Math.sin(this.newnum);
                        this.results = this.newnum;
                    case 2:
                        this.newnum = Math.cos(this.newnum);
                        this.results = this.newnum;
                    case 3:
                        this.newnum = Math.tan(this.newnum);
                        this.results = this.newnum;
                }
            },
            eliminate: function() {
                this.oldnum = 0;
                this.newnum = 0;
                this.point = 0;
                this.results = this.oldnum;
            }
        }
}
</script>
<style lang="scss" scoped>
#xiang{
    background:#eee;
    padding: 30px;
    width: 100%;
    
    text-align: center;
}
    
    #calculator {
        width: 325px;
        height: auto;
        margin: 100px auto;
        padding: 20px 20px 9px;
        background: #9dd2ea;
        background: linear-gradient(#9dd2ea, #8bceec);
        border-radius: 3px;
        box-shadow: 0px 4px #009de4, 0px 10px 15px rgba(0, 0, 0, 0.2);
    }
    
    .top span.clear {
        float: left;
    }
    
    .top .screen {
        height: 40px;
        width: 212px;
        float: right;
        padding: 0 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);
        font-size: 17px;
        line-height: 40px;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        text-align: right;
        letter-spacing: 1px;
    }
    
    .keys,
    .top {
        overflow: hidden;
    }
    
    .keys span,
    .top span.clear {
        float: left;
        position: relative;
        top: 0;
        cursor: pointer;
        width: 66px;
        height: 36px;
        background: white;
        border-radius: 3px;
        box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
        margin: 0 7px 11px 0;
        color: #888;
        line-height: 36px;
        text-align: center;
        user-select: none;
        transition: all 0.2s ease;
    }
    
    .span2 {
        float: left;
        position: relative;
        top: 0;
        cursor: pointer;
        width: 66px;
        height: 36px;
        background: #FFF0F5;
        border-radius: 3px;
        box-shadow: 0px 4px rgba(0, 0, 0, 0.2);
        margin: 0 7px 11px 0;
        color: #888;
        line-height: 36px;
        text-align: center;
        user-select: none;
        transition: all 0.2s ease;
    }
    
    .keys span.operator {
        background: #FFF0F5;
        margin-right: 0;
    }
    
    .keys span.eval {
        background: #f1ff92;
        box-shadow: 0px 4px #9da853;
        color: #888e5f;
    }
    
    .top span.clear {
        background: #ff9fa8;
        box-shadow: 0px 4px #ff7c87;
        color: white;
    }
    
    .keys span:hover {
        background: #9c89f6;
        box-shadow: 0px 4px #6b54d3;
        color: white;
    }
    
    .keys span.eval:hover {
        background: #abb850;
        box-shadow: 0px 4px #717a33;
        color: #ffffff;
    }
    
    .top span.clear:hover {
        background: #f68991;
        box-shadow: 0px 4px #d3545d;
        color: white;
    }
    
    .keys span:active {
        box-shadow: 0px 0px #6b54d3;
        top: 4px;
    }
    
    .keys span.eval:active {
        box-shadow: 0px 0px #717a33;
        top: 4px;
    }
    
    .top span.clear:active {
        top: 4px;
        box-shadow: 0px 0px #d3545d;
    }
    
    .screen p {
        float: left;
        font-size: 17px;
        line-height: 40px;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        text-align: right;
        letter-spacing: 1px;
    }
</style>
