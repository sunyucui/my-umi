import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  // 布局配置
  layout: {
    name: '用户管理',
    Layout: 'side',
    contentWidth: 'Fluid',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  // 路由和菜单设置
  routes: routes,
  // 反向代理解决跨域
  proxy: {
    '/api': {
      tartget: '',
      changeOrigin: true, //允许域名进行转换
      pathRewrite: { '^/api': '' }, //将请求url里的api去掉
    },
  },
  // 快速刷新
  fastRefresh: {},
});
