import React from "react";
import { Form } from "../../components/Form/Form";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/action/users";
import { Redirect, useHistory } from "react-router-dom";
export const LoginPage = () => {
  const [value, setValue] = React.useState("");
  const dispatch : any = useDispatch();
  const history = useHistory();
  const user = window.localStorage.getItem("accessToken");
  const inputRef = React.useRef(null);
  const [valuePassword, setValuePassword] = React.useState("");
  const onChange = (e : any) => {
    setValuePassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      title="Вход"
      button="Войти"
      text="Вы — новый пользователь?"
      linkText="Зарегистрироваться"
      linkHref="/register"
      textTwo="Забыли пароль?"
      linkTextTwo="Восстановить пароль"
      linkHrefTwo="/forgot-password"
      buttonFunc={(e : any) => {
        e.preventDefault();
        dispatch(loginUser(value, valuePassword, history));
      }}
    >
      <div>
      <li className="mt-6">
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={"email"}
          error={false}
          ref={inputRef}
          size={"default"}
        />
      </li>
      <li className="mt-6">
        <PasswordInput
          onChange={onChange}
          value={valuePassword}
          name={"password"}
        />
      </li>
      </div>
    </Form>
  );
};
