import * as actions from '../order_action'
import * as types from '../type'
import { MockData } from '../../../mocks/mock_data'

describe('Book Actions', () => {


    it('Should return getAddress action creator', () => {
        expect(actions.getAddress()).toEqual(
            { type: types.GET_ADDRESS }
        )
    })

    it('Should return addToCartBook action creator', () => {
        expect(actions.addToCartBook(MockData.Order)).toEqual(
            { type: types.ADDTOCART_BOOK, payload: MockData.Order }
        )
    })

    it('Should return buyNowBook action creator', () => {
        expect(actions.buyNowBook(MockData.Order)).toEqual(
            { type: types.BUYNOW_BOOK, payload: MockData.Order }
        )
    })

    it('Should return checkOut action creator', () => {
        expect(actions.checkOut()).toEqual(
            { type: types.CHECKOUT_CART }
        )
    })

    it('Should return setAddress action creator', () => {
        expect(actions.setAddress(MockData.Address)).toEqual(
            { type: types.SET_ADDRESS, payload: MockData.Address }
        )
    })
})