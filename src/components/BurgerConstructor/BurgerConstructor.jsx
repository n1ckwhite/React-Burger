import React from "react";
import stylesBurgerConstructor from './BurgerConstructor.module.css';
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
export const BurgerConstructor = ({arr,openModal}) => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <ul className={stylesBurgerConstructor.ul}>
                <li className={`${stylesBurgerConstructor.li} mb-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${arr.name} (верх)`}
                        price={arr.price}
                        thumbnail={arr.image}
                        key={arr._id}
                    />
                </li>
                <div className={stylesBurgerConstructor.liScroll}>
                    </div>
                    <li className={`${stylesBurgerConstructor.li} mt-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${arr.name} (низ)`}
                        price={arr.price}
                        thumbnail={arr.image}
                        key={arr._id}
                    />
                </li>
            </ul>
            <div className={`${stylesBurgerConstructor.info} mt-10`}>
                <p className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}>
                 610
                    <CurrencyIcon type="primary" /></p>
                <Button type="primary" size="medium" onClick={openModal}>
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    openModal: PropTypes.func.isRequired
}