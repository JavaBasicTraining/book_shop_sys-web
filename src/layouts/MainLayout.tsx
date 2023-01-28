import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, theme } from "antd";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { BookPage } from "../pages/book/BookPage";
import { HomePage } from "../pages/home/HomePage";
import { InvoicePage } from "../pages/invoice/InvoicePage";
import { UserPage } from "../pages/user/UserPage";
const { Header, Sider, Content } = Layout;

export const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-[100%] w-[100%]">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <NavBar />
      </Sider>
      <Layout className="w-[100%]">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>

        <Content className="h-[100%] w-[100%] overflow-hidden bg-[white] p-3 mx-3 my-5 box-border">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/invoice" element={<InvoicePage />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
