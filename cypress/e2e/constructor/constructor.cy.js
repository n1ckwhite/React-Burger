import setLocalStorage from "cypress-localstorage-commands";
describe("Запуск сервера", function () {
  it("Запуск сервера localhost:3000", function () {
    cy.visit("http://localhost:3000");
  });
  it("Вход в профиль", function () {
    cy.get(":nth-child(3) > .AppHeader_button__V41QH").click();
    cy.get(
      ":nth-child(1) > .input__container > .input > .input__textfield"
    ).type("nickwhite7788@yandex.ru");
    cy.get(
      ":nth-child(2) > .input__container > .input > .input__textfield"
    ).type("123123");
    cy.get("button").contains("Войти").click();
    cy.setLocalStorage(
      "accessToken",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQ4YWM2NDJkMzRhMDAxYzI4MjgyNyIsImlhdCI6MTY2MjIwMTQ2MywiZXhwIjoxNjYyMjAyNjYzfQ.B4wtJJU5AuyvF6uAYEeJrPVFquMQuzT6GRe_D68F0xM"
    );
  });
  it("Перетаскивание ингредиента в конструктор", function () {
    cy.get(
      '[href="/ingredients/60d3b41abdacab0026a733c6"] > .IngredientCard_li__qbUVa'
    ).trigger("dragstart");
    cy.get(".BurgerConstructor_liBunTop__uXqpO").trigger("drop");
    cy.get(
      '[href="/ingredients/60d3b41abdacab0026a733cc"] > .IngredientCard_li__qbUVa'
    ).trigger("dragstart");
    cy.get(".BurgerConstructor_liBun__84Yrh").trigger("drop");
  });

  it("Открытие модального окна с описанием ингредиента", function () {
    cy.get(
      '[href="/ingredients/60d3b41abdacab0026a733c6"] > .IngredientCard_li__qbUVa'
    ).click();
  });
  it("отображение в модальном окне данных ингредиента", function () {
    cy.get(".ModalIngredientsDetails_img__zKOzM");
    cy.get(
      ".ModalIngredientsDetails_div__4nNje > .text_type_main-medium"
    ).contains("Краторная булка N-200i");
    cy.get(
      ".ModalIngredientsDetails_ul__49dsf > :nth-child(1) > .text_type_digits-default"
    ).contains("420");
    cy.get(":nth-child(2) > .text_type_digits-default").contains("80");
    cy.get(":nth-child(3) > .text_type_digits-default").contains("24");
    cy.get(":nth-child(4) > .text_type_digits-default").contains("53");
  });
  it("закрытие модального окна деталей ингредиента при клике на кнопку закрытия", function () {
    cy.get(".Modal_row__lRfC0 > .Modal_button__PTCbC > svg > path").click();
  });
  it("открытие и закрытие модального окна с данными о заказе при клике по кнопке «Оформить заказ»", function () {
    cy.get("button").contains("Оформить заказ").click();
    cy.get(".Modal_button__PTCbC > svg > path").click();
  });
});
