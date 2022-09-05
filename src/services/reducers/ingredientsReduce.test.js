import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESSFUL } from "../action";
import { ingredient } from "./cureentIngredientReduce.test";
import { ingredientsReduce } from "./ingredientsReduce";
const initialState = {
  ingredients: [],
  pending: false,
  error: "",
};
describe("checkReduce", () => {
  it("initial State", () => {
    expect(ingredientsReduce(undefined, {})).toEqual(initialState);
  });
  it("GET_INGREDIENTS_REQUEST", () => {
    expect(
      ingredientsReduce(undefined, [{ type: GET_INGREDIENTS_REQUEST }])
    ).toEqual(initialState);
  });
  it("GET_INGREDIENTS_SUCCESSFUL", () => {
    expect(
      ingredientsReduce(undefined, [
        { type: GET_INGREDIENTS_SUCCESSFUL, resp: ingredient },
      ])
    ).toEqual(initialState);
  });
  it("GET_INGREDIENTS_ERROR", () => {
    expect(
      ingredientsReduce(undefined, [
        { type: GET_INGREDIENTS_SUCCESSFUL, err: { message: "error" } },
      ])
    ).toEqual(initialState);
  });
});
