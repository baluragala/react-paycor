import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from "../actionTypes/index";

export function searchReducer(
  prevState = { results: [], isLoading: false },
  action
) {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, prevState, {
        isLoading: true,
        term: action.term
      });
    case SEARCH_SUCCESS:
      return Object.assign({}, prevState, {
        results: action.results,
        isLoading: false
      });
    case SEARCH_ERROR:
      return Object.assign({}, prevState, {
        isLoading: false,
        error: action.error
      });
    default:
      return prevState;
  }
}
