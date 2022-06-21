import React from 'react';
import AppStyles from './App.module.css';
import {AppHeader} from "../AppHeader/AppHeader";
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";
import {data} from "../../utils/data";

function App() {
  return (
    <div className={AppStyles.App}>
            <AppHeader/>
        <main className={AppStyles.container}>
            <BurgerIngredients arrData={data}/>
            <BurgerConstructor arr={data}/>
        </main>
    </div>
  );
}


export default App;
