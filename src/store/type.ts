import { BookState } from "./books/type";
import { OrderState } from "./orders/type";


export interface RootState {
    bookState: BookState;
    orderState: OrderState;
}