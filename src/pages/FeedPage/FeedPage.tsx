import { FC, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Orders } from "../../components/Orders/Orders";
import stylesFeedPage from "./FeedPage.module.css";
import { TOrder, useDispatch, useSelector } from "../../services/types";
import {WS_CONNECTION_START,WS_CONNECTION_CLOSED} from '../../services/action/index';
interface IModal {
  handleModal: () => void;
}

export const FeedPage: FC<IModal> = ({ handleModal }) => {
  const dispatch = useDispatch()
  const location = useLocation();
  const data = useSelector((state: any) => state.data.messages);
  const done = useMemo(
    () =>
      data[0]?.orders &&
      data[0]?.orders?.filter((i: TOrder) => i.status === "done"),
    [data]
  );
  const pending = useMemo(
    () =>
      data[0]?.orders &&
      data[0]?.orders?.filter((i: TOrder) => i.status === "pending"),
    [data]
  );
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: "wss://norma.nomoreparties.space/orders/all",
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  },[dispatch])
  return (
    <div className={stylesFeedPage.feed}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={stylesFeedPage.feed_flex}>
        <div style={{ width: 608 }}>
          <ul className={stylesFeedPage.ul}>
            {data[0]?.orders &&
              data[0]?.orders.map((i: any) => {
                return (
                  <li key={i._id}>
                    <Link
                      className={stylesFeedPage.li}
                      to={{
                        pathname: `/feed/${i._id}`,
                        state: { background: location },
                      }}
                      onClick={handleModal}
                    >
                      <Orders order={i} />
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
        <div style={{ marginTop: 20, marginLeft: 60 }}>
          <div className={stylesFeedPage.status}>
            <div>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <ul className={`${stylesFeedPage.inwork}`}>
                {done &&
                  done.map((i: TOrder) => {
                    return (
                      <li key={i.number}>
                        <p className="text text_type_digits-default">
                          {i.number}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <ul
                className={`${stylesFeedPage.inwork} ${stylesFeedPage.inwork_white}`}
              >
                {pending &&
                  pending.map((i: TOrder) => {
                    return (
                      <li key={i.number}>
                        <p className="text text_type_digits-default">
                          {i.number}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <p className="text text_type_main-medium mt-15">
            Выполнено за все время:
          </p>
          <p className="text text_type_digits-large">{data[0]?.total}</p>
          <p className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </p>
          <p className="text text_type_digits-large">{data[0]?.totalToday}</p>
        </div>
      </div>
    </div>
  );
};
