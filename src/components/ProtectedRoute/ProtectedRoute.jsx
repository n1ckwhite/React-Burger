import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
export const ProtectedRoute = ({ children, route, ...rest }) => {
  const userState = useSelector((store) => store.users);
  const accessToken = window.localStorage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        accessToken || userState.isLoggedIn || userState?.name ? (
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
