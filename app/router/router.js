import App from '../../App'



const index = resolve => require.ensure([], () => resolve(require('../vue/pages/index/index')), 'index')
const Login = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Login')), 'Login')
const Register = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Register')), 'Register')
const Bookdetail = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Bookdetail')), 'Bookdetail')
const Booklist = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Booklist')), 'Booklist')
const Bookcase = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Bookcase')), 'Bookcase')
const Reading = resolve => require.ensure([], () => resolve(require('../vue/pages/index/Reading')), 'Reading')
// const detail = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/detail')), 'detail')
// const overView = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/overView/overView')), 'overView')
// const Detailinstall = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/install/install')), 'Detailinstall')
// const Detailconfig = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/config/config')), 'Detailconfig')
// const Detailrun = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/run/run')), 'Detailrun')
// const Detailmenu = resolve => require.ensure([], () => resolve(require('../vue/pages/detail/menu/menu')), 'Detailmenu')


export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/index',
            component: index
        },
        //搜索页 
        {
            path: '/login',
            name: 'login',
            component: Login    
        },
        {
            path: '/register',
            component: Register    
        },
        {
            path: '/bookdetail',
            component: Bookdetail    
        },  
        {
            path: '/booklist',
            component: Booklist    
        },
        {
            path: '/bookcase',
            component: Bookcase    
        },
        {
            path: '/reading',
            component: Reading    
        }

    ]
}]