import React from "react";
import stylesBurgerIngridients from './BurgerIngredients.module.css';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import {BurgerIngredient} from "../BurgerIngredient/BurgetIngredient";
import PropTypes from "prop-types";
import {menuItemPropTypes} from "../../utils/constans";

export const BurgerIngredients = ({arrData,openModal}) => {
    const [current, setCurrent] = React.useState('one')
    return (
        <section className={`${stylesBurgerIngridients.section} mt-10`}>
            <p className="text text_type_main-large">
               Собери бургер
            </p>
            <div className={`${stylesBurgerIngridients.nav} mt-5`}>
                    <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                        Булки
                    </Tab>
                    <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                        Соусы
                    </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <BurgerIngredient handleModal={openModal} arrData={arrData}/>
        </section>
    )
}

BurgerIngredients.propTypes = {
    openModal: PropTypes.func.isRequired,
    arrData: PropTypes.arrayOf(menuItemPropTypes.isRequired).isRequired
}