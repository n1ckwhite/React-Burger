import React from "react";
import stylesModalIngredientsDetails from './ModalIngredientsDetails.module.css';

export const ModalIngredientsDetails = ({ingredient}) => {
    return (
        <>
            <img className={stylesModalIngredientsDetails.img} src={ingredient[0]?.image} alt={ingredient[0]?.name}/>

            <p className="text text_type_main-medium mt-4">
                {ingredient[0]?.name}
            </p>
            <ul className={`${stylesModalIngredientsDetails.ul} mt-8`}>
                <li className={`${stylesModalIngredientsDetails.li} mr-5`} key={ingredient.id}>
                    <p className="text text_type_main-default text_color_inactive">
                        Каллории,ккал
                    </p>
                    <p className="text text_type_digits-default">{ingredient[0]?.calories}</p>
                </li>
                <li className={`${stylesModalIngredientsDetails.li} mr-5`} key={ingredient.id}>
                    <p className="text text_type_main-default text_color_inactive">
                   Белки,г
                    </p>
                        <p className="text text_type_digits-default">{ingredient[0]?.proteins}</p>
                </li>
                <li className={`${stylesModalIngredientsDetails.li} mr-5`} key={ingredient.id}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры,г
                    </p>
                    <p className="text text_type_digits-default">{ingredient[0]?.fat}</p>
                </li>
                <li className={`${stylesModalIngredientsDetails.li}`} key={ingredient.id}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы,г
                    </p>
                        <p className="text text_type_digits-default">{ingredient[0]?.carbohydrates}</p>
                </li>
            </ul>
        </>
    )
}