# umi学习

## 配置
- .umirc.ts配置项目和插件
- 比较复杂的，将配置写在 `config/config.ts `中，并把配置的一部分拆分出去，
比如路由配置可以拆分成单独的 `routes.ts`
- .umirc.ts 优先级更高 
## 运行时配置
- 约定 src/app.tsx 为运行时配置
## 路由
```js
routes: [
    { exact: true, path: '/', component: 'index' },
    { 
        exact: true, 
        path: '/user',
        component: 'user',
        // routes嵌套子路由,通过 props.children 渲染子路由
        routes: [
        { path: '/list', component: 'list' },
        { path: '/admin', component: 'admin' },
        // wrappers配置路由的高阶组件封装（可自定义） 可用于鉴权 @是src的别名，
        wrappers: [
        '@/wrappers/auth',
        ],
      ],
     },
    //  redirect重定向
     { exact: true, path: '/', redirect: '/list' },
  ],
```
- 路由组件可通过 props 获取到属性 match location history route routes
- component 相对路径，会从 src/pages 开始找起
- React.cloneElement(child, { foo: 'bar' }); 传递参数给子路由
## 约定式路由
- 如果没有 routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置
## Html默认模板
- src/pages/document.ejs
## Mock
- 模拟请求api
```ts
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
}
```
- 引入 Mock.js
```ts
import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
```
## 
```bash
yarn create @umijs/umi-app #安装
yarn #安装依赖
yarn start #运行
yarn build #构建
```