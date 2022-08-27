import React, { FC } from "react";
import stylesBurgerIngridients from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "../BurgerIngredient/BurgetIngredient";

interface IProps {
  openModal: () => void;
}

export const BurgerIngredients: FC<IProps> = ({ openModal }) => {
  const [current, setCurrent] = React.useState("one");
  return (
    <section className={`${stylesBurgerIngridients.section} mt-10`}>
      <p className="text text_type_main-large">Собери бургер</p>
      <div className={`${stylesBurgerIngridients.nav} mt-5`}>
        <a className={stylesBurgerIngridients.a} href="#bun">
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
        </a>
        <a className={stylesBurgerIngridients.a} href="#souse">
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
        </a>
        <a className={stylesBurgerIngridients.a} href="#ingredient">
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </a>
      </div>
      <BurgerIngredient handleModal={openModal} />
    </section>
  );
};
