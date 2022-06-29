import React from 'react';
import styleBurgerConstructorItem from './BurgerConstructorItem.module.css';
import {ConstructorElement,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
export const BurgerConstructorItem = ({item,isLocked,type,position,drag}) => {
    let pos
    if(position) {
            pos = '(верх)'
    } else if(position === undefined) {
            pos = ''
        } else {
            pos = '(низ)'
    }
    return (
        <li className={`${styleBurgerConstructorItem.li} mb-4`}>
            {drag && <DragIcon type="primary" />}
            <ConstructorElement
                type={type}
                isLocked={isLocked}
                text={`${item.name} ${pos}`}
                price={item.price}
                thumbnail={item.image}
            />
        </li>
    )
}

BurgerConstructorItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        pos: PropTypes.bool,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string.isRequired,
    drag: PropTypes.bool,
    position: PropTypes.bool,
    isLocked: PropTypes.bool
}