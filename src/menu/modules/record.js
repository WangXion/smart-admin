const pre = '/record/';

export default {
    path: '/record',
    title: '档案管理',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-form',
    children: [
        {
            path: `${pre}advanced-form`,
            title: '档案添加'
        },
        {
            path: `${pre}Check`,
            title: '档案校验'
        },
        {
            path: `${pre}detail`,
            title: '入档审批'
        },
        {
            path: `${pre}file-year`,
            title: '年度档案'
        },
        {
            path: `${pre}file-month`,
            title: '月度档案'
        },
        {
            path: `${pre}project`,
            title: '项目档案'
        },
        {
            path: `${pre}personnel`,
            title: '人事档案'
        },
        {
            path: `${pre}contract`,
            title: '合同档案'
        },
        {
            path: `${pre}file-list`,
            title: '档案列表'
        },
        {
            path: `${pre}equipment`,
            title: '设备档案'
        },
        {
            path: `${pre}other`,
            title: '其他类型'
        },
        {
            path: `${pre}transfer`,
            title: '档案移交'
        },
        {
            path: `${pre}destruction`,
            title: '档案销毁'
        },
        {
            path: `${pre}authenticate`,
            title: '档案鉴定'
        },
        // {
        //     path: `${pre}step-form`,
        //     title: '分步表单'
        // },
        // {
        //     path: `${pre}detail`,
        //     title: '表单详情'
        // }
    ]
}
