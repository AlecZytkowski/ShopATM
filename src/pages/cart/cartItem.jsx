import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
    const {id, productBrand, productModel, price, productImage} = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    return (
        <div className='cartItem'>
                <img src={productImage} alt='Product'/>
            <div className="description">
                <p><b>{productBrand}</b></p>
                <p>Model: {productModel}</p>
                <p>Price: ${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}></input>
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>   
        </div>
    )
}