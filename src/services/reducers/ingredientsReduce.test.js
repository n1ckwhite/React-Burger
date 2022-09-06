import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESSFUL } from "../action";
import { ingredient } from "./cureentIngredientReduce.test";
import { ingredientsReduce,initialIngredients } from "./ingredientsReduce";

describe("checkReduce", () => {
  it("initial State", () => {
    expect(ingredientsReduce(undefined, {})).toEqual(initialIngredients);
  });
  it("GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReduce(undefined, [{ type: GET_INGREDIENTS_REQUEST }])
    ).toEqual(initialIngredients);
  });
  it("GET_INGREDIENTS_SUCCESSFUL", () => {
    expect(
      ingredientsReduce(undefined, [
        { type: GET_INGREDIENTS_SUCCESSFUL, resp: ingredient },
      ])
    ).toEqual(initialIngredients);
  });
  it("GET_INGREDIENTS_ERROR", () => {
    expect(
      ingredientsReduce(undefined, [
        { type: GET_INGREDIENTS_SUCCESSFUL, err: { message: "error" } },
      ])
    ).toEqual(initialIngredients);
  });
});
