import React from 'react'
import ReactDOM from 'react-dom/client';
 import "./index.css"
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 import Navbar from './Navbar';
 import Shop from './component/shop/Shop';
 import Context from './Context/Context';
 import Cart from './component/shop/Cart';

const Index = () => {

  return (

    <div>
       <Context>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Context> 

    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Index />)
