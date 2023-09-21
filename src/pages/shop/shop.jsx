import { Product } from './product'
import { PRODUCTS } from '../../products';
import './shop.css';

//This page displays all of the listed products and displays them to the user.

export const Shop = () => {
    return (
    <div className='shop'>
        <div className='shopTitle'>
            <h4>Welcome to ShopATM</h4>
            
        </div>
        <div className='products'>
        {PRODUCTS.map((product) => (
        <Product key={product.id} data ={product}/>))}
        </div>
    </div>
    );
}