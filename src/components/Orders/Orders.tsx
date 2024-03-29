import { FC } from "react";
import stylesOrders from "./Orders.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TOrder, useSelector } from "../../services/types";
import { Set } from "typescript";

interface IOrder {
  order: TOrder;
}


export const Orders: FC<IOrder> = ({ order }) => {
  const day = new Date().getDate();
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const filterIngredients = order?.ingredients.map((i) => {
    return ingredients.filter((ingredient) =>
      ingredient._id === i ? ingredient.image : null
    );
  });
  const setIngredients = new Set(
    filterIngredients.map((i) => i[0]?.image)
  )as any;
  const images = [...setIngredients];
  const dayOrder = order.createdAt.includes(`${day}T`);
  const bun = filterIngredients.filter((i) => i[0]?.type === "bun");
  const notBunPrice = filterIngredients
    .filter((i) => i[0]?.type !== "bun")
    .reduce((a, b) => a + b[0]?.price, 0);
  const bunPrice =
    bun.length === 1
      ? bun[0].map((i) => i?.price * 2)[0]
      : bun.reduce((a, b) => a + b[0]?.price, 0);
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
            {images.slice(0, 6).map((i, len) => {
              return (
                <li className={stylesOrders.li_img} key={i}>
                  <img className={stylesOrders.img} src={i} alt="icon" />
                  {images.length > 5 && len === 5 ? (
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
            <p className="text text_type_digits-default">
              {`${bunPrice + notBunPrice}`}
            </p>
            <CurrencyIcon type="primary" />
          </span>
        </div>
      </li>
    </ul>
  );
};
