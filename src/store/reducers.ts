import { combineReducers } from 'redux'
import { bookReducer } from './books/book_reducer'
import { orderReducer } from './orders/orders_reducer';


export const rootReducer = combineReducers({
    bookState: bookReducer,
    orderState: orderReducer
  });


  

