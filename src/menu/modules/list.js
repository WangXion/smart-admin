const pre = '/list/';

export default {
    path: '/list',
    title: '政策法规',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-list',
    children: [
        {
            path: `${pre}goods-list`,
            title: '添加'
        },
        {
            path: `${pre}basic-list`,
            title: '正常法规类型'
        },
        {
            path: `${pre}card-list`,
            title: '政策法规'
        },
        // {
        //     path: `${pre}user-list`,
        //     title: '用户列表'
        // },
    ]
}
