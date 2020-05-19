import {BuyNowSaga} from '../order_saga'
import { BUYNOW_BOOK, ADDTOCART_BOOK, AddToCartBOOKAction, 
    BuyNowBooksAction, SET_ADDRESS, GET_ADDRESS } from "../type";
import { MockData } from '../../../mocks/mock_data';

describe('Order Saga', () => {

    it('BuyNowSaga should return undefined', () => {
        const action: BuyNowBooksAction= {
            type: BUYNOW_BOOK,
            payload: MockData.Order
        }
        const bookSaga = BuyNowSaga(action)
        expect(bookSaga.next().value).toBeUndefined()
    })
})

