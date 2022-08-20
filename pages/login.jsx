import React from 'react';
import { Layout } from 'antd';
import LoginComponent from '../components/LoginComponent';

function Login() {
  return (
    <Layout>
      <Layout.Content className="flex justify-center items-center h-screen">
        <LoginComponent />
      </Layout.Content>
    </Layout>
  );
}

export default Login;
