import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './Navbar.css'

//Simmply rendering the Navigation Bar at the top of the screen, along with the links to the cart. This is shared between all pages.

export const Navbar = () => {
    return (
    <div className='navbar'>
        <div className='headerLogo'>
            <h1>ShopATM</h1>
        </div>
        <div className='links'>
            <Link to='/'> Shop </Link>
            <Link to='/cart'>
                <ShoppingCart size={32} color='green'/>
            </Link>
        </div>
    </div>
    );
}