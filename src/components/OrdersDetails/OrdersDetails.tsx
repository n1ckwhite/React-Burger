import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ILocation, useDispatch, useSelector } from "../../services/types";
import stylesOrdersDetails from "./OrdersDetails.module.css";
import { TOrder } from "../../services/types/index";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/action";
import { Loading } from "../Loading/Loading";
interface Ital {
  tal?: true | null;
}

export const OrdersDetails: FC<Ital> = ({ tal }) => {
  const location = useLocation<ILocation>();
  const dispatch = useDispatch();
  const { id } = useParams() as never;
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const data = useSelector((state) => state.data.messages);
  const dataSearchItem =
    data[0]?.orders && data[0]?.orders.filter((i: TOrder) => i?._id === id)[0];
  const day = new Date().getDate();
  const dayOrder = dataSearchItem?.createdAt.includes(`${day}T`);
  const filterIngredients = dataSearchItem?.ingredients.map((i: TOrder) => {
    return ingredients.filter((ingredient) => ingredient._id === i);
  });
  const notBun = filterIngredients?.filter(
    (i: [TOrder]) => i[0]?.type !== "bun"
  );
  const bun = filterIngredients?.filter(
    (i: [TOrder]) => i[0]?.type === "bun"
  )[0];
  const notBunPrice = notBun?.reduce(
    (a: number, b: [TOrder]) => a + b[0]?.price,
    0
  );

  const ingredientsI = data[0]?.orders && data[0]?.orders;

  const ingredientsOrder =
    ingredientsI &&
    ingredientsI.filter((i: TOrder) => i._id === id)[0]?.ingredients;

  const ingredientsInfo =
    ingredientsOrder &&
    ingredientsOrder.reduce((acc: { count: number }[], ingId: number) => {
      if (!acc[ingId]) {
        const ingredient = ingredients.find((ing) => ing._id === ingId);
        if (ingredient) {
          acc[ingId] = {
            ...ingredient,
            count: 1,
          };
        }
      } else {
        acc[ingId].count++;
      }

      return acc;
    }, {});
  const arr = [];
  for (let key in ingredientsInfo) {
    arr.push(ingredientsInfo[key]);
  }

  useEffect(() => {
    if (location.pathname === `/feed/${id}`) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: "wss://norma.nomoreparties.space/orders/all",
      });
    } else if (location.pathname === `/profile/orders/${id}`) {
      dispatch({
        type: WS_CONNECTION_START,
        payload: `wss://norma.nomoreparties.space/orders?token=${window.localStorage
          .getItem("accessToken")
          ?.slice(7)}`,
      });
    }
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, [location.pathname, dispatch, id]);

  return (
    <>
      {data.length !== 0 ? (
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
            {arr &&
              arr.map((i) => {
                return (
                  <li className={stylesOrdersDetails.li} key={i._id}>
                    <div className={stylesOrdersDetails.img_block}>
                      <img
                        className={stylesOrdersDetails.img}
                        src={i?.image}
                        alt="icon"
                      />
                    </div>
                    <p
                      className={`text text_type_main-default ${stylesOrdersDetails.name}`}
                    >
                      {i?.name}
                    </p>
                    <div className={stylesOrdersDetails.price}>
                      <p className="text text_type_digits-default">
                        {i?.count}
                      </p>
                      <p className="text text_type_digits-default">x</p>
                      <p className="text text_type_digits-default">
                        {i?.price * i?.count}
                      </p>
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
      ) : (
        <div className="dfjccaic">
          <Loading />
        </div>
      )}
    </>
  );
};
