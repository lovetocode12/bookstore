import { BookState, BooksActionTypes, GET_BOOK_INPROGRESS, GET_BOOK_SUCCESS, GET_BOOK_FAILED } from "./type";

export const initialBookState: BookState = {
    loading: false,
    books: [],
    error: ''
};

export function bookReducer(state: BookState = initialBookState , action: BooksActionTypes): BookState {
    switch (action.type) {
        case GET_BOOK_INPROGRESS:
            return {
                ...state, loading: true
            };
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                books:[...state.books,...action.payload]
            };
        case GET_BOOK_FAILED:
            return {
                ...state,
                loading: false,
                error:action.payload
            };
        default:
            return state;
    }
}