import { getChocolatesSuccessActionCreator } from "./actionCreators";
import { put, takeLatest } from "redux-saga/effects";
import { GET_CHOCOLATES } from "./actionTypes/index";

function* getChocolates() {
  let url = "http://localhost:4000/chocolates";
  let chocolates = yield fetch(url).then(r => r.json());
  console.log(chocolates);
  yield put(getChocolatesSuccessActionCreator(chocolates));
}

export function* getChocolatesWatcher() {
  console.log("Watcher started");
  yield takeLatest(GET_CHOCOLATES, getChocolates);
}
