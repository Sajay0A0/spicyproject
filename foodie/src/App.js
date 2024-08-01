import './App.css';
import { myContext } from "./components/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Spice from './components/Spice';
import Masala from './components/Masala';
import Pickle from './components/Pickle';
import Login from './components/Login';
import Sidenav from './components/Sidenav';
import Signup from './components/Signup';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Adminpage from './admin/AdminPage';
import Brands from './components/Brands';
import Spicedetails from './components/Spicedetails';
import Masaladetails from './components/Masaladetails';
import Pickledetails from './components/Pickledetails';
import Cards from './components/Card';
import Kitchen from './Brands/Kitchen';
import Eastern from './Brands/Eastern';
import Brahmins from './Brands/Brahmins';
import Saras from './Brands/Saras';
import Description from './components/Description';

function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/foods/getproducts');
      setProduct(response.data);
    } catch (error) {
      console.error('error fetching product:', error);
    }
  };

  const val = {
    product, setProduct
  };

  return (
    <div>
      <myContext.Provider value={val}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/brands' element={<Brands />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/spice' element={<Spice />} />
            <Route path='/masala' element={<Masala />} />
            <Route path='/pickle' element={<Pickle />} />
            <Route path='/spicedet' element={<Spicedetails />} />
            <Route path='/masaladet' element={<Masaladetails />} />
            <Route path='/pickledet' element={<Pickledetails />} />
            <Route path='/card' element={<Cards />} />
            <Route path='/kitchen' element={<Kitchen />} />
            <Route path='/eastern' element={<Eastern />} />
            <Route path='/bramins' element={<Brahmins />} />
            <Route path='/saras' element={<Saras />} />
            <Route path="/description/:id" element={<Description />} />
            <Route path='/admin' element={<Adminpage />} />
            <Route path='/sidenav' element={<Sidenav />} />
            <Route path='/footer' element={<Footer />} />
          </Routes>
        </BrowserRouter>
      </myContext.Provider>
    </div>
  );
}

export default App;
