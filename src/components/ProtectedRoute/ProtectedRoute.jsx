import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children, route, ...rest }) => {
  const userState = useSelector((store) => store.users);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userState.isLoggedIn || userState?.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
