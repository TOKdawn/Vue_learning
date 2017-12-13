import App from '../App.vue'
export default [{
    path: '/',
    redirect: '/b',
    component: App,
    children: [{
        path: '/b',
        component: r => require.ensure([], () => r(require('../components/home/home.vue')), 'home'),
        redirect: '/b/basic',
        children: [{
            path: 'fenli',
            component: r => require.ensure([], () => (require('../components/fenli/fenli.vue')), 'fenli')

        }, {
            path: 'xiangyingshi',
            component: r => require.ensure([], () => (require('../components/xiangyingshi/xiangyingshi.vue')), 'xiangyingshi')
        }, {
            path: 'gongchenghua',
            component: r => require.ensure([], () => (require('../components/gongchenghua/gongchenghua.vue')), 'gongchenghua')
        }, {
            path: 'fenli',
            component: r => require.ensure([], () => (require('../components/fenli/fenli.vue')), 'fenli')
        }, {
            path: 'luyou',
            component: r => require.ensure([], () => (require('../components/luyou/luyou.vue')), 'luyou')
        }, {
            path: 'zujianhua',
            component: r => require.ensure([], () => (require('../components/zujianhua/zujianhua.vue')), 'zujianhua')
        }, {
            path: 'mokuaihua',
            component: r => require.ensure([], () => (require('../components/mokuaihua/mokuaihua.vue')), 'mokuaihua')
        }, {
            path: 'basic',
            component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
        }]
    }]
}]