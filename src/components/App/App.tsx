import React, {useEffect, useState} from 'react';
import AppStyles from './App.module.css';
import {AppHeader} from "../AppHeader/AppHeader";
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";
import {API_BURGERS} from "../../utils/data";
import {Modal} from "../Modal/Modal";
import {ModalOrderDetails} from "../ModalOrderDetails/ModalOrderDetails";

function App() {
    const [priceModal,openPriceModal] = useState(false)
    const [ingredientsModal,openIngredientsModal] = useState(false)
        const [burgers, burgerResponse] = useState({
            arr: [],
            loading: true
        })
        useEffect(() => {
            const getResponse = async () => {
                try {
                    burgerResponse({...burgers,loading: true})
                    const response = await fetch(API_BURGERS)
                    const responseData = await response.json()
                    burgerResponse({arr: responseData.data, loading: false})
                } catch (error) {
                    console.log('Ошибка: ',error)
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
        <Modal isActive={ingredientsModal} handleIsActive={handleOrderModal} closePopup={closeOrderModal}>
            <div>
            </div>
        </Modal>
            <AppHeader/>
        <main className={AppStyles.container}>
            {burgers.loading === false && <BurgerIngredients arrData={burgers.arr}/>}
            {burgers.loading === false && <BurgerConstructor arr={burgers.arr} openModal={handlePriceModal}/>}
        </main>
    </div>
  );
}


export default App;
