export default [
  {
    path: '/',
    // component: 'index',
    name: '管理面板',
    routes: [
      {
        name: '用户列表',
        path: '/userList',
        component: '@/pages/users',
        icon: 'user',
        exact: true,
      },
      {
        name: 'Less练习',
        path: '/lessdemo',
        component: '@/pages/demo/less-demo',
        icon: 'user',
        exact: true,
      },
      {
        path: '/userAdd',
        component: '@/pages/users/add',
        exact: true,
      },
      {
        path: '/userUpdate/:id',
        component: '@/pages/users/userUpdate',
        exact: true,
      },
      {
        path: '/userDesc/:id',
        component: '@/pages/users/description',
        exact: true,
      },
    ],
  },
];
