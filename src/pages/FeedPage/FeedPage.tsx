import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Orders } from "../../components/Orders/Orders";
import stylesFeedPage from "./FeedPage.module.css";
export const FeedPage: FC<any> = ({ handleModal }) => {
  const { v4: uuidv4 } = require("uuid");
  const location = useLocation();
  const data = useSelector((state: any) => state.data.data);
  const done = useMemo(
    () => data.orders && data.orders.filter((i: any) => i.status === "done"),
    [data]
  );
  const pending = useMemo(
    () => data.orders && data.orders.filter((i: any) => i.status === "pending"),
    [data]
  );
  return (
    <div className={stylesFeedPage.feed}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={stylesFeedPage.feed_flex}>
        <div style={{ width: 608 }}>
          <ul className={stylesFeedPage.ul}>
            {data.orders &&
              data.orders.map((i: any) => {
                return (
                  <li key={i._id}>
                    <Link
                      className={stylesFeedPage.li}
                      to={{
                        pathname: `/feed/123`,
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
                  done.map((i: any) => {
                    return (
                      <li key={uuidv4()}>
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
                  pending.map((i: any) => {
                    return (
                      <li key={uuidv4()}>
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
          <p className="text text_type_digits-large">{data.total}</p>
          <p className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </p>
          <p className="text text_type_digits-large">{data.totalToday}</p>
        </div>
      </div>
    </div>
  );
};
