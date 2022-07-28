import stylesForm from "./Form.module.css";
import React from "react";
import PropTypes from "prop-types";
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
    <form className={stylesForm.container} onSubmit={buttonFunc}>
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
          <Link to={linkHrefTwo} className={stylesForm.link}>
            {linkTextTwo}
          </Link>
        </p>
      )}
    </form>
  );
};


Form.propTypes = {
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  textTwo: PropTypes.string,
  linkHref: PropTypes.string.isRequired,
  linkHrefTwo: PropTypes.string,
  linkTextTwo: PropTypes.string,
  buttonFunc: PropTypes.func.isRequired,
}