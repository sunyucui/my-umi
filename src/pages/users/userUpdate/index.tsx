import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  PageHeader,
  message,
  Space,
} from 'antd';
const { TextArea } = Input;
import React, { useCallback, useEffect, useState } from 'react';
import { updateUser, getUserById } from '../service';
import { history, useParams } from 'umi';
const { Option } = Select;
import moment from 'moment';

export default () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  useEffect(() => {
    // fillForm()
    getUserById(id).then(({ data }) => {
      form.setFieldsValue({
        ...data[0],
        birthday: moment(data[0].birthday),
      });
    });
  }, []);

  const onFinish = (values: any) => {
    // 提交
    values.birthday = values.birthday.format('YYYY-MM-DD');
    values.id = id;
    console.log(values);
    updateUser(values).then(message.success('修改成功'));
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        onBack={() => history.push('/userList')}
        title="修改"
        subTitle="修改一条用户信息"
      />
      <Form
        form={form}
        onFinish={onFinish}
        style={{ margin: '30px auto', height: '100%', width: '500px' }}
      >
        <Form.Item name="username" label="姓名" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="dept" label="部门" rules={[{ required: true }]}>
          <Select placeholder="请选择部门" allowClear>
            <Option value="研发中心/业务支持中心/TI">
              研发中心/业务支持中心/TI
            </Option>
            <Option value="研发中心/商业技术中心/营销云技术部/泛企微">
              研发中心/商业技术中心/营销云技术部/泛企微
            </Option>
            <Option value="研发中心/质量保障部">研发中心/质量保障部</Option>
          </Select>
        </Form.Item>
        <Form.Item name="sex" label="性别" rules={[{ required: true }]}>
          <Select placeholder="请选择性别" allowClear>
            <Option value={0}>男</Option>
            <Option value={1}>女</Option>
          </Select>
        </Form.Item>
        <Form.Item name="age" label="年龄" rules={[{ required: true }]}>
          <InputNumber max={100} min={1} />
        </Form.Item>
        <Form.Item
          name="birthday"
          label="出生日期"
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item name="remark" label="备注" rules={[{ required: true }]}>
          <TextArea rows={3} />
        </Form.Item>

        <Form.Item style={{ textAlign: 'center' }}>
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: 10 }}
            >
              确定
            </Button>
            <Button
              onClick={() => history.push('/userList')}
              style={{ marginRight: 10 }}
            >
              取消
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginRight: 10 }}
            >
              重置
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
