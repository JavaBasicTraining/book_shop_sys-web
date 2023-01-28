import { Button, Form, Image, Input } from "antd";
import { useEffect, useState } from "react";
import { UserDetail } from "../../../api/user/UserDetail";
import { UserService } from "../../../api/user/UserService";
import { BaseResponse } from "../../../model/BaseResponse";

const formItemLayout = {
  labelCol: {
    xs: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 18 },
  },
};

interface UserSaveFormProps {
  user: UserDetail;
  editable: boolean;
  setOpenModal: Function;
}

export const UserSaveForm = (props: UserSaveFormProps) => {
  const [user] = useState<UserDetail>(props.user);
  const [form] = Form.useForm();

  const onFinish = (values: UserDetail) => {
    var user = props.user;
    user.avatar = values.avatar;
    user.email = values.email;
    user.phone = values.phone;
    user.fullName = values.fullName;
    console.log(user);
    UserService.update(props.user.id, user)
      .then((response) => {
        var baseData: BaseResponse<UserDetail> = response.data;
        console.log(baseData);
      })
      .catch((error) => {
        console.log(error);
      });

    props.setOpenModal(false);
  };

  useEffect(() => {
    form.setFieldsValue({
      fullName: props.user.fullName,
      phone: props.user.phone,
      email: props.user.email,
      avatar: props.user.avatar,
    });
  }, [form, props.user]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      initialValues={{
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        avatar: user.avatar,
      }}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        required
        rules={[{ required: true, message: "FullName is not empty" }]}
      >
        <Input placeholder="Full Name" value={user.fullName} />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { type: "email", message: "Email is not valid", required: true },
        ]}
        required
      >
        <Input placeholder="Email" value={user.email} />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phone"
        required
        rules={[
          {
            pattern: new RegExp(
              "^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$"
            ),
            message: "Phone Number invalid",
          },
        ]}
      >
        <Input placeholder="Phone Number" value={user.phone} />
      </Form.Item>
      <Form.Item label="Avatar" name="avatar">
        <Image src={user.avatar} />
      </Form.Item>
      <Form.Item className="flex justify-center">
        <Button htmlType="submit" type="primary" className="bg-primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
