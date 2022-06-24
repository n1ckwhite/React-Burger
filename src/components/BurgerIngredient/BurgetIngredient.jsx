import React from "react";
import stylesBurgerIngredient from './BurgerIngredient.module.css';
import {IngredientCard} from "../IngredientCard/IngredientCard";
import PropTypes from "prop-types";
import {menuItemPropTypes} from "../../utils/constans";
export const BurgerIngredient = (props) => {
    return (
        <div className={stylesBurgerIngredient.card}>
            <div className="mt-10">
                <p className="text text_type_main-medium">
                    Булки
                </p>
                <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
                    {props.arrData.map((item,index) => {
                        if(item.type === 'bun') {
                            return <IngredientCard key={index} ingredient={item} openModal={props.handleModal} />
                        }
                    })}
                </ul>
            </div>
            <div className="mt-10">
                <p className="text text_type_main-medium">
                    Соусы
                </p>
                <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
                    {props.arrData.map((item,index) => {
                        if(item.type === 'sauce') {
                            return <IngredientCard key={index} ingredient={item} openModal={props.handleModal}/>
                        }
                    })}
                </ul>
            </div>
            <div className="mt-10">
                <p className="text text_type_main-medium">
                    Начинки
                </p>
                <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
                    {props.arrData.map((item,index) => {
                        if(item.type === 'main') {
                            return <IngredientCard key={index} ingredient={item} openModal={props.handleModal}/>
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

BurgerIngredient.propTypes = {
    arrData: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
}