import stylesForm from "./Form.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
export const Form = ({
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
    <div className={stylesForm.container}>
      <p className="text text_type_main-medium">{title}</p>
      <ul className={stylesForm.ul}>
        {children}
        <li className={`${stylesForm.li} ${stylesForm.btn}`}>
          <Button type="primary" size="medium" onClick={buttonFunc}>
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
          <Link to={linkHrefTwo} className={stylesForm.link}>
            {linkTextTwo}
          </Link>
        </p>
      )}
    </div>
  );
};
