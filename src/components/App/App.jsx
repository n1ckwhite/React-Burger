import React, {useEffect, useMemo, useState} from 'react';
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
    const [currentModalIngridients,setCurrentModalIngridients] = useState({})
    const [ingredientsModal,openIngredientsModal] = useState(false)
    const [burgers, setBurgers] = useState([])
    const ingredientsResultBread = useMemo(() => {
        return burgers.filter((item) => (item.type !== 'bun'))
    },[burgers])
        useEffect(() => {
            const getResponse = async () => {
                    const response = await fetch(API_BURGERS)
                    if(response.ok) {
                        const responseData = await response.json()
                        setBurgers(responseData.data)
                    } else {
                        alert("Ошибка HTTP: " + response.status);
                    }
            }
            getResponse()
        },
            []
 )
    const handlePriceModal = () => {
        openPriceModal(!priceModal)
    }
    const handleOrderModal = (i) => {
        setCurrentModalIngridients(i)
        openIngredientsModal((v) => !v)
    }
    const closeOrderModal = () => {
        openIngredientsModal(false)

    }
    const closePriseModal = () => {
        openPriceModal(false)
    }

    const notBun = () => {
        burgers.arr.filter(() => {
            return
        })
    }


    return (

    <div className={AppStyles.App}>
        <Modal isActive={priceModal} handleIsActive={handlePriceModal} closePopup={closePriseModal}>
            <ModalOrderDetails/>
        </Modal>
        <Modal isActive={ingredientsModal} handleIsActive={handleOrderModal} closePopup={closeOrderModal} title="Детали ингредиента">
        <ModalIngredientsDetails ingredient={currentModalIngridients}/>
        </Modal>
            <AppHeader/>
        <main className={AppStyles.container}>
            {burgers.length && <BurgerIngredients arrData={burgers} openModal={handleOrderModal}/>}
            {burgers.length && <BurgerConstructor bur={burgers[0]} ingredients={ingredientsResultBread} openModal={handlePriceModal}/>}
        </main>
    </div>
  );
}

export default App;

