import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Orders } from "../../components/Orders/Orders";
import stylesFeedPage from "./FeedPage.module.css";
export const FeedPage: FC<any> = ({ handleModal }) => {
  const location = useLocation();
  return (
    <div className={stylesFeedPage.feed}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={stylesFeedPage.feed_flex}>
        <ul className={stylesFeedPage.ul}>
          <li>
            <Link
              className={stylesFeedPage.li}
              to={{ pathname: `/feed/123`, state: { background: location } }}
              key={123}
              onClick={handleModal}
            >
              <Orders />
            </Link>
          </li>
        </ul>
        <div style={{ marginTop: 20 }}>
          <div className={stylesFeedPage.status}>
            <div>
              <p className="text text_type_main-medium mb-6">Готовы:</p>
              <ul className={`${stylesFeedPage.inwork}`}>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="text text_type_main-medium mb-6">В работе:</p>
              <ul
                className={`${stylesFeedPage.inwork} ${stylesFeedPage.inwork_white}`}
              >
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
                <li>
                  <p className="text text_type_digits-default">034533</p>
                </li>
              </ul>
            </div>
          </div>
          <p className="text text_type_main-medium mt-15">
            Выполнено за все время:
          </p>
          <p className="text text_type_digits-large">28 752</p>
          <p className="text text_type_main-medium mt-15">
            Выполнено за сегодня:
          </p>
          <p className="text text_type_digits-large">138</p>
        </div>
      </div>
    </div>
  );
};
