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
import React from 'react';
import { addUser } from '../service';
import { history } from 'umi';
const { Option } = Select;

export default () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // 提交
    values.birthday = values.birthday.format('YYYY-MM-DD');
    console.log(values);
    addUser(values).then(message.success('创建成功'));
  };

  const onReset = () => {
    form.resetFields();
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
      <PageHeader
        className="site-page-header"
        onBack={() => history.push('/userList')}
        title="新建用户"
        subTitle="添加一条用户信息"
      />
      <Form
        form={form}
        name="control-hooks"
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
            <Button type="primary" htmlType="submit">
              确定
            </Button>
            <Button htmlType="button" onClick={onReset}>
              重置
            </Button>

            <Button onClick={() => history.push('/userList')}>取消</Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              填充
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};
