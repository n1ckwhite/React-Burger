import stylesForm from "./Form.module.css";
import {FC} from "react";
import { Link } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

interface IProps {
  title: string,
  button: string,
  text: string,
  textTwo?: string,
  linkText: string,
  linkHref: string,
  linkHrefTwo?: string,
  linkTextTwo?: string,
  children: JSX.Element,
  buttonFunc: (A: SubmitEvent) => void
}

export const Form :FC<IProps> = ({
  title,
  button,
  children,
  text,
  textTwo,
  linkHref,
  linkText,
  linkTextTwo,
  linkHrefTwo,
  buttonFunc,
}) => {

  return (
    <form className={stylesForm.container} onSubmit={() => buttonFunc}>
      <p className="text text_type_main-medium">{title}</p>
      <ul className={stylesForm.ul}>
        {children}
        <li className={`${stylesForm.li} ${stylesForm.btn}`}>
          <Button type="primary" size="medium">
            {button}
          </Button>
        </li>
      </ul>
      {text && (
        <p className={`text text_type_main-small ${stylesForm.p}`}>
          {text}
          <Link to={linkHref} className={stylesForm.link}>
            {linkText}
          </Link>
        </p>
      )}
      {textTwo && (
        <p className={`text text_type_main-small ${stylesForm.p}`}>
          {textTwo}
          <Link to={linkHrefTwo ? linkHrefTwo : ''} className={stylesForm.link}>
            {linkTextTwo}
          </Link>
        </p>
      )}
    </form>
  );
};


