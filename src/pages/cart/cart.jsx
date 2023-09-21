import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartItem'
import './cart.css'

//This page uses context to remember what items were previously added to the cart, then displays them to the user, along with the totals of all of the items currently added to cart.

export const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

    return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items:</h1>
        </div>
        <div className='cartItems'>
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product}/>
                } else {
                    return null
                }
            })}
        </div>
    {totalAmount > 0 ?
        <div className="checkout">
            <h2>Subtotal: ${totalAmount}</h2>
            <button onClick={() => navigate('/')}>Continue Shopping</button>
            <button>Checkout</button>
        </div>
        : <div className="checkout"><h3 className="emptyCart">Your cart is empty!</h3>
        <button onClick={() => navigate('/')}>Continue Shopping</button>
        </div>}
    </div>
    );
}