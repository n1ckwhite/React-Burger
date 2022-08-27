import { FC } from "react";
import stylesBurgerIngredient from "./BurgerIngredient.module.css";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types/index";
interface IProps {
  handleModal: () => void;
}

export const BurgerIngredient: FC<IProps> = ({ handleModal }) => {
  const burgers = useSelector((state: any) => state.ingredients.ingredients);
  const location = useLocation();
  return (
    <div className={stylesBurgerIngredient.card}>
      <div className="pt-10" id="bun">
        <p className="text text_type_main-medium">Булки</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item: any) => {
            if (item.type === "bun") {
              return (
                <Link
                  className={stylesBurgerIngredient.link}
                  to={{
                    pathname: `/ingredients/${item._id}`,
                    state: { background: location },
                  }}
                  key={item._id}
                >
                  <IngredientCard ingredient={item} openModal={handleModal} />
                </Link>
              );
            }
          })}
        </ul>
      </div>
      <div className="pt-10" id="souse">
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item: any) => {
            if (item.type === "sauce") {
              return (
                <Link
                  className={stylesBurgerIngredient.link}
                  to={{
                    pathname: `/ingredients/${item._id}`,
                    state: { background: location },
                  }}
                  key={item._id}
                >
                  <IngredientCard ingredient={item} openModal={handleModal} />
                </Link>
              );
            }
          })}
        </ul>
      </div>
      <div className="pt-10" id="ingredient">
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item: any) => {
            if (item.type === "main") {
              return (
                <Link
                  className={stylesBurgerIngredient.link}
                  to={{
                    pathname: `/ingredients/${item._id}`,
                    state: { background: location },
                  }}
                  key={item._id}
                >
                  <IngredientCard ingredient={item} openModal={handleModal} />
                </Link>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
