import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children,route, ...rest }) => {
  const user = useSelector((state) => state.users);
  console.log(user);
  return (
    <Route
      {...rest}
      render={() =>
        user.email.length !== 0 ? children : <Redirect to={route} />
      }
    />
  );
};
