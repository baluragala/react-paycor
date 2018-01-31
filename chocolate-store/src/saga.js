import { getChocolatesSuccessActionCreator } from "./actionCreators";
import { searchSuccess } from "./actionCreators/search";
import { put, takeLatest, takeEvery, throttle } from "redux-saga/effects";
import { GET_CHOCOLATES, SEARCH } from "./actionTypes/index";

function* getChocolates() {
  let url = "http://localhost:4000/chocolates";
  let chocolates = yield fetch(url).then(r => r.json());
  console.log(chocolates);
  yield put(getChocolatesSuccessActionCreator(chocolates));
}

function* search(action) {
  let url = `http://localhost:4000/chocolates?name_like=${action.term}`;
  let chocolates = yield fetch(url).then(r => r.json());
  console.log(chocolates);
  yield put(searchSuccess(chocolates));
}

export function* getAppWatchers() {
  console.log("Watcher started");
  yield [
    takeLatest(GET_CHOCOLATES, getChocolates),
    throttle(2000, SEARCH, search)
  ];
}
