//import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Route, Routes } from  'react-router-dom';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Shop from './Pages/Shop.jsx';
import Footer from './Components/Footer/Footer.jsx';
import LoginSignup from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kids"/>}/>
        <Route path='product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/cart' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
