import { FC } from "react";
import stylesModalOverlay from "./ModalOverlay.module.css";

interface IProps {
  children: JSX.Element;
  open: boolean;
  closePopup: () => void;
}

export const ModalOverlay: FC<IProps> = ({ children, open, closePopup }) => {
  return (
    <div
      className={
        open
          ? `${stylesModalOverlay.modal} ${stylesModalOverlay.modal_active}`
          : `${stylesModalOverlay.modal}`
      }
    >
      <div className={stylesModalOverlay.wrapper}>{children}</div>
      <div
        className={stylesModalOverlay.close}
        onClick={() => {
          closePopup();
        }}
      ></div>
    </div>
  );
};
