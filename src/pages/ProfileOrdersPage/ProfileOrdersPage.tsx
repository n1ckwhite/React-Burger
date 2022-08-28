import { Orders } from "../../components/Orders/Orders";
import { FC, useEffect } from "react";
import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";
import stylesProfileOrdersPage from "./ProfileOrdersPage.module.css";
import { Redirect, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from "../../services/action";
import { useDispatch, useSelector } from "../../services/types";
export const ProfileOrdersPage: FC<any> = ({ handleModal }) => {
  const location = useLocation();
  const { v4: uuidv4 } = require("uuid");
  const data = useSelector((state: any) => state.data.messages);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: `wss://norma.nomoreparties.space/orders/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQ4YWM2NDJkMzRhMDAxYzI4MjgyNyIsImlhdCI6MTY2MTY5NDM4MCwiZXhwIjoxNjYxNjk1NTgwfQ.I9XUG6yXGKsBKq7u70JGZydyPWRMqQpMTJGJIYDzbfU`})
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  },[dispatch]);
  if (!window.localStorage.getItem("accessToken")) {
    return <Redirect to="/login" />;
  }
  return (
    <ProfileMenu history={"active"}>
      <ul className={stylesProfileOrdersPage.ul}>
        {data[0]?.orders &&
          data[0]?.orders.slice(0, 10).map((i: any) => {
            return (
              <li key={uuidv4()}>
                <Link
                  className={stylesProfileOrdersPage.li}
                  to={{
                    pathname: `/profile/orders/${i._id}`,
                    state: { background: location },
                  }}
                  onClick={handleModal}
                >
                  <Orders order={i} />
                </Link>
              </li>
            );
          })}
      </ul>
    </ProfileMenu>
  );
};
