import {  all } from 'redux-saga/effects'
import { WatchBooks } from './books/book.saga'
import { WatchOrders } from './orders/order_saga'

export default function* rootSaga() {
  yield  all([
        WatchBooks(),
        WatchOrders()
    ])
} 