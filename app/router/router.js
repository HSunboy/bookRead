import App from '../../App'



const index = resolve => require.ensure([], () => resolve(require('../vue/pages/index/index')), 'index')
const detail = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/detail')), 'detail')
const overView = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/overView/overView')), 'overView')
const Detailinstall = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/install/install')), 'Detailinstall')
const Detailconfig = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/config/config')), 'Detailconfig')
const Detailrun = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/run/run')), 'Detailrun')
const Detailmenu = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/menu/menu')), 'Detailmenu')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/index'
        },
        {
            path: '/index',
            component: index
        },
        //搜索页 
        {
            path: '/detail',
            component: detail,
            children: [{
                path: '',
                redirect: 'overView'
            }, {
                path: 'overView',
                component: overView
            }, {
                path: 'install',
                component: Detailinstall
            }, {
                path: 'run',
                component: Detailrun
            }, {
                path: 'menu',
                component: Detailmenu
            }, {
                path: 'config',
                component: Detailconfig
            }]
        }
        //商铺详情页 
        // {
        //     path: '/shop',
        //     component: shop,
        //     children: [{
        //         path: 'foodDetail', //食品详情页
        //         component: foodDetail,
        //     }, {
        //         path: 'shopDetail', //商铺详情页
        //         component: shopDetail,
        //         children: [{
        //             path: 'shopSafe', //商铺安全认证页
        //             component: shopSafe,
        //         }, ]
        //     }]
        // }




    ]
}]