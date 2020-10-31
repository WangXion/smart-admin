import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'user-';

export default {
    path: '/user',
    name: 'user',
    redirect: {
        name: `${pre}basic-list`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic-list',
            name: `${pre}basic-list`,
            meta: {
                ...meta,
                title: '查询档案'
            },
            component: () => import('@/pages/user/basic-list')
        },
        {
            path: 'card-list',
            name: `${pre}card-list`,
            meta: {
                ...meta,
                title: '基本信息'
            },
            component: () => import('@/pages/user/card-list'),
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
