import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { FC } from "react";
import stylesOrdersDetails from "./OrdersDetails.module.css";

export const OrdersDetails: FC<any> = ({tal}) => {
  const burgers: any = [
    { image: "https://code.s3.yandex.net/react/code/bun-02.png" },
    { image: "https://code.s3.yandex.net/react/code/meat-01.png" },
  ];
  return (
    <div className={stylesOrdersDetails.block}>
      <p
        className={`text text_type_digits-default ${stylesOrdersDetails.title} ${tal && stylesOrdersDetails.tal}`}
      >
        #034533
      </p>
      <p
        className={`text text_type_main-medium mt-10 ${stylesOrdersDetails.subtitle}`}
      >
        Black Hole Singularity острый бургер
      </p>
      <p
        className={`text text_type_main-default mt-3 ${stylesOrdersDetails.status}`}
      >
        Выполнен
      </p>
      <p className="text text_type_main-medium mt-15 mb-6">Состав:</p>
      <ul className={stylesOrdersDetails.ul}>
        <li className={stylesOrdersDetails.li}>
          <div className={stylesOrdersDetails.img_block}>
            <img
              className={stylesOrdersDetails.img}
              src={burgers[0].image}
              alt="icon"
            />
          </div>
          <p
            className={`text text_type_main-default ${stylesOrdersDetails.name}`}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={stylesOrdersDetails.price}>
            <p className="text text_type_digits-default">2</p>
            <p className="text text_type_digits-default">x</p>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={stylesOrdersDetails.li}>
          <div className={stylesOrdersDetails.img_block}>
            <img
              className={stylesOrdersDetails.img}
              src={burgers[1].image}
              alt="icon"
            />
          </div>
          <p
            className={`text text_type_main-default ${stylesOrdersDetails.name}`}
          >
            Филе Люминесцентного тетраодонтимформа
          </p>
          <div className={stylesOrdersDetails.price}>
            <p className="text text_type_digits-default">1</p>
            <p className="text text_type_digits-default">x</p>
            <p className="text text_type_digits-default">300</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={stylesOrdersDetails.li}>
          <div className={stylesOrdersDetails.img_block}>
            <img
              className={stylesOrdersDetails.img}
              src={burgers[0].image}
              alt="icon"
            />
          </div>
          <p
            className={`text text_type_main-default ${stylesOrdersDetails.name}`}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={stylesOrdersDetails.price}>
            <p className="text text_type_digits-default">2</p>
            <p className="text text_type_digits-default">x</p>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={stylesOrdersDetails.li}>
          <div className={stylesOrdersDetails.img_block}>
            <img
              className={stylesOrdersDetails.img}
              src={burgers[0].image}
              alt="icon"
            />
          </div>
          <p
            className={`text text_type_main-default ${stylesOrdersDetails.name}`}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={stylesOrdersDetails.price}>
            <p className="text text_type_digits-default">2</p>
            <p className="text text_type_digits-default">x</p>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
        <li className={stylesOrdersDetails.li}>
          <div className={stylesOrdersDetails.img_block}>
            <img
              className={stylesOrdersDetails.img}
              src={burgers[0].image}
              alt="icon"
            />
          </div>
          <p
            className={`text text_type_main-default ${stylesOrdersDetails.name}`}
          >
            Флюоресцентная булка R2-D3
          </p>
          <div className={stylesOrdersDetails.price}>
            <p className="text text_type_digits-default">2</p>
            <p className="text text_type_digits-default">x</p>
            <p className="text text_type_digits-default">20</p>
            <CurrencyIcon type="primary" />
          </div>
        </li>
      </ul>
      <div className={`${stylesOrdersDetails.time} mt-10`}>
        <p
          className={`text text_type_main-default ${stylesOrdersDetails.time_p}`}
        >
          Вчера, 13:50 i-GMT+3 510
        </p>
        <div className={stylesOrdersDetails.price_block}>
          <p className="text text_type_digits-default">510</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
