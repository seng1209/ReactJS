import React, { useState } from "react";
import { ImWoman } from "react-icons/im";
import { IoMan } from "react-icons/io5";
import { ImManWoman } from "react-icons/im";
import { RiPagesFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import { TbBrandProducthunt } from "react-icons/tb";
import { MdConnectWithoutContact } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { Menu } from "antd";
import Home from "./Home";
import { Link } from "react-router-dom";
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
    <Link to="/" style={{ fontSize: "20px", fontWeight: "bold" }}>
      Home
    </Link>,
    "1"
  ),
  getItem(<p style={{ fontSize: "20px", fontWeight: "bold" }}>Women's</p>, "2"),
  getItem(<p style={{ fontSize: "20px", fontWeight: "bold" }}>Men's</p>, "3"),
  getItem(<p style={{ fontSize: "20px", fontWeight: "bold" }}>Kid's</p>, "4"),
];
const HeaderMenu = () => {
  return <Menu mode="horizontal" defaultSelectedKeys={["1"]} items={items} />;
};
export default HeaderMenu;
