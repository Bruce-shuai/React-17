// 专门用一个组件来实现 表单注册
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
export const RegisterForm = () => {

  const history = useHistory();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    // try {
        await axios.post("http://123.56.149.216:8080/auth/register", {         
          email: values.username,  // 来自antd Form组件的username
          password: values.password,
          // 血亏，写错一个单词，直接找半天bug
          confirmPassword: values.confirm,
        });
      console.log('---------');
      
      history.push('/signIn/');   // 直接跳转到登录 
    
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

      {/* 密码确认功能  挺有意思的 直接使用antd 的模板*/}
      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};