import * as actions from '../books_action'
import * as types from '../type'
import { MockData } from '../../../mocks/mock_data'

describe('Book Actions', () => {

    it('Should return getBooksInProgress action creator', () => {
        expect(actions.getBooksInProgress()).toEqual(
            { type: types.GET_BOOK_INPROGRESS }
        )
    })

    it('Should return getBooksFailed action creator', () => {
        expect(actions.getBooksFailed('Error')).toEqual(
            { type: types.GET_BOOK_FAILED, payload: 'Error' }
        )
    })

    it('Should return getBooksSuccess action creator', () => {
        expect(actions.getBooksSuccess(MockData.books)).toEqual(
            { type: types.GET_BOOK_SUCCESS,payload: MockData.books }
        )
    })
})