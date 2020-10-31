import BasicLayout from '@/layouts/basic-layout';

const meta = {
    auth: true
};

const pre = 'record-';

export default {
    path: '/record',
    name: 'record',
    redirect: {
        name: `${pre}basic-form`
    },
    meta,
    component: BasicLayout,
    children: [
        {
            path: 'basic-form',
            name: `${pre}basic-form`,
            meta: {
                ...meta,
                title: '基础表单'
            },
            component: () => import('@/pages/record/basic-form')
        },
        {
            path: 'advanced-form',
            name: `${pre}advanced-form`,
            meta: {
                ...meta,
                title: '高级表单'
            },
            component: () => import('@/pages/record/advanced-form')
        },
        {
            path: 'Check',
            name: `${pre}Check`,
            meta: {
                ...meta,
                title: '档案校验'
            },
            component: () => import('@/pages/record/Check')
        },
        {
            path: 'detail',
            name: `${pre}detail`,
            meta: {
                ...meta,
                title: '表单详情'
            },
            component: () => import('@/pages/record/detail')
        },
       
        {
            path:'file-year',
            name: `${pre}file-year`,
            meta: {
                ...meta,
                title: '年度档案'
            },
            component: () => import('@/pages/record/file-year')
        },
        {
            path:'file-month',
            name: `${pre}file-month`,
            meta: {
                ...meta,
                title: '月度档案'
            },
            component: () => import('@/pages/record/file-month')
        },
        {
            path: 'project',
            name: `${pre}project`,
            meta: {
                ...meta,
                title: '项目档案'
            },
            component: () => import('@/pages/record/project')
        },
        {
            path: 'personnel',
            name: `${pre}personnel`,
            meta: {
                ...meta,
                title: '人事档案'
            },
            component: () => import('@/pages/record/personnel')
        },
        {
            path: 'contract',
            name: `${pre}contract`,
            meta: {
                ...meta,
                title: '合同档案'
            },
            component: () => import('@/pages/record/contract')
        },
        {
            path: 'file-list',
            name: `${pre}file-list`,
            meta: {
                ...meta,
                title: '档案列表'
            },
            component: () => import('@/pages/record/file-list')
        },
        {
            path: 'equipment',
            name: `${pre}equipment`,
            meta: {
                ...meta,
                title: '设备档案'
            },
            component: () => import('@/pages/record/equipment')
        },
        {
            path: 'other',
            name: `${pre}other`,
            meta: {
                ...meta,
                title: '其他类型'
            },
            component: () => import('@/pages/record/other')
        },
        {
            path: 'transfer',
            name: `${pre}transfer`,
            meta: {
                ...meta,
                title: '档案移交'
            },
            component: () => import('@/pages/record/transfer')
        },
        {
            path: 'destruction',
            name: `${pre}destruction`,
            meta: {
                ...meta,
                title: '档案销毁'
            },
            component: () => import('@/pages/record/destruction')
        },
        {
            path: 'authenticate',
            name: `${pre}authenticate`,
            meta: {
                ...meta,
                title: '档案鉴定'
            },
            component: () => import('@/pages/record/authenticate')
        },
    ]
};
