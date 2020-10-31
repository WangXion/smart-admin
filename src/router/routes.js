import home from './modules/home';
import dashboard from './modules/dashboard';
import form from './modules/form';
import list from './modules/list';
import record from './modules/record';
import search from './modules/search';
import tool from './modules/tool';
import user from './modules/user';
import xianq from '../pages/form/advanced-form/xianq/xianq';
import basic from '../pages/profile/basic/index';
import news from '../pages/list/card-list/news/news';
import dels from '../pages/search/search-article/dels/index';
import BasicLayout from '@/layouts/basic-layout';

/**
 * 在主框架内显示
 */const meta = {
    auth: true
};

const frameIn = [
    {
        path: '/',
        redirect: {
            name: 'home-console'
        },
        component: BasicLayout,
        children: [
            
            {
                path: 'index',
                name: 'index',
                redirect: {
                    name: 'home-console'
                }
            },
            {
                path:'/xianq',
                name:'xianq',
                component: xianq,
                meta: {
                    ...meta,
                    title: '认证详情'
                },
            },
            {
                path:'/news',
                name:'news',
                component: news,
                meta: {
                    ...meta,
                    title: '新闻详情'
                },
            },
            {
                path:'/basic',
                name:'basic',
                component: basic,
                meta: {
                    ...meta,
                    title: '档案案卷详情'
                },
            },
            {
                path:'/dels',
                name:'dels',
                component: dels,
                meta: {
                    ...meta,
                    title: '积分待审核详情'
                },
            },


            {
                path: 'log',
                name: 'log',
                meta: {
                    title: '前端日志',
                    auth: true
                },
                component: () => import('@/pages/system/log')
            },
            // 刷新页面 必须保留
            {
                path: 'refresh',
                name: 'refresh',
                hidden: true,
                component: {
                    beforeRouteEnter (to, from, next) {
                        next(instance => instance.$router.replace(from.fullPath));
                    },
                    render: h => h()
                }
            },
            // 页面重定向 必须保留
            {
                path: 'redirect/:route*',
                name: 'redirect',
                hidden: true,
                component: {
                    beforeRouteEnter (to, from, next) {
                        next(instance => instance.$router.replace(JSON.parse(from.params.route)));
                    },
                    render: h => h()
                }
            },
            {
                path: 'i18n',
                name: 'i18n',
                meta: {
                    title: '$t:menu.i18n',
                    auth: true
                },
                component: () => import('@/pages/i18n')
            }
        ]
    },
    home,
    dashboard,
    form,
    list,
    record,
    search,
    user,
    tool
  
];

/**
 * 在主框架之外显示
 */

const frameOut = [
    // 登录
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '$t:page.login.title'
        },
        component: () => import('@/pages/account/login')
    },
    // 注册
    {
        path: '/register',
        name: 'register',
        meta: {
            title: '$t:page.register.title'
        },
        component: () => import('@/pages/account/register')
    },
    // 注册结果
    {
        path: '/register/result',
        name: 'register-result',
        meta: {
            auth: true,
            title: '注册结果'
        },
        component: () => import('@/pages/account/register/result')
    }
];

/**
 * 错误页面
 */

const errorPage = [
    {
        path: '/403',
        name: '403',
        meta: {
            title: '403'
        },
        component: () => import('@/pages/system/error/403')
    },
    {
        path: '/500',
        name: '500',
        meta: {
            title: '500'
        },
        component: () => import('@/pages/system/error/500')
    },
    {
        path: '*',
        name: '404',
        meta: {
            title: '404'
        },
        component: () => import('@/pages/system/error/404')
    }
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut,
    ...errorPage
];
