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
const { TextArea } = Input;
const { Option } = Select;

export const BaseForm = ({ form, onFinish, style }) => {
  return (
    <Form form={form} name="baseForm" onFinish={onFinish} style={style}>
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
      <Form.Item name="birthday" label="出生日期" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>
      <Form.Item name="remark" label="备注" rules={[{ required: true }]}>
        <TextArea rows={3} />
      </Form.Item>
    </Form>
  );
};
