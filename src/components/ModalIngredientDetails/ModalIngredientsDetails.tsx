import stylesModalIngredientsDetails from "./ModalIngredientsDetails.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getIngredient } from "../../services/action/ingredient";
import { useDispatch, useSelector } from "../../services/types/index";
import { IIngredient } from "../../services/types/index";
import { Loading } from "../Loading/Loading";

export const ModalIngredientsDetails = () => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const ingredient = useSelector(
    (state) => state.ingredient.ingredient
  ) as IIngredient;
  const dispatch = useDispatch();
  const { id } = useParams() as never;
  useEffect(() => {
    const findItem = ingredients.find(
      (i: IIngredient) => i._id === id
    ) as IIngredient;
    dispatch(getIngredient(findItem));
  }, [dispatch, id, ingredients]);
  return (
    <div className={stylesModalIngredientsDetails.div}>
      {ingredients.length !== 0 ? (
        <>
          <img
            className={stylesModalIngredientsDetails.img}
            src={ingredient?.image}
            alt={ingredient?.name}
          />
          <p data-name="name" className="text text_type_main-medium mt-4">{ingredient?.name}</p>
          <ul className={`${stylesModalIngredientsDetails.ul} mt-8`}>
            <li className={`${stylesModalIngredientsDetails.li} mr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Каллории,ккал
              </p>
              <p className="text text_type_digits-default">
                {ingredient?.calories}
              </p>
            </li>
            <li className={`${stylesModalIngredientsDetails.li} mr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Белки,г
              </p>
              <p className="text text_type_digits-default">
                {ingredient?.proteins}
              </p>
            </li>
            <li className={`${stylesModalIngredientsDetails.li} mr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры,г
              </p>
              <p className="text text_type_digits-default">{ingredient?.fat}</p>
            </li>
            <li className={`${stylesModalIngredientsDetails.li}`}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы,г
              </p>
              <p className="text text_type_digits-default">
                {ingredient?.carbohydrates}
              </p>
            </li>
          </ul>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};
