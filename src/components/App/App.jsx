import React, { useEffect, useState } from "react";
import AppStyles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { API_BURGERS } from "../../utils/data";
import { Modal } from "../Modal/Modal";
import { ModalOrderDetails } from "../ModalOrderDetails/ModalOrderDetails";
import { ModalIngredientsDetails } from "../ModalIngredientDetails/ModalIngredientsDetails";
import { IngredientsContext } from "../../services/IngredientsContext";

function App() {
  const [priceModal, openPriceModal] = useState(false);
  const [currentModalIngridients, setCurrentModalIngridients] = useState({});
  const [ingredientsModal, openIngredientsModal] = useState(false);
  const [number, setNumber] = useState("");
  const [burgers, setBurgers] = useState([]);
  useEffect(() => {
    const getResponse = () => {
      fetch(`${API_BURGERS}/ingredients`)
        .then((response) => checkResponse(response))
        .then((data) => {
          return setBurgers(data.data);
        })
        .catch((error) => {
          alert("Ошибка HTTP: " + error.message);
        });
    };
    getResponse();
  }, []);

  const handlePriceModal = () => {
    openPriceModal(!priceModal);
  };

  const handleOpenModal = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: [...burgers.filter((i) => i._id)] }),
    };
    fetch(`${API_BURGERS}/orders`, requestOptions)
      .then((response) => checkResponse(response))
      .then((data) =>
        data.success ? setNumber(data.order.number) : setNumber("")
      )
      .catch((error) => {
        alert("Ошибка HTTP: " + error.message);
      });
    openPriceModal(true);
  };

  function checkResponse(response) {
    if (!response.ok) {
      throw new Error("Ответ сети был не ok.");
    }
    return response.json();
  }

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
