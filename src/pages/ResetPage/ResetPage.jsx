import React, { useEffect } from "react";
import { Form } from "../../components/Form/Form";
import {
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../services/action/users";
import { useHistory } from "react-router-dom";

export const ResetPage = () => {
  const successEmail = useSelector((state) => state.users.success);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  const history = useHistory();
  const [valuePassword, setValuePassword] = React.useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setValuePassword(e.target.value);
  };
  useEffect(() => {
    if (!successEmail) {
      return history.replace({ pathname: "/forgot-password" });
    }
  });
  return (
    <>
      <Form
        title="Восстановление пароля"
        button="Сохранить"
        text="Вспомнили пароль?"
        linkText="Войти"
        linkHref="/login"
        buttonFunc={() => dispatch(resetPassword(valuePassword, value))}
      >
        <li className="mt-6">
          <PasswordInput
            placeholder={"Введите новый пароль"}
            onChange={onChange}
            value={valuePassword}
            name={"password"}
          />
        </li>
        <li className="mt-6">
          <Input
            type={"text"}
            placeholder={"Введите код из письма"}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            name={"text"}
            error={false}
            ref={inputRef}
            size={"default"}
          />
        </li>
      </Form>
    </>
  );
};
