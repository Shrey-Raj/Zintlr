import React from "react";
import {
  UploadOutlined,
  DashboardOutlined,
  BankOutlined,
  TransactionOutlined,
  TeamOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  AppstoreAddOutlined,
  FileAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

import { Layout, Menu, theme } from "antd";

import AppHeader from "./AppHeader";
import MyTable from "./MyTable";
import ContentRow from "./ContentRow";
import LowerSection from "./LowerSection";
import logo from "../img/logo.png";
import logoImg from "../img/logoImg.png";

const AppLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{
          minHeight: "100vh",
          background: "#fff",
        }}
      >
        <div className="flex items-center justify-center h-16 p-3">
          <img
            className="object-cover h-full w-96 "
            src={logoImg}
            alt="Zintlr Logo"
          />
          <span className="font-semibold text-xl text-blue-700 font-serif mr-4">
            Zintlr
          </span>
        </div>

        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<BankOutlined />}>
            Bullion Operations
          </Menu.Item>
          <Menu.Item key="3" icon={<TransactionOutlined />}>
            Transactions
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Your Network
          </Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>
            Consumers
          </Menu.Item>
          <Menu.Item key="6" icon={<AppstoreAddOutlined />}>
            Other Operations
          </Menu.Item>
          <Menu.Item key="7" icon={<FileAddOutlined />}>
            Manage Bank Accounts
          </Menu.Item>
          <Menu.Item key="8" icon={<QuestionCircleOutlined />}>
            FAQ
          </Menu.Item>
          <Menu.Item key="9" icon={<VideoCameraOutlined />}>
            Customize Dashboard
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header
          style={{
            margin: "0px 16px 0",
            background: colorBgContainer,
            // border:"2px solid green",
            borderRadius: "5px",
            height: "fit-content",
          }}
        >
          <AppHeader />
        </Header>
        <Content
          style={{
            margin: "10px 16px 0",
            // border: "2px solid red",
            // minHeight:"100vh",
            // background:colorBgContainer
          }}
        >
          <MyTable />
        </Content>

        <Footer
          style={{
            textAlign: "center",
            // border: "2px solid violet",
          }}
        >
          Shrey Raj ©2023 Created by - Shrey Raj Chaudhari
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AppLayout;
