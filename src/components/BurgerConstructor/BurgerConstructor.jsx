import React, {useContext} from "react";
import stylesBurgerConstructor from './BurgerConstructor.module.css';
import {CurrencyIcon,Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {IngredientsContext} from "../../services/IngredientsContext";
import {BurgerConstructorItem} from "../BurgetConstructorItem/BurgerConstructorItem";

export const BurgerConstructor = ({bur,openModal}) => {
    const [...ingredients] = useContext(IngredientsContext);
    const prices = ingredients.reduce((a,b) => (a + b.price),0)
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <BurgerConstructorItem item={bur} type="top" isLocked={true} position={true}/>
            <ul className={stylesBurgerConstructor.ul}>
                    {ingredients.map(function(item,index) {
                        return <BurgerConstructorItem item={item} key={index} type="middle" drag={true}/>
                    })}
            </ul>
            <BurgerConstructorItem item={bur} type="bottom" isLocked={true} position={false}/>
            <div className={`${stylesBurgerConstructor.info} mt-10`}>
                <p className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}>
                    {prices + (2 * bur.price)}
                    <CurrencyIcon type="primary" />
                </p>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    openModal: PropTypes.func.isRequired,
    bur: PropTypes.object.isRequired,
}