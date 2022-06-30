import React from "react";
import stylesModalOverlay from "./ModalOverlay.module.css";
import PropTypes from "prop-types";
export const ModalOverlay = ({ children, open, closePopup }) => {
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

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  closePopup: PropTypes.func.isRequired,
};
