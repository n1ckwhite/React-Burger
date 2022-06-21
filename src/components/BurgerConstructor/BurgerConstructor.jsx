import React from "react";
import stylesBurgerConstructor from './BurgerConstructor.module.css';
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {menuItemPropTypes} from '../../utils/constans';
import PropTypes from "prop-types";
export const BurgerConstructor = (props) => {
    const keyRandom = () => (Math.random() * (200 - 1) + 1);
    return (
        <section className={`${stylesBurgerConstructor.section} mt-25`}>
            <ul className={stylesBurgerConstructor.ul}>
                <li className={`${stylesBurgerConstructor.li} mb-4`} key={keyRandom()}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${props.arr[0].name} (верх)`}
                        price={props.arr[0].price}
                        thumbnail={props.arr[0].image}
                        key={props.arr[0]._id}
                    />
                </li>
                <div className={stylesBurgerConstructor.liScroll} key={keyRandom()}>
                {
                    props.arr.map( (item,index) => {
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
                    })
                }
                    </div>
                    <li className={`${stylesBurgerConstructor.li} mt-4`} key={keyRandom()}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${props.arr[0].name} (низ)`}
                        price={props.arr[0].price}
                        thumbnail={props.arr[0].image}
                        key={props.arr[0]._id}
                    />
                </li>
            </ul>
            <div className={`${stylesBurgerConstructor.info} mt-10`}>
                <p className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}>
                 610
                    <CurrencyIcon type="primary" /></p>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    arr: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired,
}