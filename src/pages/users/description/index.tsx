import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  PageHeader,
  message,
  Descriptions,
} from 'antd';
const { TextArea } = Input;
import React, { useEffect, useState } from 'react';
import { addUser } from '../service';
import { history, useParams } from 'umi';
const { Option } = Select;
import moment from 'moment';
import { getUserById } from '../service';

export default () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const [userinfo, setUserinfo] = useState({});

  useEffect(() => {
    // fillForm()
    getUserById(id).then(({ data }) => {
      setUserinfo(data[0]);
    });
  }, []);
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
  const UserDesc = () => {
    let descItem = [];
    for (let item in userinfo) {
      if (item !== 'id') {
        descItem.push(
          <Descriptions.Item label={item}>{userinfo[item]}</Descriptions.Item>,
        );
      }
    }
    return (
      <Descriptions size="small" column={2}>
        {descItem}
      </Descriptions>
    );
  };

  return (
    <>
      <div style={{ padding: '24px', backgroundColor: '#f5f5f5' }}>
        <PageHeader
          ghost={false}
          onBack={() => history.push('/userList')}
          title="用户详情"
        >
          <UserDesc />
        </PageHeader>
      </div>
    </>
  );
};
