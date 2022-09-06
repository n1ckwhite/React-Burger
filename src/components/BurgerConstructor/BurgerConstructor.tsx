import { FC } from "react";
import stylesBurgerConstructor from "./BurgerConstructor.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerConstructorItem } from "../BurgetConstructorItem/BurgerConstructorItem";
import { useDrop } from "react-dnd";
import {
  DELETE_CONSTRUCTOR_ITEM,
  SET_SORTED_ARRAY,
} from "../../services/action";
import { IIngredient } from "../../services/types";
import { useDispatch, useSelector } from "../../services/types/index";
import { Button } from "../Button/Button";
import { useHistory } from "react-router-dom";
interface IProps {
  openModal: () => void;
}

export const BurgerConstructor: FC<IProps> = ({ openModal }) => {
  const history = useHistory();
  const burgers = useSelector(
    (state) => state.currentIngredient.ingredients
  ) as any;
  const bun = useSelector((state) => state.currentIngredient.bun);
  const dispatch = useDispatch();
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
    if (window.localStorage.getItem("accessToken")) {
      openModal();
    } else {
      history.replace({ pathname: "/login" });
    }
  };

  return (
    <section className={`${stylesBurgerConstructor.section} mt-25`}>
      <ul className={stylesBurgerConstructor.ulUnder} ref={dropRef}>
        <>
          {bun.length !== 0 ? (
            <>
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
            </>
          ) : (
            <li
              className={`${stylesBurgerConstructor.liBun} ${stylesBurgerConstructor.liBunTop}`}
              style={{
                border: isHover ? "3px dashed #4C4CFF" : "",
              }}
            >
              <p className="text text_type_main-medium">Булка</p>
            </li>
          )}
        </>
        <ul
          className={stylesBurgerConstructor.ul}
          style={{
            border: isHover ? "3px dashed #FFF" : "",
          }}
        >
          {burgers.length !== 0 ? (
            <>
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
            </>
          ) : (
            <li
              className={`${stylesBurgerConstructor.liBun} ${stylesBurgerConstructor.liBunMiddle}`}
            >
              <p className="text text_type_main-medium">Ингредиент</p>
            </li>
          )}
        </ul>
        {bun.length !== 0 ? (
          <>
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
          </>
        ) : (
          <li
            className={`${stylesBurgerConstructor.liBun} ${stylesBurgerConstructor.liBunBottom}`}
            style={{
              border: isHover ? "3px dashed #4C4CFF" : "",
            }}
          >
            <p className="text text_type_main-medium">Булка</p>
          </li>
        )}
      </ul>
      <div className={`${stylesBurgerConstructor.info}`}>
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
