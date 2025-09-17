import React from "react";
import Modal from "../../package/modal/Modal.jsx";
import CustomButton from "../../package/customButton/CustomButton.jsx";

const DeleteAccountModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOn={isOpen} onBackgroundClick={onClose}>
      <h2>정말 탈퇴하시겠습니까?</h2>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <CustomButton color="RED" shape="RECTANGLE" onClick={onConfirm}>
          예
        </CustomButton>
        <CustomButton color="MONO" shape="RECTANGLE" onClick={onClose}>
          아니오
        </CustomButton>
      </div>
    </Modal>
  );
};

export default DeleteAccountModal;