import { Button, Image, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { UserDetail } from "../../../api/user/UserDetail";
import { UserInfo } from "../../../api/user/UserInfo";
import { UserService } from "../../../api/user/UserService";
import { SaveUserModel } from "./SaveUserModel";

interface UserDataType {
  id: string;
  key: string;
  email: string;
  phone: string;
  fullName: string;
  avatar: string;
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);
  const [user, setUser] = useState<UserDetail>({
    id: "",
    avatar: "",
    phone: "",
    email: "",
    fullName: "",
  });
  const [open, setOpen] = useState(false);

  const columns: ColumnsType<UserDataType> = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      width: 200,
      fixed: "left",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      fixed: "left",
      width: 200,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
      fixed: "left",
    },
    // scroll
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
    },
    // end scroll
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      width: 100,
      render: (_: any, user: UserDataType) => {
        return (
          <Image
            src={
              "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            }
            alt={user.avatar}
            width={50}
          />
        );
      },
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 200,
      render: (_: any, user: UserDataType) => {
        return (
          <div className="flex items-center w-fit gap-3">
            <Button onClick={() => showModal(user)}>Edit</Button>
            <Button danger>Delete</Button>
          </div>
        );
      },
    },
  ];

  const showModal = (user: UserDataType) => {
    UserService.getDetail(user.id)
      .then((response) => {
        console.log(response.data.data);
        setUser(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setOpen(true));
  };

  useEffect(() => {
    UserService.getPage()
      .then((response: any) => {
        console.log(response.data.data);
        if (response.data.data.content) {
          var userData = response.data.data.content.map(
            (item: UserInfo, index: number) => {
              return {
                id: item.id,
                key: index,
                email: item.email,
                phone: item.phone,
                fullName: item.fullName,
                avatar: item.avatar,
              };
            }
          );
          setUsers(userData);
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
      <Table
        bordered
        dataSource={users}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
        scroll={{ y: 400 }}
        className="w-full h-full"
      />
      <SaveUserModel open={open} setOpen={setOpen} user={user} />
    </>
  );
};

export default UserTable;
