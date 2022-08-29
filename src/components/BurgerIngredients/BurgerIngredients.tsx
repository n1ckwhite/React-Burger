import React, { FC, useRef, useState, RefObject } from "react";
import stylesBurgerIngridients from "./BurgerIngredients.module.css";
import { BurgerIngredient } from "../BurgerIngredient/BurgetIngredient";
import { Tab } from "../Tab/Tab";
interface IProps {
  openModal: () => void;
}

export const BurgerIngredients: FC<IProps> = ({ openModal }) => {
  const [currentTab, setCurrentTab] = useState("Булки");

  const sectionRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLHeadingElement>(null);
  const sauceRef = useRef<HTMLHeadingElement>(null);
  const mainRef = useRef<HTMLHeadingElement>(null);

  const scrollToRef = (ref: RefObject<HTMLHeadingElement>) => {
    if (sectionRef?.current && ref?.current) {
      sectionRef.current.scrollTo(0, ref.current.offsetTop - 243.59375 - 40);
    }
  };

  const handler = (e: React.SyntheticEvent) => {
    if (sauceRef?.current && mainRef?.current) {
      const distanceFromSauceBlockToRelative =
        sauceRef.current.getBoundingClientRect().top - 243.59375 - 40;
      const distanceFromMainBlockToRelative =
        mainRef.current.getBoundingClientRect().top - 243.59375 - 40;
      if (distanceFromMainBlockToRelative <= 2) {
        if (currentTab !== "Начинки") setCurrentTab("Начинки");
      } else if (distanceFromSauceBlockToRelative <= 2) {
        if (currentTab !== "Соусы") setCurrentTab("Соусы");
      } else if (currentTab !== "Булки") {
        setCurrentTab("Булки");
      }
    }
  };

  return (
    <section className={`${stylesBurgerIngridients.section} mt-10`}>
      <p className="text text_type_main-large">Собери бургер</p>
      <div className={`${stylesBurgerIngridients.nav} mt-5`}>
        <a className={stylesBurgerIngridients.a} href="#bun">
          <Tab
            value="Булки"
            active={currentTab === "Булки"}
            onClick={(ingredientType) => {
              setCurrentTab(ingredientType);
              scrollToRef(bunRef);
            }}
          >
            Булки
          </Tab>
        </a>
        <a className={stylesBurgerIngridients.a} href="#souse">
          <Tab
            value="Соусы"
            active={currentTab === "Соусы"}
            onClick={(ingredientType) => {
              setCurrentTab(ingredientType);
              scrollToRef(sauceRef);
            }}
          >
            Соусы
          </Tab>
        </a>
        <a className={stylesBurgerIngridients.a} href="#ingredient">
          <Tab
            value="Начинки"
            active={currentTab === "Начинки"}
            onClick={(ingredientType) => {
              setCurrentTab(ingredientType);
              scrollToRef(mainRef);
            }}
          >
            Начинки
          </Tab>
        </a>
      </div>
      <BurgerIngredient
        sectionRef={sectionRef}
        handler={handler}
        bunRef={bunRef}
        sauceRef={sauceRef}
        mainRef={mainRef}
        handleModal={openModal}
      />
    </section>
  );
};
