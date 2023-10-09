import type { UserIssueItem } from '../service';
import type { ProColumns } from '@ant-design/pro-components';
import {
  Button,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Space,
  Popconfirm,
  Modal,
  Form,
  message,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { history } from 'umi';
import { deleteUser } from '../service';
import { BaseForm } from './userForm';

/**
 * table的表头
 * valueType:ProComponents 会根据 valueType 来映射成不同的表单项
 * valueEnum 需要传入一个枚举，ProTable 会自动根据值获取响应的枚举，并且在 form 中生成一个下拉框。
 * ellipsis: true, //超过宽度将自动省略
 */
// const deptList = getDeptList
export const columns: ProColumns<UserIssueItem>[] = [
  {
    dataIndex: 'id',
    valueType: 'index',
    width: 48,
  },
  {
    title: '姓名',
    dataIndex: 'username',
    valueType: 'text',
  },
  {
    title: '部门',
    dataIndex: 'dept',
    valueType: 'select',
    valueEnum: new Map([
      ['研发中心/业务支持中心/TI', '研发中心/业务支持中心/TI'],
      [
        '研发中心/商业技术中心/营销云技术部/泛企微',
        '研发中心/商业技术中心/营销云技术部/泛企微',
      ],
      ['研发中心/质量保障部', '研发中心/质量保障部'],
    ]),
  },
  {
    title: '性别',
    dataIndex: 'sex',
    valueType: 'select',
    valueEnum: new Map([
      [0, '男'],
      [1, '女'],
    ]),
  },
  {
    title: '年龄',
    dataIndex: 'age',
    valueType: 'digit',
    formItemProps: {
      rules: [
        {
          min: 1,
          max: 100,
        },
      ],
    },
  },
  {
    title: '出生年月',
    dataIndex: 'birthday',
    valueType: 'date',
    sorter: true,
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    valueType: 'date',
    sorter: true,
  },
  {
    title: '备注',
    dataIndex: 'remark',
    ellipsis: true,
    valueType: 'textarea',
    fieldProps: { row: 2 },
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <Button
        size="small"
        onClick={() => {
          history.push(`/userUpdate/${record.id}`);
        }}
      >
        编辑
      </Button>,
      <Button
        size="small"
        onClick={() => {
          history.push(`/userDesc/${record.id}`);
        }}
      >
        查看
      </Button>,
      <Popconfirm
        title="确定要删除该用户吗?"
        onConfirm={() => {
          deleteUser(record.id);
          action?.reload();
        }}
        okText="Yes"
        cancelText="No"
      >
        <Button size="small" danger>
          删除
        </Button>
      </Popconfirm>,
      // <Button
      //     size="small"
      //     onClick={() => { history.push(`/userUpdate/${record.id}`) }}
      // >
      //     编辑
      // </Button>,
      // <Button
      //     size="small"
      //     onClick={() => { history.push(`/userDesc/${record.id}`) }}>
      //     查看
      // </Button>,
      // <Popconfirm
      //     title="确定要删除该用户吗?"
      //     onConfirm={() => { deleteUser(record.id); action?.reload() }}
      //     okText="Yes"
      //     cancelText="No"
      // >
      //     <Button size="small" danger>删除</Button>
      // </Popconfirm>
    ],
  },
];

// const UpdateModal = () => {
//     const [open, setOpen] = useState(false);
//     const [form] = Form.useForm();

//     const updateuser = () => {

//     }
//     return (
//         <Modal
//             open={open}
//             title="修改信息"
//             onOk={updateuser}
//             onCancel={() => setOpen(false)}
//             footer={[]}>
//             <BaseForm form={form} onFinish={updateuser} style={{width:'100%'}}/>

//         </Modal >
//     )
// }
// const DescModel = () => {
//     const [open, setOpen] = useState(false);
//     return (
//         <Modal
//             open={open}
//             title="用户详情"
//             onOk={() => setOpen(false)}
//             onCancel={() => setOpen(false)}
//             footer={[]}>
//             <BaseForm />
//         </Modal >
//     )
// }
