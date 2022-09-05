import {
  CREATE_CURRENT_INGREDIENT,
  DELETE_CONSTRUCTOR_ITEM,
  REPLACE_BUN_INGREDIENT,
  SET_SORTED_ARRAY,
  TARGET_CARD_INGREDIENT,
} from "../action";
import { currentIngredientReduce } from "./currentIngredientReduce";
const { v4: uuidv4 } = require("uuid");
const initialState = { ingredients: [], bun: [] };
export const ingredient = {
  _id: "60d3b41abdacab0026a733c6",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
};
describe("checkReduce", () => {
  it("initState", () => {
    expect(currentIngredientReduce(undefined, {})).toEqual(initialState);
  });
  it("CREATE_CURRENT_INGREDIENT", () => {
    expect(
      currentIngredientReduce(undefined, [
        { type: CREATE_CURRENT_INGREDIENT, key: uuidv4(), it: ingredient },
      ])
    ).toEqual(initialState);
  });
  it("SET_SORTED_ARRAY", () => {
    expect(
      currentIngredientReduce(undefined, [
        { type: SET_SORTED_ARRAY, sortedArray: [ingredient] },
      ])
    ).toEqual(initialState);
  });
  it("REPLACE_BUN_INGREDIENT", () => {
    expect(
      currentIngredientReduce(undefined, [
        { type: REPLACE_BUN_INGREDIENT, bun: [{ ingredient, key: uuidv4() }] },
      ])
    ).toEqual(initialState);
  });
  it("DELETE_CONSTRUCTOR_ITEM", () => {
    expect(
      currentIngredientReduce(undefined, [
        { type: DELETE_CONSTRUCTOR_ITEM, indx: ingredient._id },
      ])
    ).toEqual(initialState);
  });
  it("TARGET_CARD_INGREDIENT", () => {
    expect(
      currentIngredientReduce(undefined, [
        { type: TARGET_CARD_INGREDIENT, targetCard: ingredient },
      ])
    ).toEqual(initialState);
  });
});
