import stylesModalIngredientsDetails from "./ModalIngredientsDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIngredient } from "../../services/action/ingredient";
import { IIngredient } from "../../utils/constans";


interface Iingredients {
  ingredients: {
    ingredients: [IIngredient]
  }
}

interface Iingredient {
ingredient: {
    ingredient: IIngredient,
  }
}

export const ModalIngredientsDetails = () => {
  const ingredients = useSelector(
    (state: Iingredients) => state.ingredients.ingredients
  );
  const ingredient = useSelector((state: Iingredient) => state.ingredient.ingredient);
  const dispatch: Dispatch<any> = useDispatch();
  const {id}: any = useParams();
  useEffect(() => {
    const findItem: any = ingredients.find((i: IIngredient) => i._id === id);
    dispatch(getIngredient(findItem));
  }, [dispatch, id, ingredients]);
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
        >
          <p className="text text_type_main-default text_color_inactive">
            Жиры,г
          </p>
          <p className="text text_type_digits-default">{ingredient?.fat}</p>
        </li>
        <li
          className={`${stylesModalIngredientsDetails.li}`}
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
