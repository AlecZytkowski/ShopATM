import './App.css';
import { Footer } from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/shop';
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

//Here the app renders all of the individual components, and also uses ReactRouter to navigate to different pages. Also, Contex provides data that is available to all of the different pages.

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/shopatm' element={<Shop />} />
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
      <Footer />
      </ShopContextProvider>
    </div>
  );
}

export default App;
