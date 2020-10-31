const pre = '/search/';

export default {
    path: '/search',
    title: '库房管理',
    header: 'home',
    custom: 'i-icon-demo i-icon-demo-search',
    children: [
        {
            path: `${pre}table-list`,
            title: '查询记录'
        },
        {
            path: `${pre}search-article`,
            title: '借阅登记'
        },
        {
            path: `${pre}search-apps`,
            title: '其他'
        },

        {
            path: `${pre}basic-list`,
            title: '其他'
        },
        {
            path: `${pre}basic-chang`,
            title: '其他'
        },
        {
            path: `${pre}table-duihuan`,
            title: '其他'
        },
        {
            path: `${pre}search-projects`,
            title: '其他'
        },

    ]
}
