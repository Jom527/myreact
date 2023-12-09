import { Avatar, Space } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import {
  ProfileOutlined,
  UserOutlined,
  DashboardOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import "./style.css";

export default function HeaderComponent() {
  return (
    <>
      <div className="header p-1 ">
        <div className="profile">
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Space wrap size={11}>
                  <Avatar size={35} icon={<UserOutlined />} />
                </Space>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/profile" className="profile-item"><ProfileOutlined className="item" />Profile</Dropdown.Item>
                <Dropdown.Item href="#/dashboard" className="profile-item"><DashboardOutlined className="item"/>Dashboard</Dropdown.Item>
                <Dropdown.Item href="#/settings" className="profile-item"><SettingOutlined className="item"/>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/logout"  className="bg-danger text-light"><LogoutOutlined className="item"/>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
}
