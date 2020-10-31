import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'form-';

export default {
    path: '/form',
    name: 'form',
    redirect: {
        name: `${pre}basic-form`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic-list',
            name: `${pre}basic-list`,
            meta: {
                ...meta,
                title: '组织架构'
            },
            component: () => import('@/pages/form/basic-list')
        },
        {
            path: 'basic-form',
            name: `${pre}basic-form`,
            meta: {
                ...meta,
                title: '档案类型'
            },
            component: () => import('@/pages/form/basic-form')
        },
        {
            path: 'xianq',
            name: 'xianq',
            meta: {
                ...meta,
                title: '详情'
            },
            component: () => import('@/pages/form/advanced-form/xianq/xianq')
        },
        {
            path: 'advanced-form',
            name: `${pre}advanced-form`,
            meta: {
                ...meta,
                title: '档案类型-模版'
            },
            component: () => import('@/pages/form/advanced-form')
        },
        {
            path: 'basic-level',
            name: `${pre}basic-level`,
            meta: {
                ...meta,
                title: '密级等级'
            },
            component: () => import('@/pages/form/basic-level')
        },
        {
            path: 'basic-jibie',
            name: `${pre}basic-jibie`,
            meta: {
                ...meta,
                title: '级别'
            },
            component: () => import('@/pages/form/basic-jibie')
        },
        {
            path: 'basic-limit',
            name: `${pre}basic-limit`,
            meta: {
                ...meta,
                title: '保管期限'
            },
            component: () => import('@/pages/form/basic-limit')
        },
        {
            path: 'basic-label',
            name: `${pre}basic-label`,
            meta: {
                ...meta,
                title: '项目标签'
            },
            component: () => import('@/pages/form/basic-label')
        },
        // {
        //     path: 'step-form',
        //     name: `${pre}step-form`,
        //     meta: {
        //         ...meta,
        //         title: '分步表单'
        //     },
        //     component: () => import('@/pages/form/step-form')
        // },
        {
            path: 'basic-cabinet',
            name: `${pre}basic-cabinet`,
            meta: {
                ...meta,
                title: '档案柜/盒'
            },
            component: () => import('@/pages/form/basic-cabinet')
        },
        
    ]
};
