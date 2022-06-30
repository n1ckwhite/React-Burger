import React from "react";
import stylesModalOverlay from "./ModalOverlay.module.css";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { modal } from "../Modal/Modal";
export const ModalOverlay = ({ children, open, closePopup }) => {
  return ReactDOM.createPortal(
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
    </div>,
    modal
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};
