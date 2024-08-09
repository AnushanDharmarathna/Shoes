import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import HomeCategory from './Pages/HomeCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import nike_banner from './Components/Assets/banner_ni.png'
import addidas_banner from './Components/Assets/banner_ad.png'
import reebok_banner from './Components/Assets/banner_re.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/nike' element={<HomeCategory banner={nike_banner} category="nike"/>}/>
        <Route path='/addidas' element={<HomeCategory banner={addidas_banner} category="addidas"/>}/>
        <Route path='/reebok' element={<HomeCategory banner={reebok_banner} category="reebok"/>}/>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
