import React from "react";
import stylesIngredientCard from './IngredientCard.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const IngredientCard = (props) => {
    return (
        <li className={`${stylesIngredientCard.li} mt-6`}>
            {props.count> 0 && <Counter count={props.count}/>}
            <img  src={props.image} alt={props.name}/>
            <p className={`${stylesIngredientCard.prices} text text_type_digits-default mt-4 mb-4`}>
                {props.price}
                <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default">
                {props.name}
            </p>
        </li>
    )
}

IngredientCard.propTypes = {
    count: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}