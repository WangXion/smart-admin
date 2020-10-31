const pre = '/user/';

export default {
    path: '/user',
    title: '个人主页',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-list',
    children: [
        {
            path: `${pre}basic-list`,
            title: '查询档案'
        },
        {
            path: `${pre}card-list`,
            title: '基本信息'
        },
        // {
        //     path: `${pre}user-list`,
        //     title: '用户列表'
        // },
    ]
}
