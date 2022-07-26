import React, { useEffect } from "react";
import { Form } from "../../components/Form/Form";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword } from "../../services/action/users";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
export const ForgotPage = () => {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();
  const user = window.localStorage.length
  const history = useHistory();
  const inputRef = React.useRef(null);
  useEffect(() => {
    if (user !== 0) {
      return history.replace({ pathname: '/' })
    }
  })
  return (
    <>
      <Form
        title="Восстановление пароля"
        button="Восстановить"
        text="Вспомнили пароль?"
        linkText="Войти"
        linkHref="/reset-password"
        buttonFunc={() => dispatch(forgotPassword(value, history))}
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
