import React, { ChangeEvent } from "react";
import { Form } from "../../components/Form/Form";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { registerUser } from "../../services/action/users";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "../../services/types";
export const RegisterPage = () => {
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const [valuePassword, setValuePassword] = React.useState("");
  const [name, setName] = React.useState("");
  const user = window.localStorage.getItem("accessToken");
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setValuePassword(e.target.value);
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Form
        title="Регистрация"
        button="Зарегистрироваться"
        text="Уже зарегистрированы?"
        linkText="Войти"
        linkHref="/login"
        buttonFunc={(e: SubmitEvent) => {
          e.preventDefault();
          dispatch(registerUser(value, valuePassword, name, history));
        }}
      >
        <div>
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
        </div>
      </Form>
    </>
  );
};
