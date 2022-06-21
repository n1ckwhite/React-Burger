import React, {useEffect, useState} from 'react';
import AppStyles from './App.module.css';
import {AppHeader} from "../AppHeader/AppHeader";
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";
import {API_BURGERS} from "../../utils/data";

function App() {
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
    return (
    <div className={AppStyles.App}>
            <AppHeader/>
        <main className={AppStyles.container}>
            {burgers.loading === false && <BurgerIngredients arrData={burgers.arr}/>}
            {burgers.loading === false && <BurgerConstructor arr={burgers.arr}/>}
        </main>
    </div>
  );
}


export default App;
