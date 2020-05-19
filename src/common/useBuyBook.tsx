import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { buyNowBook, addToCartBook } from '../store/orders/order_action';
import { Order } from '../store/orders/type';

function useBuyBook() {

    const history = useHistory();
    const dispatch = useDispatch();

    function BuyNow(order: Order) {
        dispatch(buyNowBook(order));
        history.push(`/cart`)
    }


    function AddToCart(order: Order) {
        dispatch(addToCartBook(order));
    }

    return [BuyNow, AddToCart]
}

export default useBuyBook
