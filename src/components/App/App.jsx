import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { ModalOrderDetails } from "../ModalOrderDetails/ModalOrderDetails";
import { ModalIngredientsDetails } from "../ModalIngredientDetails/ModalIngredientsDetails";
import { IngredientsContext } from "../../services/IngredientsContext";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/action/ingredients";
import {getOrder} from "../../services/action/order";

function App() {
  const [priceModal, openPriceModal] = useState(false);
  const [currentModalIngridients, setCurrentModalIngridients] = useState({});
  const [ingredientsModal, openIngredientsModal] = useState(false);
  const dispatch = useDispatch()
  const burgers = useSelector(state => state.ingredients.ingredients)
  const number = useSelector(state => state.order.order)
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);
  const handlePriceModal = () => {
    openPriceModal(!priceModal);
  };

  const handleOpenModal = () => {
    dispatch(getOrder(burgers))
    openPriceModal(true);
  };

  const handleOrderModal = (i) => {
    setCurrentModalIngridients(i);
    openIngredientsModal((v) => !v);
  };
  const closeOrderModal = () => {
    openIngredientsModal(false);
  };
  const closePriseModal = () => {
    openPriceModal(false);
  };

  return (
    <div className={AppStyles.App}>
      <IngredientsContext.Provider value={burgers}>
        <Modal
          isActive={priceModal}
          handleIsActive={handlePriceModal}
          closePopup={closePriseModal}
        >
          <ModalOrderDetails number={number} />
        </Modal>
        <Modal
          isActive={ingredientsModal}
          handleIsActive={handleOrderModal}
          closePopup={closeOrderModal}
          title="Детали ингредиента"
        >
          <ModalIngredientsDetails ingredient={currentModalIngridients} />
        </Modal>
        <AppHeader />
        <main className={AppStyles.container}>
          {burgers.length && <BurgerIngredients openModal={handleOrderModal} />}
          {burgers.length && (
            <BurgerConstructor bur={burgers[0]} openModal={handleOpenModal} />
          )}
        </main>
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;
