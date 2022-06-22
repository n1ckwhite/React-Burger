import React, {useEffect} from "react";
import stylesModal from './Modal.module.css';
import {ModalOverlay} from "../ModalOverlay/ModalOverlay";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const Modal = ({children,isActive,handleIsActive,closePopup,title}) => {
    useEffect(() => {
        document.addEventListener('keydown',handleOpenModal)
        return () => {
            document.removeEventListener('keydown',handleOpenModal)
        }
    },[])

    const handleOpenModal = (e) => {
        if(e.key === 'Escape') {
            closePopup()
        }
    }

    return (
            <ModalOverlay open={isActive} closePopup={closePopup}>
                <div className={`${stylesModal.modal} pl-10 pr-10`}>
                    {
                        title
                            ? <div className={`${stylesModal.row} mt-10`}>
                                <p className="text text_type_main-large">
                                    {title}
                                </p>
                                <button className={`${stylesModal.button}`} onClick={handleIsActive}>
                                    <CloseIcon type="primary" />
                                </button>
                            </div>
                            :  <button className={`${stylesModal.button} ${stylesModal.button_a}`} onClick={handleIsActive}>
                                <CloseIcon type="primary" />
                            </button>
                    }
                    <div className={`${stylesModal.container} mb-30`}>
                        {children}
                    </div>
                </div>
            </ModalOverlay>
    )
}

Modal.defaultProps ={
    title: null
}