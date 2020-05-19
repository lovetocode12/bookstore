import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TitleContext } from '../../common/TitleContext'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/type';

type Props = {};

const Nav: React.FC<Props> = () => {

    const ctx: any = useContext(TitleContext);
    const title = ctx.title;
    const cartCount = useSelector((state: RootState) => state.orderState.currentOrders.length)
    return (
        <React.Fragment>
            <div className="header-title">
                <Link to="/">
                    <h2>BOOKS STORE {title !== '' ? `  |  ${title}` : null}</h2>
                </Link>
            </div>
            <div className="nav-container">
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">My Orders</Link></li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">Cart : {cartCount}</Link></li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    )
}

export default Nav
