import React from "react";
import stylesBurgerConstructor from './BurgerConstructor.module.css';
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {menuItemPropTypes} from '../../utils/constans';
import PropTypes from "prop-types";
export const BurgerConstructor = ({arr,openModal}) => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <div className={stylesBurgerConstructor.liScroll}>
            <ul className={stylesBurgerConstructor.ul}>
                <li className={`${stylesBurgerConstructor.li} mb-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${arr[0].name} (верх)`}
                        price={arr[0].price}
                        thumbnail={arr[0].image}
                        key={arr[0]._id}
                    />
                </li>
                    <li className={`${stylesBurgerConstructor.li} mt-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${arr[0].name} (низ)`}
                        price={arr[0].price}
                        thumbnail={arr[0].image}
                        key={arr[0]._id}
                    />
                </li>
            </ul>
        </div>
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
    arr: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
}