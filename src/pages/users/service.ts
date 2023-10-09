import request from 'umi-request';

/**
 * 请求服务
 * 1-获取用户列表--渲染表格-table
 *   request:
 */
// 定义类型
export type UserIssueItem = {
  id: number;
  username: string;
  dept: string;
  sex: number;
  age: number;
  birthday: string;
  createtime: string;
  remark: string;
};
// 请求数据源
export const getUserList = async (
  params: {
    pageSize: number;
    current: number;
  },
  sort: any,
  filter: any,
) => {
  return request<{ data: UserIssueItem[] }>('/api/usersByPage', {
    method: 'get',
    params,
  });
};
// 请求部门类型
export const getDeptList = async () => {
  return request('/api/users/getDeptList', { method: 'get' });
};
// 添加用户
export const addUser = async (values: any) => {
  return request('/api/users/adduser', {
    method: 'post',
    data: values,
    headers: { 'Content-Type': 'application/json' },
  });
};
// 修改用户
export const updateUser = async (values: any) => {
  return request('/api/users/updateUser', {
    method: 'post',
    data: values,
    headers: { 'Content-Type': 'application/json' },
  });
};
// 获取用户信息
export const getUserById = async (values: number) => {
  return request('/api/usersById', { method: 'get', params: { id: values } });
};
// 删除用户
export const deleteUser = async (id: number) => {
  return request('/api/users/deleteUser', {
    method: 'get',
    params: { id: id },
  });
};
