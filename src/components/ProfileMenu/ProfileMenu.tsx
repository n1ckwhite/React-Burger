import { Dispatch, FC } from "react";
import stylesProfileMenu from "./ProfileMenu.module.css";
import { NavLink } from "react-router-dom";
import { exitUser } from "../../services/action/users";
import { useDispatch } from "react-redux";

interface IProps {
  children?: JSX.Element;
  history?: History | string;
  profile?: string;
}

export const ProfileMenu: FC<IProps> = ({ children, history, profile }) => {
  const dispatch: Dispatch<any> = useDispatch();
  return (
    <div className={stylesProfileMenu.block}>
      <div>
        <ul className={`${stylesProfileMenu.ul}`}>
          <li className={stylesProfileMenu.li}>
            <NavLink
              to="/profile"
              className={`${stylesProfileMenu.link} ${
                profile && stylesProfileMenu.link_active
              }`}
            >
              <p className="text text_type_main-medium">Профиль</p>
            </NavLink>
          </li>
          <li className={stylesProfileMenu.li}>
            <NavLink
              to="/profile/orders"
              className={`${stylesProfileMenu.link} ${
                history && stylesProfileMenu.link_active
              }`}
            >
              <p className="text text_type_main-medium">История заказов</p>
            </NavLink>
          </li>
          <li className={stylesProfileMenu.li}>
            <NavLink
              to="/login"
              className={stylesProfileMenu.link}
              onClick={() => dispatch(exitUser())}
            >
              <p className="text text_type_main-medium">Выход</p>
            </NavLink>
          </li>
        </ul>
        <p
          className={`${stylesProfileMenu.text} text text_type_main-default mt-20`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      {children}
    </div>
  );
};
