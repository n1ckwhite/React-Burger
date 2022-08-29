import { useEffect, useState } from "react";
import stylesProfilePage from "./ProfilePage.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { getUserInfo, patchUserInfo } from "../../services/action/users";
import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/types/index";
import { Button } from "../../components/Button/Button";
interface IState {
  users: {
    email: string;
    name: string;
  };
}

export const ProfilePage = () => {
  const emailUser = useSelector((state: IState) => state.users.email);
  const nameUser = useSelector((state: IState) => state.users.name);
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();
  const user = window.localStorage.getItem("accessToken");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (user) {
      dispatch(getUserInfo());
      setName(nameUser);
      setValue(emailUser);
    } else {
      history.replace({ pathname: "/login" });
    }
  }, [dispatch, emailUser, nameUser, user, history]);

  const cancelFunc = () => {
    setValue(emailUser);
    setName(nameUser);
  };

  return (
    <ProfileMenu profile={"active"}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(patchUserInfo(value, name));
        }}
      >
        <ul className={`${stylesProfilePage.form}`}>
          <li className={stylesProfilePage.form_li}>
            <Input
              type={"text"}
              placeholder={"Имя"}
              onChange={(e) => setName(e.target.value)}
              icon={"EditIcon"}
              value={name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </li>
          <li className={stylesProfilePage.form_li}>
            <Input
              type={"text"}
              placeholder={"Логин"}
              onChange={(e) => setValue(e.target.value)}
              icon={"EditIcon"}
              value={value}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </li>
          <li className={stylesProfilePage.form_li}>
            <Input
              type={"password"}
              placeholder={"Пароль"}
              onChange={(e) => setPassword(e.target.value)}
              icon={"EditIcon"}
              value={password}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
            />
          </li>
          <li className={stylesProfilePage.form_li}>
            <div className={stylesProfilePage.buttons}>
              <Button
                type="secondary"
                size="medium"
                onClick={() => cancelFunc()}
              >
                Отмена
              </Button>
              <Button type="primary" size="medium">
                Сохранить
              </Button>
            </div>
          </li>
        </ul>
      </form>
    </ProfileMenu>
  );
};
