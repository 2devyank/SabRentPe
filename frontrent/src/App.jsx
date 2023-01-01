import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navba from './components/Navba';
import Home from './components/Home';

function App() {
  

  return (
   <BrowserRouter>
   <Navba/>
   <div>
    <Routes>
      <Route path="/register" element={<Register/>} exact/>
      <Route path="/" element={<Home/>} exact/>
      <Route path="/login" element={<Login/>} exact/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
