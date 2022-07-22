import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children,route, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        window.localStorage.length !== 0 ? children : <Redirect to={route} />
      }
    />
  );
};
