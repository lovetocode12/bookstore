import { takeEvery, call, put } from "redux-saga/effects"
import { GetBooksApi } from "./book_api"
import { GET_BOOKS } from "./type";
import { getBooksInProgress, getBooksSuccess, getBooksFailed } from "./books_action";

export function* getBooksSaga() {
    yield put(getBooksInProgress());
    try {
        const books = yield call(GetBooksApi);
        yield put(getBooksSuccess(books));
    } catch (error) {
        yield put(getBooksFailed(error));
    }

}

export function* WatchBooks() {
    yield takeEvery(GET_BOOKS, getBooksSaga)
}