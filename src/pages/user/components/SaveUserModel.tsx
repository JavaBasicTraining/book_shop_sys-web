import { Modal } from "antd";
import { useState } from "react";
import { UserDetail } from "../../../api/user/UserDetail";
import { UserSaveForm } from "./UserSaveForm";
interface SaveUserModalProps {
  open: boolean;
  setOpen: Function;
  user: UserDetail;
}
export const SaveUserModel = ({ open, setOpen, user }: SaveUserModalProps) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Modal
      title={<div className="text-center text-[24px] mb-5">User form</div>}
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      footer
    >
      <UserSaveForm user={user} editable={false} setOpenModal={setOpen} />
    </Modal>
  );
};
