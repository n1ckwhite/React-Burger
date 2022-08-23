import { FC } from "react";
import { useSelector } from "react-redux";
import stylesFeedPage from "./FeedPage.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
export const FeedPage: FC<{}> = () => {
  const burgers: any = useSelector(
    (state: any) => state.ingredients.ingredients
  );
  return (
    <div className={stylesFeedPage.feed}>
      <p className="text text_type_main-large">Лента заказов</p>
      <div className={stylesFeedPage.feed_flex}>
        <ul className={stylesFeedPage.ul}>
          <li className={stylesFeedPage.li}>
            <span className={stylesFeedPage.header}>
              <p className="text text_type_digits-default">#034535</p>
              <p
                className={`text text_type_main-default ${stylesFeedPage.text}`}
              >
                Сегодня, 16:20 i-GMT+3
              </p>
            </span>
            <p className="text text_type_main-medium">
              Death Star Starship Main бургер
            </p>
            <div className={stylesFeedPage.flex}>
              <ul className={stylesFeedPage.ul_two}>
                <li className={stylesFeedPage.li_img}>
                  <img className={stylesFeedPage.img} src={burgers[0].image} />
                </li>
                <li className={stylesFeedPage.li_img}>
                  <img className={stylesFeedPage.img} src={burgers[4].image} />
                </li>
                <li className={stylesFeedPage.li_img}>
                  <img className={stylesFeedPage.img} src={burgers[4].image} />
                </li>
                <li className={stylesFeedPage.li_img}>
                  <img className={stylesFeedPage.img} src={burgers[4].image} />
                </li>
                <li className={stylesFeedPage.li_img}>
                  <img className={stylesFeedPage.img} src={burgers[4].image} />
                </li>
                <li className={stylesFeedPage.li_img}>
                  <img
                    className={`${stylesFeedPage.img} ${stylesFeedPage["img_length"]}`}
                    src={burgers[4].image}
                  />
                  <p
                    className={`${stylesFeedPage["text_length"]} text text_type_digits-default`}
                  >
                    +3
                  </p>
                </li>
              </ul>
              <span className={stylesFeedPage.price}>
                <p className="text text_type_digits-default">480 </p>
                <CurrencyIcon type="primary" />
              </span>
            </div>
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
