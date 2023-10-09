import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Space, Tag, Form, Modal, message } from 'antd';
import { useRef, useState } from 'react';
import { BaseForm } from './@config/userForm';
import { columns } from './@config/userTable';
import type { UserIssueItem } from './service';
import { getUserList, addUser } from './service';
import { history } from 'umi';

export default () => {
  const actionRef = useRef<ActionType>();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const adduser = async (values: any) => {
    values.birthday = values.birthday.format('YYYY-MM-DD');
    console.log(values);
    addUser(values).then(message.success('创建成功'));
    setOpen(false);
  };
  const onFill = () => {
    form.setFieldsValue({
      username: 'sunyucui',
      dept: '研发中心/业务支持中心/TI',
      sex: 1,
      age: 25,
      remark: 'something',
    });
  };

  return (
    <>
      <ProTable<UserIssueItem>
        headerTitle="用户列表"
        columns={columns}
        actionRef={actionRef}
        request={getUserList}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        dateFormatter="string"
        toolBarRender={() => [
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => history.push('/userAdd')}
            // onClick={() => setOpen(true)}
          >
            新建
          </Button>,
        ]}
      />
      <Modal
        open={open}
        title="创建用户"
        onOk={adduser}
        onCancel={() => setOpen(false)}
        destroyOnClose={true}
        footer={[
          <Button type="primary" onClick={addUser}>
            确定
          </Button>,
          <Button htmlType="button" onClick={() => form.resetFields()}>
            重置
          </Button>,
          <Button
            onClick={() => {
              setOpen(false);
            }}
          >
            取消
          </Button>,
          <Button type="link" htmlType="button" onClick={onFill}>
            填充
          </Button>,
        ]}
      >
        <BaseForm form={form} onFinish={adduser} style={{ width: '100%' }} />
      </Modal>
    </>
  );
};
