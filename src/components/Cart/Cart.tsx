import React, { useState, useEffect, useContext } from 'react'
import { CheckoutDiv, AdressDiv, ContainerDiv, InputsDiv } from './Cart_Style'
import { useFormik } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { Address } from '../../store/orders/type';
import { checkOut, clearCart, setAddress } from '../../store/orders/order_action';
import { TitleContext } from '../../common/TitleContext';
import { RootState } from '../../store/type';


function Cart() {

    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();
    const { orders, address } = useSelector((state: RootState) => {
        return { orders: state.orderState.currentOrders, address: state.orderState.address }
    });
    const context:any = useContext(TitleContext);
    const dispatchTitle = context.dispatchTitle;
    useEffect(() => {
        if (dispatchTitle) {
            dispatchTitle({ type: 'SET_TITLE', payload: 'CART' })
        }
    }, [dispatchTitle])

    const taxPercent = 5;
    let totalPrice = 0;
    let shippingCharge = 0;
    let taxAmount = 0;
    let itemsPrice = orders?.length && orders.reduce((acc, order) => acc + order.book.price, 0)

    if (itemsPrice > 0) {
        shippingCharge = orders.length * 3;
        taxAmount = itemsPrice * (taxPercent / 100);
        totalPrice = itemsPrice + shippingCharge + taxAmount;
    }

    const formik = useFormik({
        initialValues: {
            address1: address?.address1 || '',
            address2: address?.address2 || '',
            email: address?.email || '',
            phone: address?.phone || '',
            city: address?.city || ''
        },
        onSubmit: (values: Address) => {
            setSubmitted(state => !state);
            dispatch(setAddress(values))
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <ContainerDiv>
            <AdressDiv>
                <div className="title">{"Shipping Address"}</div>
                <form onSubmit={formik.handleSubmit}>
                    <InputsDiv submitted={submitted}>
                        <div className="div_input_conatiner">
                            <label htmlFor="address1">Address 1</label>
                            <input
                                id="address1"
                                name="address1"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.address1}
                            />
                        </div>
                        <div className="div_input_conatiner"><label htmlFor="address2">Address 2</label>
                            <input
                                id="address2"
                                name="address2"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.address2}
                            /></div>
                        <div className="div_input_conatiner"><label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            /></div>
                        <div className="div_input_conatiner"><label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                name="phone"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                            /></div>
                        <div className="div_input_conatiner"><label htmlFor="city">City</label>
                            <input
                                id="city"
                                name="city"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.city}
                            /></div>
                    </InputsDiv>
                    <div className="buttonsContainer">
                        <button type="submit">Save Address</button>
                        <button type="submit">Edit Address</button>
                    </div>
                </form>
            </AdressDiv>
            <CheckoutDiv >
            <div className="title">{"Shopping Bag"}</div>
                <div className="booksContainer">
                    <ul>
                        {
                            orders?.length > 0 ? orders.map((order, index) =>
                                <li className="order_item" key={index}>
                                    <div>{order.book.title}</div>
                                    <div className="price">{order.book.price}</div>
                                </li>) : 'No Items In the Cart'
                        }
                    </ul>
                </div>
                <div className="paymentContainer">
                    <div className="mediumHeading">Payment Info</div>
                    <div className="col-2">
                        <div>Items Price</div>
                        <div className="price">{itemsPrice}</div>
                    </div>
                    <div className="col-2">
                        <div>Tax</div>
                        <div className="price">{taxAmount}</div>
                    </div>
                    <div className="col-2">
                        <div>Shipping Charges</div>
                        <div className="price">{shippingCharge}</div>
                    </div>
                    <hr />
                    <div className="col-2">
                        <div>Total</div>
                        <div className="price">{totalPrice}</div>
                    </div>
                    <div className="buttonsContainer">
                        <button type="button" onClick={() => dispatch(checkOut())}>Checkout</button>
                        <button type="button" onClick={() => dispatch(clearCart())}>Cancel</button>
                    </div>
                </div>
            </CheckoutDiv>
        </ContainerDiv>
    )
}

export default Cart
