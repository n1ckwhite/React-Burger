import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import stylesOrdersDetails from "./OrdersDetails.module.css";

export const OrdersDetails: FC<any> = ({ tal }) => {
  const dispatch: any = useDispatch();

  const { id }: any = useParams();
  const { v4: uuidv4 } = require("uuid");
  const ingredients = useSelector(
    (state: any) => state.ingredients.ingredients
  );
  const data = useSelector((state: any) => state.data.data);
  const dataSearchItem =
    data.orders && data.orders.filter((i: any) => i?._id === id)[0];
  const day = new Date().getDate();
  const dayOrder = dataSearchItem?.createdAt.includes(`${day}T`);
  const filterIngredients = dataSearchItem?.ingredients.map((i: any) => {
    return ingredients.filter((ingredient: any) => ingredient._id === i);
  });
  const notBun = filterIngredients?.filter((i: any) => i[0]?.type !== "bun");
  const bun = filterIngredients?.filter((i: any) => i[0]?.type === "bun")[0];
  const notBunPrice = notBun?.reduce((a: any, b: any) => a + b[0]?.price, 0);

  return (
    <div className={stylesOrdersDetails.block}>
      <p
        className={`text text_type_digits-default ${
          stylesOrdersDetails.title
        } ${tal && stylesOrdersDetails.tal}`}
      >
        #{dataSearchItem?.number}
      </p>
      <p
        className={`text text_type_main-medium mt-10 ${stylesOrdersDetails.subtitle}`}
      >
        {dataSearchItem?.name}
      </p>
      <p
        className={`text text_type_main-default mt-3 ${stylesOrdersDetails.status}`}
      >
        {dataSearchItem?.status === "done" ? "Выполнен" : "Готовиться"}
      </p>
      <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
      <ul className={stylesOrdersDetails.ul}>
        {bun && (
          <li className={stylesOrdersDetails.li}>
            <div className={stylesOrdersDetails.img_block}>
              <img
                className={stylesOrdersDetails.img}
                src={bun[0]?.image}
                alt="icon"
              />
            </div>
            <p
              className={`text text_type_main-default ${stylesOrdersDetails.name}`}
            >
              {bun[0]?.name}
            </p>
            <div className={stylesOrdersDetails.price}>
              <p className="text text_type_digits-default">{2}</p>
              <p className="text text_type_digits-default">x</p>
              <p className="text text_type_digits-default">
                {bun[0]?.price * 2}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        )}

        {notBun &&
          notBun.map((i: any) => {
            return (
              <li className={stylesOrdersDetails.li} key={uuidv4()}>
                <div className={stylesOrdersDetails.img_block}>
                  <img
                    className={stylesOrdersDetails.img}
                    src={i[0]?.image}
                    alt="icon"
                  />
                </div>
                <p
                  className={`text text_type_main-default ${stylesOrdersDetails.name}`}
                >
                  {i[0]?.name}
                </p>
                <div className={stylesOrdersDetails.price}>
                  <p className="text text_type_digits-default">{1}</p>
                  <p className="text text_type_digits-default">x</p>
                  <p className="text text_type_digits-default">{i[0]?.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            );
          })}
      </ul>
      <div className={`${stylesOrdersDetails.time} mt-10`}>
        <p
          className={`text text_type_main-default ${stylesOrdersDetails.time_p}`}
        >
          {dayOrder ? "Сегодня" : "Вчера"},{" "}
          {dataSearchItem?.createdAt.slice(11, 16)}
        </p>
        <div className={stylesOrdersDetails.price_block}>
          <p className="text text_type_digits-default">
            {bun && `${bun[0]?.price * 2 + notBunPrice}`}
          </p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
