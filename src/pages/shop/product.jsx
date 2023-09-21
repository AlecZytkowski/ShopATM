import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'

//This defines the individual product, and provides a "template" for each of the products to form to in the shop page.

export const Product = (props) => {
    const {id, productBrand, productModel, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    return (
    <div className='product'>
        <img src={productImage} alt='product'/>
        <div className="description">
            <p><b>{productBrand}</b></p>
            <p>Model: {productModel}</p>
            <p>Price: ${price}</p>
        </div>
        <button className='addToCartButton' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
    </div>
    );
}