import style from './index.less';
import { history } from 'umi';
import dayjs from 'dayjs';
import { Button, message } from 'antd';

export default () => {
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <div className={style.header}>
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      <p className={style.content}>less 练习</p>
      <p className={style.main}>this is main </p>
      <p className={style.main}></p>
    </div>
  );
};
