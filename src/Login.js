import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Card, message } from 'antd';
// const { Title } = Typography;
// import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import loginpage from '../src/Images/loginpage.jpg'

const Login = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: 'error',
      content: 'please enter a login first!!'
    })
  };
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
    navigate("home");
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${loginpage})`,
        backgroundSize: "cover",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          minWidth: "100%",
          minHeight: "100%",
          textAlign: "center",
          display: "-webkit-flex",
          alignItems: "center",
        }}
      >
        <Card
          bordered={true}
          hoverable={true}
          style={{
            margin: "Auto",
            width: "400px",
            backgroundColor: ""
          }}

        >
          <br></br>

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              style={{ color: "black" }}
              label={
                <p
                  style={{
                    fontSize: "20px",
                    color: "black",
                    marginTop: "18px",
                  }}
                >
                  Username
                </p>
              }
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",

                },
              ]}
            >
              <Input size="large" autoFocus />
            </Form.Item>

            <Form.Item
              label={
                <p
                  style={{
                    color: "black",
                    fontSize: "20px",
                    marginTop: "18px",
                  }}
                >
                  Password
                </p>
              }
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password size="large" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              {contextHolder}
              <Button

                type="primary" onClick={info}
                htmlType="submit"
                size="large"


              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>

  )
};
export default Login;











{/* <Form
name="basic"
labelCol={{
  span: 8,
  width:"20px",
}}
wrapperCol={{
  span: 16,
}}
initialValues={{
  remember: true,
}}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"
>
<Form.Item
  label="Username"

  name="username"
  rules={[
    {
      required: true,
      message: 'Please input your username!',
    },
  ]}
>
  <Input />
</Form.Item>

<Form.Item
  label="Password"
  name="password"
  rules={[
    {
      required: true,
      message: 'Please input your password!',
    },
  ]}
>
  <Input.Password />
</Form.Item>

<Form.Item
  name="remember"
  valuePropName="checked"
  wrapperCol={{
    offset: 8,
    span: 16,
  }}
>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item
  wrapperCol={{
    offset: 8,
    span: 16,
  }}
>


  <Button type="primary" htmlType="submit">
    Submit
  </Button>
</Form.Item>
</Form> */}