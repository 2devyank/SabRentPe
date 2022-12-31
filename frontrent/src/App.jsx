import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  

  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path="/register" element={<Register/>} exact/>
      <Route path="/login" element={<Login/>} exact/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
