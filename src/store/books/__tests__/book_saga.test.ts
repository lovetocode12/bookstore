import { MockData } from '../../../mocks/mock_data'
import { getBooksSaga } from '../book.saga'
import fetchMock from 'fetch-mock';
import { getBooksInProgress, getBooksSuccess } from '../books_action';
import { put, call } from 'redux-saga/effects';
import { GetBooksApi } from '../book_api';

fetchMock.get('http://localhost:3001/books', {
    status: 200,
    books: MockData.books
})
describe('Book Saga', () => {

    it('WatchBooks should return getBooksInProgress action', () => {
        const bookSaga = getBooksSaga()
        expect(bookSaga.next().value).toEqual(put(getBooksInProgress()))
    })

    it('WatchBooks should call GetBooksApi', () => {
        const bookSaga = getBooksSaga()
        bookSaga.next()
        expect(bookSaga.next().value).toEqual(call(GetBooksApi))
    })

    it('WatchBooks should call getBooksSuccess', () => {
        const bookSaga = getBooksSaga()
        bookSaga.next()
        bookSaga.next()
        expect(bookSaga.next(MockData.books).value).toEqual(put(getBooksSuccess(MockData.books)))
    })
})