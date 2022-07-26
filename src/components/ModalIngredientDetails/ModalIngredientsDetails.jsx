import stylesModalIngredientsDetails from "./ModalIngredientsDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIngredient } from "../../services/action/ingredient";
import { getIngredients } from "../../services/action/ingredients";

export const ModalIngredientsDetails = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredient = useSelector((state) => state.ingredient.ingredient);
  const [state,setState] = useState(false)
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getIngredients());
    if(ingredients.length !== 0) {
      setState(true)
      const findItem = ingredients.find((i) => i._id === id);
      dispatch(getIngredient(findItem));
    }

  }, [dispatch,id,ingredients]);
  return (
    <div className={stylesModalIngredientsDetails.div}>
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
        </div>
  );
};
