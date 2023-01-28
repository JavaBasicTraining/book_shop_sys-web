import {
  HomeOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

export const NavBar = () => {
  const navigate = useNavigate();

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    url: string,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      onClick: () => navigate(url),
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem("Home", "1", "/", <HomeOutlined />),
    getItem("User", "2", "/user", <UserOutlined />),
    getItem("Book", "3", "/book", <ShoppingCartOutlined />),
    getItem("Invoice", "4", "/invoice", <ShoppingCartOutlined />),
  ];
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["1"]}
      items={items}
    />
  );
};
