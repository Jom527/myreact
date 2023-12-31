import "./login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
const LoginComponent = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-con">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <b className="label">
      </b>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Username required!",
          },
        ]}
      >
        <Input
        className="username"
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "password required!",
          },
        ]}
      >
        <Input
          className="key"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default LoginComponent;
