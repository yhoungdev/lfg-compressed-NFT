import { createPortal } from "react-dom";
import React, { ReactNode, useEffect } from "react";

interface IModalItem {
  children: ReactNode;
  onClose: () => void;
}

const ModalLayout = ({ children, onClose }: IModalItem) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-[#878787ad]"
      onClick={onClose}
    >
      <div className="modal bg-[#1c1c1c] p-6 rounded-lg w-full  max-w-xl md:max-w-5xl">
        <div className="flex justify-end cursor-pointer" onClick={onClose}>
          <h1 className=" text-3xl bg-[#252525] px-3 rounded flex items-center">
            &times;
          </h1>
        </div>
        <div className="modal-content text-gray-300">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default ModalLayout;
