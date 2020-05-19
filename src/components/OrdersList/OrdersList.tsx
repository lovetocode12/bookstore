import React, { useContext, useEffect } from 'react'
import { Order } from '../../store/orders/type'
import { useSelector } from 'react-redux';
import { ContainerDiv } from './OrdersList_Style';
import { TitleContext } from '../../common/TitleContext';
import { RootState } from '../../store/type';

type Props = {};

const OrdersList: React.FC<Props> = () => {
    
    const orders: any = useSelector((state: RootState) => state.orderState.pastOrders);
    const context: any = useContext(TitleContext);
    const dispatchTitle = context.dispatchTitle;
    useEffect(() => {
        if (dispatchTitle) {
            dispatchTitle({ type: 'SET_TITLE', payload: 'ORDERS' })
        }
    }, [dispatchTitle])

    return (
        <ContainerDiv>
            {
                orders.length > 0 ? orders.map((order: Order, index: number) =>
                    <div key={index} className="flex-col order_container">
                        <div className="flex-row order_status">
                            <div>Order Placed : {new Date(order.orderDate).toDateString().split(' ').slice(1).join(' ')}</div>
                            <div>Status : {order.orderStatus}</div>
                        </div>
                        <div className="flex-row flex-wrap">
                            <div>
                                <img src={order.book?.url} alt={order.book?.title} />
                            </div>
                            <div className="flex-col book_details">
                                <div><span className="mediumHeading">{order.book?.title}</span></div>
                                <div>Author Name  <span className="author_container">{order.book?.author}</span></div>
                                <div>Book Price <span className="price">{order.book?.price}</span></div>
                            </div>
                        </div>
                    </div>

                ) : "No Orders"
            }
        </ContainerDiv>
    )
}
export default OrdersList;

