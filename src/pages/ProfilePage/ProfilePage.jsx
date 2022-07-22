import { useEffect, useState } from "react";
import stylesProfilePage from "./ProfilePage.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo, patchUserInfo} from "../../services/action/users";
import { ProfileMenu } from "../../components/App/ProfileMenu/ProfileMenu";
export const ProfilePage = () => {
  const emailUser= useSelector((state) => state.users.email)
  const nameUser = useSelector((state) => state.users.name)
  const [value, setValue] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch()
  const [password, setPassword] = useState("");
  useEffect(() => {
    dispatch(getUserInfo())
    setName(nameUser)
    setValue(emailUser)
}, [dispatch]);

  const cancelFunc = () => {
    setValue(emailUser)
    setName(nameUser)
  }

  return (
      <ProfileMenu profile={'active'}>
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
            <Button type="secondary" size="medium" onClick={() =>cancelFunc()}>
              Отмена
            </Button>
            <Button type="primary" size="medium" onClick={() => dispatch(patchUserInfo(value,name))}>
              Сохранить
            </Button>
          </div>
        </li>
      </ul>
      </ProfileMenu>
  );
};
