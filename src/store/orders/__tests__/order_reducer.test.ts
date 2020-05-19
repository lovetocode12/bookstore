import { orderReducer, initialOrderState } from '../orders_reducer'
import { MockData } from '../../../mocks/mock_data'
import { ADDTOCART_BOOK, BuyNowBooksAction, BUYNOW_BOOK, OrderState, AddToCartBOOKAction, CheckoutCartAction, CHECKOUT_CART, ClearCartAction, CLEAR_CART, SetAddressAction, SET_ADDRESS } from '../type'

describe('Book Reducer', () => {

    it('should return the initial state', () => {
        const action: any = {}
        expect(orderReducer(undefined, action)).toEqual(initialOrderState)
    })

    it('should return the  state containing order with BuyNowBooksAction', () => {
        const action: BuyNowBooksAction = {
            type: BUYNOW_BOOK,
            payload: MockData.Order
        }
        const state:OrderState = orderReducer(undefined, action)
        expect(state.currentOrders.length).toEqual(1)
    })

    
    it('should return the  state past order with CheckoutCartAction', () => {
        const buyNowAction: BuyNowBooksAction = {
            type: BUYNOW_BOOK,
            payload: MockData.Order
        }
        const stateWithButNowItem:any = orderReducer(undefined, buyNowAction)
        const action: CheckoutCartAction = {
            type: CHECKOUT_CART
        }
        const state:OrderState = orderReducer(stateWithButNowItem, action)
        expect(state.pastOrders.length).toEqual(1)
    })

    it('should return the  state containing order with AddToCartBOOKAction', () => {
        const action: AddToCartBOOKAction = {
            type: ADDTOCART_BOOK,
            payload: MockData.Order
        }
        const state:OrderState = orderReducer(undefined, action)
        expect(state.currentOrders.length).toEqual(1)
    })

    it('should clear Cart with ClearCartAction', () => {
        const buyNowAction: BuyNowBooksAction = {
            type: BUYNOW_BOOK,
            payload: MockData.Order
        }
        const stateWithButNowItem:any = orderReducer(undefined, buyNowAction)
        const action: ClearCartAction = {
            type: CLEAR_CART
        }
        const state:OrderState = orderReducer(stateWithButNowItem, action)
        expect(state.pastOrders.length).toEqual(0)
    })

    it('should return the  state with address order with SetAddressAction', () => {
        const action: SetAddressAction = {
            type: SET_ADDRESS,
            payload: MockData.Address
        }
        const state:OrderState = orderReducer(undefined, action)
        expect(state.address).toEqual(MockData.Address)
    })
})