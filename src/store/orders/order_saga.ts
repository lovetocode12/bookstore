import { takeEvery } from "redux-saga/effects"
import { BUYNOW_BOOK, ADDTOCART_BOOK, AddToCartBOOKAction, BuyNowBooksAction, SET_ADDRESS, GET_ADDRESS } from "./type";

export function* BuyNowSaga(action: BuyNowBooksAction) {
    // do backend logic here
    yield console.log(action);
}

function* AddToCartSaga(action: AddToCartBOOKAction) {
    // do backend logic here
    yield console.log(action);
}

function* setAddressSaga(action: AddToCartBOOKAction) {
    // do backend logic here
    yield console.log(action);
}

function* getAddressSaga(action: AddToCartBOOKAction) {
    // do backend logic here
    yield console.log(action);
}

export function* WatchOrders() {
    yield takeEvery(BUYNOW_BOOK, BuyNowSaga);
    yield takeEvery(ADDTOCART_BOOK, AddToCartSaga);
    yield takeEvery(SET_ADDRESS, setAddressSaga);
    yield takeEvery(GET_ADDRESS, getAddressSaga);
}
