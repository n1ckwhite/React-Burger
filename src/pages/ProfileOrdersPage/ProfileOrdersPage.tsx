import { Orders } from "../../components/Orders/Orders";
import { FC, useEffect } from "react";
import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";
import stylesProfileOrdersPage from "./ProfileOrdersPage.module.css";
import { useDispatch } from "react-redux";
import { getData } from "../../services/action/data";
import { useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export const ProfileOrdersPage: FC<any> = ({ handleModal }) => {
  const location = useLocation();
  const dispatch: any = useDispatch();
  const { v4: uuidv4 } = require("uuid");
  const data = useSelector((state: any) => state.data.data);
  useEffect(() => {
    dispatch(
      getData(`${window.localStorage.getItem("accessToken")?.slice(7)}`)
    );
  }, [dispatch]);
  if (!window.localStorage.getItem("accessToken")) {
    return <Redirect to="/login" />;
  }
  return (
    <ProfileMenu history={"active"}>
      <ul className={stylesProfileOrdersPage.ul}>
        {data.orders &&
          data.orders.slice(0, 10).map((i: any) => {
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
