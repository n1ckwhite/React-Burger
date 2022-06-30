import React from "react";
import stylesModalOrderDetails from "./ModalOrderDetails.module.css";
import doneImg from "../../images/order accpeted/done.png";
import PropTypes from "prop-types";
export const ModalOrderDetails = ({ number }) => {
  return (
    <>
      <p
        className={`${stylesModalOrderDetails.title} text text_type_digits-large  mt-30`}
      >
        {number}
      </p>
      <p className="text text_type_main-medium mt-8">Индентификатор заказа</p>
      <img
        src={doneImg}
        alt="готово!"
        className={`${stylesModalOrderDetails} mt-15`}
      />
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

ModalOrderDetails.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
