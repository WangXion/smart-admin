const pre = '/home/';

export default {
    path: '/home',
    title: '基础信息',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-dashboard',
    children: [
        {
            path: `${pre}console`,
            title: '系统首页'
        },
        {
            path: `${pre}monitor`,
            title: '系统消息'
        },
        {
            path: `${pre}workplace`,
            title: '常见问题'
        },
        {
            path: `${pre}advanced-form`,
            title: '个人信息'
        },
    ]
}
