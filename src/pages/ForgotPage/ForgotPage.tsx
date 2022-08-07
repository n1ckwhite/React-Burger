import React from "react";
import { Form } from "../../components/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword } from "../../services/action/users";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { Dispatch } from "react";
export const ForgotPage = () => {
  const [value, setValue] = React.useState("");
  const dispatch : Dispatch<any> = useDispatch();
  const history = useHistory();
  const user = window.localStorage.getItem('accessToken')
  const inputRef = React.useRef(null);
  if(user) {
    return (
      <Redirect to="/"/>
    )
  }
  return (
    <>
      <Form
        title="Восстановление пароля"
        button="Восстановить"
        text="Вспомнили пароль?"
        linkText="Войти"
        linkHref="/reset-password"
        buttonFunc ={(e: SubmitEvent) => {
          e.preventDefault();
          dispatch(forgotPassword(value, history));
        }}
      >
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
      </Form>
    </>
  );
};
