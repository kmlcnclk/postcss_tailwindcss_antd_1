import React from 'react';
import { Button, Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function LoginComponent() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      name="login"
      onFinish={onFinish}
      autoComplete="off"
      className="h-fit !p-7 bg-gray-100 rounded-xl shadow-xl"
    >
      <Typography.Title level={3} className="text-center">
        Login
      </Typography.Title>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter an Email!',
          },
          {
            type: 'email',
            message: 'This is not an Email!',
          },
        ]}
      >
        <Input
          placeholder="Email"
          prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter a Password!',
          },
        ]}
      >
        <Input.Password
          placeholder="Password"
          prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
          type="email"
        />
      </Form.Item>
      <Form.Item className="!mb-0">
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginComponent;
