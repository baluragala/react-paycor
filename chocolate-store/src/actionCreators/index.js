import {
  GET_CHOCOLATES,
  GIFT_CHOCOLATE,
  GET_CHOCOLATES_SUCCESS,
  GET_CHOCOLATES_FAILURE,
  GIFT_CHOCOLATE_SUCCESS,
  GIFT_CHOCOLATE_FAILURE
} from "../actionTypes/index";

export function getChocolatesActionCreator() {
  return { type: GET_CHOCOLATES };
}

export function getChocolatesSuccessActionCreator(chocolates) {
  return { type: GET_CHOCOLATES_SUCCESS, chocolates };
}

export function getChocolatesErrorActionCreator(error) {
  return { type: GET_CHOCOLATES_FAILURE, error };
}

export function giftChocolate(id) {
  return { type: GIFT_CHOCOLATE, id };
}

export function giftChocolateSuccessActionCreator(chocolates) {
  return { type: GIFT_CHOCOLATE_SUCCESS, chocolates };
}

export function giftChocolateErrorActionCreator(error) {
  return { type: GIFT_CHOCOLATE_FAILURE, error };
}
