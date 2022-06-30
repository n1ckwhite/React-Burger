import React, { useContext } from "react";
import stylesBurgerIngredient from "./BurgerIngredient.module.css";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { IngredientsContext } from "../../services/IngredientsContext";
import PropTypes from "prop-types";
export const BurgerIngredient = ({ handleModal }) => {
  const [...burgers] = useContext(IngredientsContext);
  return (
    <div className={stylesBurgerIngredient.card}>
      <div className="mt-10">
        <p className="text text_type_main-medium">Булки</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
            if (item.type === "bun") {
              return (
                <IngredientCard
                  key={item._id}
                  ingredient={item}
                  openModal={handleModal}
                />
              );
            }
          })}
        </ul>
      </div>
      <div className="mt-10">
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
            if (item.type === "sauce") {
              return (
                <IngredientCard
                  key={item._id}
                  ingredient={item}
                  openModal={handleModal}
                />
              );
            }
          })}
        </ul>
      </div>
      <div className="mt-10">
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
            if (item.type === "main") {
              return (
                <IngredientCard
                  key={item._id}
                  ingredient={item}
                  openModal={handleModal}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

BurgerIngredient.propTypes = {
  handleModal: PropTypes.func.isRequired,
};
