import { Orders } from "../../components/Orders/Orders";
import { ProfileMenu } from "../../components/ProfileMenu/ProfileMenu";
export const ProfileOrdersPage = () => {
  return (
    <ProfileMenu history={"active"}>
      <Orders />
    </ProfileMenu>
  );
};
