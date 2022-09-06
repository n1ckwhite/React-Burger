import { CLEAR_INGREDIENT, GET_INGREDIENT } from "../action";
import { ingredient } from "./cureentIngredientReduce.test";
import { ingredientReduce,initialState } from "./ingredientReduce";


describe("checkReduce", () => {
  it("initState", () => {
    expect(ingredientReduce(undefined, [{}])).toEqual(initialState);
  });
  it("CLEAR_INGREDIENT", () => {
    expect(ingredientReduce(undefined, [{ type: CLEAR_INGREDIENT }])).toEqual(
      initialState
    );
  });
  it("GET_INGREDIENT", () => {
    expect(
      ingredientReduce(undefined, [{ type: GET_INGREDIENT, arr: [ingredient] }])
    ).toEqual(initialState);
  });
});
