import { Orders } from "../../components/Orders/Orders";
import { FC } from "react";
import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";
import { Link, useLocation } from "react-router-dom";
import stylesProfileOrdersPage from "./ProfileOrdersPage.module.css";
export const ProfileOrdersPage: FC<any> = ({ handleModal }) => {
  const location = useLocation();
  return (
    <ProfileMenu history={"active"}>
      <ul className={stylesProfileOrdersPage.ul}>
        <li>
          <Link
            className={stylesProfileOrdersPage.li}
            to={{
              pathname: `/profile/orders/123`,
              state: { background: location },
            }}
            key={123}
            onClick={handleModal}
          >
            <Orders />
          </Link>
        </li>
      </ul>
    </ProfileMenu>
  );
};
