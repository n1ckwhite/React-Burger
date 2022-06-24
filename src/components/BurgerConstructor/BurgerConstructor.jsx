import React from "react";
import stylesBurgerConstructor from './BurgerConstructor.module.css';
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
export const BurgerConstructor = ({bur,ingredients,openModal}) => {
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <ul className={stylesBurgerConstructor.ul}>
                <li className={`${stylesBurgerConstructor.li} mb-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bur.name} (верх)`}
                        price={bur.price}
                        thumbnail={bur.image}
                        key={bur._id}
                    />
                </li>
                <div className={stylesBurgerConstructor.liScroll}>
                    {ingredients.map(function(item,index) {
                        return (
                            <li className={`${stylesBurgerConstructor.li}`} key={index}>
                                <DragIcon type="primary" />
                                <ConstructorElement
                                    isLocked={false}
                                    text={item.name}
                                    price={item.price}
                                    thumbnail={item.image}
                                />
                            </li>
                        )
                    })}
                    </div>
                    <li className={`${stylesBurgerConstructor.li} mt-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bur.name} (низ)`}
                        price={bur.price}
                        thumbnail={bur.image}
                        key={bur._id}
                    />
                </li>
            </ul>
            <div className={`${stylesBurgerConstructor.info} mt-10`}>
                <p className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}>
                 610
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
    ingredients: PropTypes.array.isRequired,
}