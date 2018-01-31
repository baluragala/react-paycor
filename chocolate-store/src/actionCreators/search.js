import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from "../actionTypes/index";

export function search(term) {
  return { type: SEARCH, term };
}

export function searchSuccess(results) {
  return { type: SEARCH_SUCCESS, results };
}

export function searchError(error) {
  return { type: SEARCH_ERROR, error };
}
