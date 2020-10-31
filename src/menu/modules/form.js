const pre = '/form/';

export default {
    path: '/form',
    title: '配置信息',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-form',
    children: [
        {
            path: `${pre}basic-list`,
            title: '组织架构'
        },
        {
            path: `${pre}basic-form`,
            title: '档案类型'
        },
        {
            path: `${pre}advanced-form`,
            title: '档案类型-模版'
        },
        {
            path: `${pre}basic-level`,
            title: '密级等级'
        },
        {
            path: `${pre}basic-jibie`,
            title: '级别'
        },
        {
            path: `${pre}basic-limit`,
            title: '保管期限'
        },
        {
            path: `${pre}basic-label`,
            title: '项目标签'
        },
        // {
        //     path: `${pre}step-form`,
        //     title: '分步表单'
        // },
        {
            path: `${pre}basic-cabinet`,
            title: '档案柜/盒'
        },
        // {
        //     path: `${pre}xianq/xianq`,
        //     title: '认证详情'
        // },
    ]
}
