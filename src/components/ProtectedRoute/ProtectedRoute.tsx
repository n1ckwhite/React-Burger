import {FC} from "react";
import { Route, Redirect, RouteComponentProps} from "react-router-dom";
import { useSelector } from "react-redux";
import { HTMLProps } from "react";

interface IProps  {
  rest?: HTMLProps<RouteComponentProps>,
  children: JSX.Element,
}

export const ProtectedRoute : FC<IProps> = ({children, ...rest }) => {
  const userState = useSelector((store : any) => store.users);
  const accessToken = window.localStorage.getItem("accessToken");
  return (
    <Route
      {...rest}
      render={({ location })  =>
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
