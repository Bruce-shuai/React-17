// 专门用一个组件来实现 表单注册
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../redux/user/slice';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../redux/hooks';
import { useEffect } from 'react';

export const SignInForm = () => {

  const loading = useSelector(s => s.user.loading);
  const jwt = useSelector(s => s.user.token);
  const error = useSelector(s => s.user.error);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (jwt !== null) {
      history.push('/');
    }
  }, [jwt])

  const onFinish = (values: any) => {
    dispatch(signIn({
      email: values.username,
      password: values.password
    }))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        {/* antd 中的Button有个loading功能 小转菊花 */}
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};