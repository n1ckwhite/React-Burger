import React from "react";
import stylesModalIngredientsDetails from "./ModalIngredientsDetails.module.css";
import {useSelector} from "react-redux";

export const ModalIngredientsDetails = () => {
  const ingredient = useSelector(state => state.ingredient.ingredient)
  return (
           <>
            <img
                className={stylesModalIngredientsDetails.img}
                src={ingredient?.image}
                alt={ingredient?.name}
            />

            <p className="text text_type_main-medium mt-4">{ingredient?.name}</p>
            <ul className={`${stylesModalIngredientsDetails.ul} mt-8`}>
              <li
                  className={`${stylesModalIngredientsDetails.li} mr-5`}
                  key={ingredient.id}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Каллории,ккал
                </p>
                <p className="text text_type_digits-default">
                  {ingredient?.calories}
                </p>
              </li>
              <li
                  className={`${stylesModalIngredientsDetails.li} mr-5`}
                  key={ingredient.id}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Белки,г
                </p>
                <p className="text text_type_digits-default">
                  {ingredient?.proteins}
                </p>
              </li>
              <li
                  className={`${stylesModalIngredientsDetails.li} mr-5`}
                  key={ingredient.id}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Жиры,г
                </p>
                <p className="text text_type_digits-default">{ingredient?.fat}</p>
              </li>
              <li
                  className={`${stylesModalIngredientsDetails.li}`}
                  key={ingredient.id}
              >
                <p className="text text_type_main-default text_color_inactive">
                  Углеводы,г
                </p>
                <p className="text text_type_digits-default">
                  {ingredient?.carbohydrates}
                </p>
              </li>
            </ul>
          </>
  );
};

