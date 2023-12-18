import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Denim from './pages/Denim';
import TShirts from './pages/TShirts';

import Footer from './components/Footer';
import ProductData from './pages/ProductData';
function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/denim' element={<Denim/>}/>
<Route path='/tshirt' element={<TShirts/>}/>
<Route path='/productdata/:id' element={<ProductData/>}/>
<Route path='*' element={<h2>404 not found</h2>}/>




   </Routes>
   <Footer/>
   
   </BrowserRouter>
  
   </>
  );
}

export default App;
