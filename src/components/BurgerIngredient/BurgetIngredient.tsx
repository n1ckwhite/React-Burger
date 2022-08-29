import { FC, SyntheticEvent } from "react";
import stylesBurgerIngredient from "./BurgerIngredient.module.css";
import { IngredientCard } from "../IngredientCard/IngredientCard";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../services/types/index";
interface IProps {
  handleModal: () => void;
  sectionRef: HTMLDivElement | undefined | any,
  handler: (E: SyntheticEvent) => void,
  bunRef: React.LegacyRef<HTMLParagraphElement> | undefined,
  sauceRef: React.LegacyRef<HTMLParagraphElement> | undefined,
  mainRef: React.LegacyRef<HTMLParagraphElement> | undefined,
}

export const BurgerIngredient: FC<IProps> = ({
  sectionRef,
  handler,
  bunRef,
  sauceRef,
  mainRef,
  handleModal,
}) => {
  const burgers = useSelector((state) => state.ingredients.ingredients);
  const location = useLocation();
  return (
    <div
      className={stylesBurgerIngredient.card}
      ref={sectionRef}
      onScroll={handler}
    >
      <div className="pt-10" id="bun">
        <p className="text text_type_main-medium" ref={bunRef}>
          Булки
        </p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
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
        <p className="text text_type_main-medium" ref={sauceRef}>
          Соусы
        </p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
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
        <p className="text text_type_main-medium" ref={mainRef}>
          Начинки
        </p>
        <ul className={`${stylesBurgerIngredient.ul} pl-4 pr-4`}>
          {burgers.map((item) => {
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
