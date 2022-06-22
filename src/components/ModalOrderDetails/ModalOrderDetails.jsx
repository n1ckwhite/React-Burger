import React from 'react'
import stylesModalOrderDetails from './ModalOrderDetails.module.css';
import doneImg from '../../images/order accpeted/done.png';
export const ModalOrderDetails = () => {
    return (
        <>
            <p className={`${stylesModalOrderDetails.title} text text_type_digits-large  mt-30`}>034536</p>
            <p className="text text_type_main-medium mt-8">
                Индентификатор заказа
            </p>
            <img src={doneImg} alt="готово!" className={`${stylesModalOrderDetails} mt-15`}/>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className={`${stylesModalOrderDetails.subtitle} text text_type_main-default mt-2`}>
                Дождитесь готовности на орбитальной станции
            </p>
        </>
    )
}