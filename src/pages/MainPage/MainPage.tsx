import { FC, useState } from "react";
import MainPageStyles from "./MainPage.module.css";
import { BurgerIngredients } from "../../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../../components/BurgerConstructor/BurgerConstructor";
import { Modal } from "../../components/Modal/Modal";
import { ModalOrderDetails } from "../../components/ModalOrderDetails/ModalOrderDetails";
import { getOrder } from "../../services/action/order";
import { useDispatch, useSelector } from "../../services/types/index";
interface Iprops {
  openModal: () => void;
}

const MainPage: FC<Iprops> = ({ openModal }) => {
  const ingredients = useSelector(
    (state: any) => state.currentIngredient.ingredients
  );
  const buns = useSelector((state: any) => state.currentIngredient.bun);
  const [priceModal, openPriceModal] = useState(false);
  const dispatch = useDispatch();
  const burgers = useSelector((state: any) => state.ingredients.ingredients);

  const handlePriceModal = () => {
    openPriceModal(!priceModal);
  };

  const handleOpenModal = () => {
    dispatch(
      getOrder(
        ingredients.map((item: any) => item._id),
        buns[0]._id
      )
    );
    openPriceModal(true);
  };

  const closePriseModal = () => {
    openPriceModal(false);
  };

  return (
    <div className={MainPageStyles.App}>
      <Modal
        isActive={priceModal}
        handleIsActive={handlePriceModal}
        closePopup={closePriseModal}
      >
        <ModalOrderDetails />
      </Modal>

      <main className={MainPageStyles.container}>
        {burgers.length && <BurgerIngredients openModal={openModal} />}
        {burgers.length && <BurgerConstructor openModal={handleOpenModal} />}
      </main>
    </div>
  );
};

export default MainPage;
