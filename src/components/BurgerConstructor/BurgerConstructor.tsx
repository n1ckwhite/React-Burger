import { FC } from "react";
import stylesBurgerConstructor from "./BurgerConstructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItem } from "../BurgetConstructorItem/BurgerConstructorItem";
import { useDrop } from "react-dnd";
import {
  DELETE_CONSTRUCTOR_ITEM,
  SET_SORTED_ARRAY,
} from "../../services/action";
import { useHistory } from "react-router-dom";
import { IIngredient } from "../../services/types";
import { useDispatch, useSelector } from "../../services/types/index";
import { Button } from "../Button/Button";
interface IProps {
  openModal: () => void;
}

export const BurgerConstructor: FC<IProps> = ({ openModal }) => {
  const burgers = useSelector(
    (state) => state.currentIngredient.ingredients
  ) as any;
  const bun = useSelector((state) => state.currentIngredient.bun);
  const dispatch = useDispatch();
  const history = useHistory();
  const onDelete = (item: IIngredient) => {
    dispatch({
      type: DELETE_CONSTRUCTOR_ITEM,
      indx: item,
    });
  };
  const [{ isHover }, dropRef] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: !!monitor.isOver(),
    }),
  });
  const prices = burgers.reduce((a: number, b: IIngredient) => a + b.price, 0);
  const user = window.localStorage.length;
  const moveIngredient = (dragIndex: number, hoverIndex: number): void => {
    const dragIngredient = burgers[dragIndex];
    if (dragIngredient) {
      const newIngredients = [...burgers];
      newIngredients.splice(dragIndex, 1);
      newIngredients.splice(hoverIndex, 0, dragIngredient);
      dispatch({ type: SET_SORTED_ARRAY, sortedArray: newIngredients });
    }
  };

  const openModalUser = () => {
    if (user !== 0) {
      openModal();
    } else {
      history.replace({ pathname: "/login" });
    }
  };

  return (
    <section className={`${stylesBurgerConstructor.section} mt-25`}>
      <ul className={stylesBurgerConstructor.ulUnder}>
        {bun.map((i, index) => {
          if (i.type === "bun") {
            return (
              <BurgerConstructorItem
                moveIngredient={moveIngredient}
                index={index}
                key={i.key}
                item={i}
                type="top"
                isLocked={true}
                position={true}
              />
            );
          }
        })}
        <ul
          className={stylesBurgerConstructor.ul}
          ref={dropRef}
          style={{
            border: isHover ? "3px solid #4C4CFF" : "",
          }}
        >
          {burgers.map((i: IIngredient, index: number) => {
            return (
              <BurgerConstructorItem
                moveIngredient={moveIngredient}
                key={i.key}
                item={i}
                type="middle"
                drag={true}
                index={index}
                onDelete={() => onDelete(i._id)}
              />
            );
          })}
        </ul>
        {bun.map((i, index: number) => {
          if (i.type === "bun") {
            return (
              <BurgerConstructorItem
                moveIngredient={moveIngredient}
                index={index}
                key={i.key}
                item={i}
                type="bottom"
                isLocked={true}
                position={false}
              />
            );
          }
        })}
      </ul>
      <div className={`${stylesBurgerConstructor.info} mt-10`}>
        <p
          className={`text text_type_digits-medium ${stylesBurgerConstructor.price} mr-10`}
        >
          {bun[0] ? prices + bun[0].price * 2 : prices}
          <CurrencyIcon type="primary" />
        </p>
        <Button
          type="primary"
          size="medium"
          onClick={() => openModalUser()}
          disabled={burgers.length && bun.length ? false : true}
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
