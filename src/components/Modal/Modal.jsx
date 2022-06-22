import React from "react";
import stylesModal from './Modal.module.css';
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const Modal = ({children,isActive,handleIsActive}) => {
    return (
            <ModalOverlay open={isActive}>
                <div className={stylesModal.modal}>
                    <button className={`${stylesModal.button} ${stylesModal.button_a}`} onClick={handleIsActive}>
                        <CloseIcon type="primary" />
                    </button>
                    <div className={`${stylesModal.container} mb-30`}>
                        {children}
                    </div>
                </div>
            </ModalOverlay>
    )
}