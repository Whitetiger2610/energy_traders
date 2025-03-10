import {Routes, Route } from "react-router-dom"
//Importación Components
import NavBar from "./components/navbar/NavbarComponent"
import Footer from "./components/footer/FooterComponent"
//Importacion Vistas
import HomePage from "./views/inicio/HomePage"
import NotFoundPage from "./views/notfound/NotFoundPage"
import LoginPage from "./views/login/LoginPage"
import RegistroPage from "./views/register/RegistroPage"
import ProductosPage from "./views/productos/ProductosPage"
import ProductoPage from "./views/producto/ProductoPage"
import ContactPage from "./views/contacto/ContactPage"
import AddProductoPage from "./views/agregar/AddProductoPage"
import ComingPage from "./views/soon/ComingPage"
import ProfilePage from "./views/perfil/ProfilePage"
import CarritoPage from "./views/carrito/CarritoPage"


//Importacion Contexts

import ProductContext from "./context/ProductContext"
import UserContext from "./context/UserContext"
import CartContext from "./context/CartContext"



function App() {

  return (
    <>
    <CartContext>
    <UserContext>
    <ProductContext>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registro" element={<RegistroPage/>} />
        <Route path="/perfil" element={<ProfilePage/>} />
        <Route path="/productos/:id" element={<ProductoPage/>} />
        <Route path="/productos" element={<ProductosPage/>} />
        <Route path="/agregarproducto" element={<AddProductoPage/>} />
        <Route path="/carrito" element={<CarritoPage/>} />
        <Route path="/servicios" element={<ComingPage/>} />
        <Route path="/fabricantes" element={<ComingPage/>} />
        <Route path="/proveedores" element={<ComingPage/>} />
        <Route path="/contacto" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
      </ProductContext>
      </UserContext>
      </CartContext>
    </>
  )
}

export default App
