import React, { useState } from "react";
import stylesHeader from "./AppHeader.module.css";
import { NavLink} from "react-router-dom";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
  const [classLink,setClassLink] = useState('constructor')
  return (
    <header className={stylesHeader.header}>
      <nav className={`${stylesHeader.nav}  pb-4 pt-4`}>
        <ul className={`${stylesHeader.ul}`}>
          <li className={`${stylesHeader.li}`}>
            <NavLink to="/" onClick={() => setClassLink('constructor')}
              className={`${stylesHeader.button} ${classLink === 'constructor' ? stylesHeader.button_active : ''}  pt-4 pb-4 pl-5 pr-5`}
            >
              <BurgerIcon type={classLink === 'constructor' ? 'primary' : 'secondary' }/>
              <p className="text text_type_main-default">Конструктор</p>
            </NavLink>
            <NavLink to="/" onClick={() => setClassLink('lenta')} className={`${stylesHeader.button} ${classLink === 'lenta' ? stylesHeader.button_active : ''} pt-4 pb-4 pl-5 pr-5`}>
              <ListIcon type={classLink === 'lenta' ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default">Лента заказов</p>
            </NavLink>
          </li>
          <li className={`${stylesHeader.li} ${stylesHeader.logo}`}>
            <Logo />
          </li>
          <li className={`${stylesHeader.li}`}>
              <NavLink to="/profile" onClick={() => setClassLink('profile')} className={`${stylesHeader.button} ${classLink === '/profile' ? stylesHeader.button_active : ''} pt-4 pb-4 pl-5 pr-5`}> 
              <ProfileIcon type={classLink === '/profile' ? 'primary' : 'secondary'} />
              <p className="text text_type_main-default">Личный кабинет</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
