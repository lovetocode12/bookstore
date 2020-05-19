import { GET_BOOKS, Book, GET_BOOK_INPROGRESS, GET_BOOK_FAILED, GET_BOOK_SUCCESS } from "./type"


export function getBooks() {
    return {
        type: GET_BOOKS
    }
}

export function getBooksInProgress() {
    return {
        type: GET_BOOK_INPROGRESS
    }
}

export function getBooksSuccess(books: Array<Book>) {
    return {
        type: GET_BOOK_SUCCESS,
        payload: books
    }
}

export function getBooksFailed(error: string) {
    return {
        type: GET_BOOK_FAILED,
        payload: error
    }
}
