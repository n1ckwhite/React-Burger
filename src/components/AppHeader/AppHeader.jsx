import React from "react";
import stylesHeader from "./AppHeader.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
  return (
    <header className={stylesHeader.header}>
      <nav className={`${stylesHeader.nav}  pb-4 pt-4`}>
        <ul className={`${stylesHeader.ul}`}>
          <li className={`${stylesHeader.li}`}>
            <button
              className={`${stylesHeader.button} ${stylesHeader.button_active} pt-4 pb-4 pl-5 pr-5`}
            >
              <BurgerIcon type="primary" />
              <p className="text text_type_main-default">Конструктор</p>
            </button>
            <button className={`${stylesHeader.button} pt-4 pb-4 pl-5 pr-5`}>
              <ListIcon type="secondary" />
              <p className="text text_type_main-default">Конструктор</p>
            </button>
          </li>
          <li className={`${stylesHeader.li} ${stylesHeader.logo}`}>
            <Logo />
          </li>
          <li className={`${stylesHeader.li}`}>
            <button className={`${stylesHeader.button} pt-4 pb-4 pl-5 pr-5`}>
              <ProfileIcon type="secondary" />
              <p className="text text_type_main-default">Личный кабинет</p>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
