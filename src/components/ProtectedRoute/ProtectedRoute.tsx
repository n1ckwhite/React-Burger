import { FC } from "react";
import { Route, Redirect, RouteComponentProps } from "react-router-dom";
import { HTMLProps } from "react";
import { useSelector } from "../../services/types/index";
interface IProps {
  rest?: HTMLProps<RouteComponentProps>;
  children: JSX.Element;
}

interface IState {
  users: {
    isLoggedIn: boolean;
    name: string;
  };
}

export const ProtectedRoute: FC<IProps> = ({ children, ...rest }) => {
  const userState = useSelector((store: IState) => store.users);
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
