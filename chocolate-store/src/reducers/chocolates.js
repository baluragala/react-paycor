import { GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS } from "../actionTypes/index";

export function chocolateReducer(
  prevState = { chocolates: [], offers: [], sales: [], isLoading: false },
  action
) {
  switch (action.type) {
    case GET_CHOCOLATES:
      return { isLoading: true };
    case GET_CHOCOLATES_SUCCESS:
      return { isLoading: false, chocolates: action.chocolates };
    default:
      return prevState;
  }
}
