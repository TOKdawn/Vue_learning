// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于' + new Data().toLocaleString()
    }
})