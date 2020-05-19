import { bookReducer, initialBookState } from '../book_reducer'
import { MockData } from '../../../mocks/mock_data'
import { GetBookSuccessAction, GET_BOOK_SUCCESS, GET_BOOK_INPROGRESS, GetBookInProgressAction, GetBookFailedAction, GET_BOOK_FAILED } from '../type'

describe('Book Reducer', () => {

    it('should return the initial state', () => {
        const action: any = {}
        expect(bookReducer(undefined, action)).toEqual(initialBookState)
    })

    it('should return the  state with loading true', () => {
        const action: GetBookInProgressAction = {
            type: GET_BOOK_INPROGRESS
        }
        const state = bookReducer(undefined, action)
        expect(state.loading).toEqual(true)
    })

    it('should return the  state with books', () => {
        const action: GetBookSuccessAction = {
            type: GET_BOOK_SUCCESS,
            payload: MockData.books
        }
        const state = bookReducer(undefined, action)
        expect(state.books.length).toEqual(7)
        expect(state.loading).toEqual(false)
    })

    it('should return the  state with eror', () => {
        const action: GetBookFailedAction = {
            type: GET_BOOK_FAILED,
            payload: 'Error Occured'
        }
        const state = bookReducer(undefined, action)
        expect(state.error).toContain('Error')
        expect(state.loading).toEqual(false)
    })
})