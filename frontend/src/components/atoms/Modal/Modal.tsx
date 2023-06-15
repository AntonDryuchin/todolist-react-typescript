import React from "react";
import "./Modal.css";

type ModalProps = {
  message: string;
  onClose: () => void;
};

export default function Modal({ message, onClose }: ModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-message">{message}</div>
        <button className="modal-close-btn" onClick={onClose}>
          ✅
        </button>
      </div>
    </div>
  );
}
