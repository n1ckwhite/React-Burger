import React from "react";
import stylesModalOverlay from './ModalOverlay.module.css';
import ReactDOM from "react-dom";
const modal = document.getElementById('react-modals');
export const ModalOverlay = ({children,open}) => {
    return ReactDOM.createPortal(
        <div className={open ? `${stylesModalOverlay.modal} ${stylesModalOverlay.modal_active}` : `${stylesModalOverlay.modal}`}>
            {children}
        </div>
    ,modal)
}