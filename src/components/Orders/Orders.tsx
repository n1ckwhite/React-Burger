import { FC } from "react";
import stylesOrders from "./Orders.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
export const Orders: FC<{}> = () => {
  const burgers: any = useSelector(
    (state: any) => state.ingredients.ingredients
  );
  return (
    <ul className={stylesOrders.ul}>
      <li className={stylesOrders.li}>
        <span className={stylesOrders.header}>
          <p className="text text_type_digits-default">#034535</p>
          <p className={`text text_type_main-default ${stylesOrders.text}`}>
            Сегодня, 16:20 i-GMT+3
          </p>
        </span>
        <p className="text text_type_main-medium">
          Death Star Starship Main бургер
        </p>
        <div className={stylesOrders.flex}>
          <ul className={stylesOrders.ul_two}>
            <li className={stylesOrders.li_img}>
              <img
                className={stylesOrders.img}
                src={burgers[0].image}
                alt="icon"
              />
            </li>
            <li className={stylesOrders.li_img}>
              <img
                className={stylesOrders.img}
                src={burgers[4].image}
                alt="icon"
              />
            </li>
            <li className={stylesOrders.li_img}>
              <img
                className={stylesOrders.img}
                src={burgers[4].image}
                alt="icon"
              />
            </li>
            <li className={stylesOrders.li_img}>
              <img
                className={stylesOrders.img}
                src={burgers[4].image}
                alt="icon"
              />
            </li>
            <li className={stylesOrders.li_img}>
              <img
                className={stylesOrders.img}
                src={burgers[4].image}
                alt="icon"
              />
            </li>
            <li className={stylesOrders.li_img}>
              <img
                className={`${stylesOrders.img} ${stylesOrders.img_length}`}
                src={burgers[4].image}
                alt="icon"
              />
              <p
                className={`${stylesOrders.text_length} text text_type_digits-default`}
              >
                +3
              </p>
            </li>
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
