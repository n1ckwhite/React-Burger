import React, {useEffect, useState} from "react";
import AppStyles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { ModalOrderDetails } from "../ModalOrderDetails/ModalOrderDetails";
import { ModalIngredientsDetails } from "../ModalIngredientDetails/ModalIngredientsDetails";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/action/ingredients";
import {getOrder} from "../../services/action/order";
import {clearIngredient, getIngredient} from "../../services/action/ingredient";

function App() {
  const ingredients = useSelector(state => state.currentIngredient.ingredients)
  const buns = useSelector(state => state.currentIngredient.bun)
  const [priceModal, openPriceModal] = useState(false);
  const [ingredientsModal, openIngredientsModal] = useState(false);
  const dispatch = useDispatch()
  const burgers = useSelector(state => state.ingredients.ingredients)
  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch]);
  const handlePriceModal = () => {
    openPriceModal(!priceModal);
  };

  const handleOpenModal = () => {
    dispatch(getOrder(ingredients.filter((item) => item._id),buns[0]._id))
    openPriceModal(true);
  };

  const openOrderModal = (i) => {
    dispatch(getIngredient(i))
    openIngredientsModal(true);
  };
  const closeOrderModal = () => {
    dispatch(clearIngredient())
    openIngredientsModal(false);
  };
  const closePriseModal = () => {
    openPriceModal(false);
  };

  return (
    <div className={AppStyles.App}>
        <Modal
          isActive={priceModal}
          handleIsActive={handlePriceModal}
          closePopup={closePriseModal}
        >
          <ModalOrderDetails />
        </Modal>
        <Modal
          isActive={ingredientsModal}
          handleIsActive={openOrderModal}
          closePopup={closeOrderModal}
          title="Детали ингредиента"
        >
          <ModalIngredientsDetails/>
        </Modal>
        <AppHeader />
        <main className={AppStyles.container}>
          {burgers.length && <BurgerIngredients openModal={openOrderModal} />}
          {burgers.length && (
            <BurgerConstructor openModal={handleOpenModal} />
          )}
        </main>
    </div>
  );
}

export default App;
