import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'home-';

export default {
    path: '/home',
    name: 'home',
    redirect: {
        name: `${pre}console`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'console',
            name: `${pre}console`,
            meta: {
                ...meta,
                title: '系统首页',
                closable: false
            },
            component: () => import('@/pages/home/console')
        },
        {
            path: 'monitor',
            name: `${pre}monitor`,
            meta: {
                ...meta,
                title: '系统消息'
            },
            component: () => import('@/pages/home/monitor')
        },
        {
            path: 'workplace',
            name: `${pre}workplace`,
            meta: {
                ...meta,
                title: '常见问题'
            },
            component: () => import('@/pages/home/workplace')
        },
        {
            path: 'advanced-form',
            name: `${pre}workpadvanced-formlace`,
            meta: {
                ...meta,
                title: '个人信息'
            },
            component: () => import('@/pages/home/advanced-form')
        }
    ]
};
