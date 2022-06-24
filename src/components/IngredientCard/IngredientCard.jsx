import React from "react";
import stylesIngredientCard from './IngredientCard.module.css';
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const IngredientCard = ({ingredient,openModal}) => {
    return (
        <li className={`${stylesIngredientCard.li} mt-6`} onClick={openModal}>
            {ingredient.count> 0 && <Counter count={ingredient.count}/>}
            <img  src={ingredient.image} alt={ingredient.name}/>
            <p className={`${stylesIngredientCard.prices} text text_type_digits-default mt-4 mb-4`}>
                {ingredient.price}
                <CurrencyIcon type="primary" />
            </p>
            <p className="text text_type_main-default">
                {ingredient.name}
            </p>
        </li>
    )
}

IngredientCard.propTypes = {
    ingredient: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
}