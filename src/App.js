import React, { useState } from "react";
import { ImWoman } from "react-icons/im";
import { IoMan } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";
import { RiPagesFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import {
  BrowserRouter as Routers,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import HeaderMenu from "./components/header/HeaderMenu";
import Home from "./components/header/Home";

import Woman from "./components/categories/Woman";

import { Breadcrumb, Layout, Menu, theme, Space } from "antd";
import MenuPage from "./components/menu/MenuPage";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(
    <Link to="/categories">Category</Link>,
    "1",
    <MdCategory style={{ fontSize: "24px" }} />,
    [
      getItem(
        <Link to="/woman">Woman</Link>,
        "2",
        <ImWoman style={{ fontSize: "24px" }} />
      ),
      getItem(
        <Link to="/man">Man</Link>,
        "3",
        <IoMan style={{ fontSize: "24px" }} />
      ),
      getItem(
        <Link to="/jewelry">Jewelry</Link>,
        "4",
        <GiJeweledChalice style={{ fontSize: "24px" }} />
      ),
      getItem(
        <Link to="/electronic">Electronic</Link>,
        "5",
        <FcElectronics style={{ fontSize: "24px" }} />
      ),
    ]
  ),

  getItem("Pages", "sub1", <RiPagesFill style={{ fontSize: "24px" }} />, [
    getItem("About Us", "6", <FaPeopleGroup style={{ fontSize: "24px" }} />),
    getItem("Product", "7", <AiOutlineProduct style={{ fontSize: "24px" }} />),
    getItem(
      "Single Product",
      "8",
      <TbBrandProducthunt style={{ fontSize: "24px" }} />
    ),
    getItem(
      "Contact Us",
      "9",
      <MdConnectWithoutContact style={{ fontSize: "24px" }} />
    ),
  ]),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Routers>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical" />

          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <HeaderMenu />
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            ></Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <MenuPage />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Routers>
  );
};
export default App;
