import { all } from "redux-saga/effects";
import CategorySaga from "./CategorySagas";

export default function* RootSaga() {
    yield all([
        CategorySaga(),
    ])
}