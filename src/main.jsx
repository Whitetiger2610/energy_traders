import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import UserProvider from './context/UserContext.jsx'
import CartProvider from './context/CartContext.jsx'
import ProductProvider from './context/ProductContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
          <CartProvider>
            <ProductProvider>
              <App/>
            </ProductProvider>
          </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
