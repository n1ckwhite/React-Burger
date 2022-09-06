describe("Запуск сервера", function () {
  it("Запуск сервера localhost:3000", function () {
    cy.visit("http://localhost:3000");
  });
  it("Вход в профиль", function () {
    cy.intercept("GET", "api/auth/user", { fixture: "user.json" });
    cy.intercept("POST", "api/orders", { fixture: "order.json" }).as(
      "postOrder"
    );

    // Устанавливаем токены:
    window.localStorage.setItem(
      "refreshToken",
      JSON.stringify("test-refreshToken")
    );
    window.localStorage.setItem(
      "accessToken",
      JSON.stringify("test-refreshToken")
    );
  });
  it("Перетаскивание ингредиента в конструктор", function () {
    cy.get('[href="/ingredients/60d3b41abdacab0026a733c6"]').trigger(
      "dragstart"
    );
    cy.get("[data-constructor=constructor]").trigger("drop");
    cy.get('[href="/ingredients/60d3b41abdacab0026a733cc"]').trigger(
      "dragstart"
    );
    cy.get("[data-constructor=constructor]").trigger("drop");
  });

  it("Открытие модального окна с описанием ингредиента", function () {
    cy.get('[href="/ingredients/60d3b41abdacab0026a733c6"]').click();
  });
  it("отображение в модальном окне данных ингредиента", function () {
    cy.get("[data-modal=modal]");
    cy.get("[data-name=name]").contains("Краторная булка N-200i");
    cy.get(":nth-child(1) > .text_type_digits-default").contains("420");
    cy.get(":nth-child(2) > .text_type_digits-default").contains("80");
    cy.get(":nth-child(3) > .text_type_digits-default").contains("24");
    cy.get(":nth-child(4) > .text_type_digits-default").contains("53");
  });
  it("закрытие модального окна деталей ингредиента при клике на кнопку закрытия", function () {
    cy.get("[data-close=button-close]").click();
  });
  it("открытие и закрытие модального окна с данными о заказе при клике по кнопке «Оформить заказ»", function () {
    cy.get("button").contains("Оформить заказ").click();
    cy.get("button > svg").click();
  });
});
