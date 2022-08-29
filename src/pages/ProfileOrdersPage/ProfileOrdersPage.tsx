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
import {
  ILocation,
  TOrder,
  useDispatch,
  useSelector,
} from "../../services/types";

interface IModal {
  handleModal: () => void;
}

export const ProfileOrdersPage: FC<IModal> = ({ handleModal }) => {
  const location = useLocation<ILocation>();
  const data = useSelector((state) => state.data.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `wss://norma.nomoreparties.space/orders/?token=${window.localStorage
        .getItem("accessToken")
        ?.slice(7)}`,
    });
    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);
  if (!window.localStorage.getItem("accessToken")) {
    return <Redirect to="/login" />;
  }
  return (
    <ProfileMenu history={"active"}>
      <ul className={stylesProfileOrdersPage.ul}>
        {data[0]?.orders &&
          data[0]?.orders.slice(0, 10).map((i: TOrder) => {
            return (
              <li key={i._id}>
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
