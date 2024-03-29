import React, { ChangeEvent, useEffect } from "react";
import { Form } from "../../components/Form/Form";
import {
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { resetPassword } from "../../services/action/users";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "../../services/types/index";

interface IState {
  users: {
    success: boolean;
  };
}

export const ResetPage = () => {
  const successEmail = useSelector((state: IState) => state.users.success);
  const [value, setValue] = React.useState("");
  const inputRef = React.useRef(null);
  const history = useHistory();
  const [valuePassword, setValuePassword] = React.useState("");
  const dispatch = useDispatch();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        buttonFunc={(e: SubmitEvent) => {
          e.preventDefault();
          dispatch(resetPassword(valuePassword, value));
          history.replace("/login");
        }}
      >
        <div>
          <li className="mt-6">
            <Input
              placeholder="Введите новый пароль"
              onChange={onChange}
              value={valuePassword}
              name={"password"}
            />
          </li>
          <li className="mt-6">
            <Input
              type={"text"}
              placeholder="Введите код из письма"
              onChange={(e) => setValue(e.target.value)}
              value={value}
              name={"text"}
              error={false}
              ref={inputRef}
              size={"default"}
            />
          </li>
        </div>
      </Form>
    </>
  );
};
