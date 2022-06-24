import React, {useEffect, useState} from 'react';
import AppStyles from './App.module.css';
import {AppHeader} from "../AppHeader/AppHeader";
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";
import {API_BURGERS} from "../../utils/data";
import {Modal} from "../Modal/Modal";
import {ModalOrderDetails} from "../ModalOrderDetails/ModalOrderDetails";
import {ModalIngredientsDetails} from "../ModalIngredientDetails/ModalIngredientsDetails";

function App() {
    const [priceModal,openPriceModal] = useState(false)
    const [currentItem,setCurrentItem] = useState({})
    const [ingredientsModal,openIngredientsModal] = useState(false)
    const [burgers, burgerResponse] = useState({
            arr: [],
            loading: true
        })
        useEffect(() => {
            const getResponse = async () => {
                    burgerResponse({...burgers,loading: true})
                    const response = await fetch(API_BURGERS)
                    if(response.ok) {
                        const responseData = await response.json()
                        burgerResponse({arr: responseData.data, loading: false})
                    } else {
                        alert("Ошибка HTTP: " + response.status);
                    }
            }
            getResponse()
        },[]
 )
    const handlePriceModal = () => {
        openPriceModal(!priceModal)
    }
    const handleOrderModal = () => {
        openIngredientsModal(!ingredientsModal)
    }
    const closeOrderModal = () => {
        openIngredientsModal(false)

    }
    const closePriseModal = () => {
        openPriceModal(false)
    }

    return (

    <div className={AppStyles.App}>
        <Modal isActive={priceModal} handleIsActive={handlePriceModal} closePopup={closePriseModal}>
            <ModalOrderDetails/>
        </Modal>
        <Modal isActive={ingredientsModal} handleIsActive={handleOrderModal} closePopup={closeOrderModal} title="Детали ингредиента">
        <ModalIngredientsDetails ingredient={burgers.arr}/>
        </Modal>
            <AppHeader/>
        <main className={AppStyles.container}>
            {!burgers.loading && <BurgerIngredients arrData={burgers.arr} openModal={handleOrderModal}/>}
            {!burgers.loading && <BurgerConstructor arr={burgers.arr[0]} openModal={handlePriceModal}/>}
        </main>
    </div>
  );
}

export default App;

