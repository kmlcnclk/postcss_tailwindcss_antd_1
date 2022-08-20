import React from 'react';
import { Layout } from 'antd/lib';
import RegisterComponent from '../components/RegisterComponent';

function Register() {
  return (
    <Layout>
      <Layout.Content className="h-screen flex justify-center items-center">
        <RegisterComponent />
      </Layout.Content>
    </Layout>
  );
}

export default Register;
