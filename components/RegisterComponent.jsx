import React from 'react';
import { Form, Input, Typography, Button, DatePicker } from 'antd/lib';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';

function RegisterComponent() {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
      onFinish={onFinish}
      name="register"
      className="!p-7 bg-gray-100 h-fit shadow-xl rounded-xl"
    >
      <Typography.Title className="text-center !mb-5" level={3}>
        Register
      </Typography.Title>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please enter a Username!',
          },
        ]}
      >
        <Input
          placeholder="Username"
          type="text"
          prefix={<UserOutlined style={{ color: '#bfbfbf' }} />}
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please enter an Email!',
          },
          { type: 'email', message: 'This is not an Email' },
        ]}
      >
        <Input
          placeholder="Email"
          type="email"
          prefix={<MailOutlined style={{ color: '#bfbfbf' }} />}
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
        hasFeedback
      >
        <Input.Password
          placeholder="Password"
          type="password"
          prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your Password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value)
                return Promise.resolve();
              return Promise.reject(
                new Error('The two password have to equal')
              );
            },
          }),
        ]}
      >
        <Input.Password
          placeholder="Confirm Password"
          type="password"
          prefix={<LockOutlined style={{ color: '#bfbfbf' }} />}
        />
      </Form.Item>
      <Form.Item
        name="birthDate"
        rules={[
          {
            required: true,
            message: 'Please choose your birth date',
          },
        ]}
      >
        <DatePicker className="!w-full" format="DD-MM-YYYY" />
      </Form.Item>
      <Form.Item className="!mb-0">
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegisterComponent;
