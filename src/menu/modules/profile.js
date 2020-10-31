const pre = '/profile/';

export default {
    path: '/profile',
    title: '档案详情',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-profile',
    children: [
        {
            path: `${pre}basic`,
            title: '档案案卷详情'
        },
        {
            path: `${pre}advanced`,
            title: '高级详情页'
        }
    ]
}
