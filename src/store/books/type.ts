
export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK_INPROGRESS = 'GET_BOOK_INPROGRESS'
export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS'
export const GET_BOOK_FAILED = 'GET_BOOK_FAILED'

export interface Book {
  id: string,
  title: string,
  description: string,
  url: string,
  price: number,
  pageCount: number,
  author: string
}



export interface BookState {
  loading: boolean;
  books: Book[];
  error: string;
}

interface GETBooksAction {
  type: typeof GET_BOOKS;
}

export interface GetBookInProgressAction {
  type: typeof GET_BOOK_INPROGRESS;
}

export interface GetBookSuccessAction {
  type: typeof GET_BOOK_SUCCESS;
  payload: Book[]
}

export interface GetBookFailedAction {
  type: typeof GET_BOOK_FAILED;
  payload: string
}

export type BooksActionTypes = GETBooksAction  
| GetBookInProgressAction | GetBookSuccessAction | GetBookFailedAction;

