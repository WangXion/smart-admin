import BasicLayout from '@/layouts/basic-layout';
import news from '../../pages/list/card-list/news/news'

const meta = {
    auth: true
};

const pre = 'list-';

export default {
    path: '/list',
    name: 'list',
    redirect: {
        name: `${pre}basic-list`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'goods-list',
            name: `${pre}goods-list`,
            meta: {
                ...meta,
                title: '添加'
            },
            component: () => import('@/pages/list/goods-list')
        },
        {
            path: 'basic-list',
            name: `${pre}basic-list`,
            meta: {
                ...meta,
                title: '正常法规类型'
            },
            component: () => import('@/pages/list/basic-list')
        },
        {
            path: 'card-list',
            name: `${pre}card-list`,
            meta: {
                ...meta,
                title: '政策法规'
            },
            component: () => import('@/pages/list/card-list'),
        },
        // {
        //     path: 'user-list',
        //     name: `${pre}user-list`,
        //     meta: {
        //         ...meta,
        //         title: '用户列表'
        //     },
        //     component: () => import('@/pages/list/user-list')
        // },

    ]
};
