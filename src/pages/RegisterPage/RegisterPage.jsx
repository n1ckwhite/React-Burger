import React, { useEffect } from "react";
import { Form } from "../../components/Form/Form";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { registerUser } from "../../services/action/users";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [valuePassword, setValuePassword] = React.useState("");
  const [name, setName] = React.useState("");
  const user = window.localStorage.length;
  const onChangeEmail = (e) => {
    setValue(e.target.value);
  };
  const onChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    if (user !== 0) {
      return history.replace({ pathname: "/" });
    }
  });

  return (
    <>
      <Form
        title="Регистрация"
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkHref="/login"
        buttonFunc={(e) => {
          e.preventDefault();
          dispatch(registerUser(value, valuePassword, name, history));
        }}
      >
        <li className="mt-6">
          <Input
            type={"text"}
            placeholder={"Имя"}
            onChange={onChangeName}
            value={name}
            name={"email"}
            error={false}
            ref={inputRef}
            size={"default"}
          />
        </li>
        <li className="mt-6">
          <Input
            type={"email"}
            placeholder={"E-mail"}
            onChange={onChangeEmail}
            value={value}
            name={"email"}
            error={false}
            ref={inputRef}
            size={"default"}
          />
        </li>
        <li className="mt-6">
          <PasswordInput
            onChange={onChangePassword}
            value={valuePassword}
            name={"password"}
          />
        </li>
      </Form>
    </>
  );
};
