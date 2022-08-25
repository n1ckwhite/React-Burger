import { FC } from "react";
import stylesOrders from "./Orders.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
export const Orders: FC<any> = ({ order }) => {
  const day = new Date().getDate();
  const ingredients = useSelector(
    (state: any) => state.ingredients.ingredients
  );
  const newArr = order?.ingredients.map((i: any) => {
    return ingredients.filter((ingredient: any) =>
      ingredient._id === i ? ingredient.image : null
    );
  });
  const { v4: uuidv4 } = require("uuid");

  const newArr2 = newArr.map((i: any) => i[0].image);
  const neaeae: any = new Set(newArr2);
  const newArr3 = [...neaeae];
  const dayOrder = order.createdAt.includes(`${day}T`);
  return (
    <ul className={stylesOrders.ul}>
      <li className={stylesOrders.li}>
        <span className={stylesOrders.header}>
          <p className="text text_type_digits-default">#{order?.number}</p>
          <p className={`text text_type_main-default ${stylesOrders.text}`}>
            {dayOrder ? "Сегодня" : "Вчера"}, {order.createdAt.slice(11, 16)}
          </p>
        </span>
        <p className="text text_type_main-medium">{order?.name}</p>
        <div className={stylesOrders.flex}>
          <ul className={stylesOrders.ul_two}>
            {newArr3.slice(0, 6).map((i: any, len: any) => {
              return (
                <li className={stylesOrders.li_img} key={uuidv4()}>
                  <img className={stylesOrders.img} src={i} alt="icon" />
                  {newArr3.length > 5 && len === 5 ? (
                    <p
                      className={`${stylesOrders.text_length} text text_type_digits-default`}
                    >
                      +3
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <span className={stylesOrders.price}>
            <p className="text text_type_digits-default">480</p>
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </li>
    </ul>
  );
};
