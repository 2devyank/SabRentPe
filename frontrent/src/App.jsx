import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navba from './components/Navba';
import Home from './components/Home';
import { useGetAllProductsQuery } from './features/rentSlice';
import Products from './components/Products';

function App() {
  const {data}=useGetAllProductsQuery();
  console.log(data);


  return (
   <BrowserRouter>
   <Navba/>
   <div>
    <Routes>
      <Route path="/register" element={<Register/>} exact/>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/login" element={<Login/>} exact/>
      <Route path="/products" element={<Products/>} exact/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
