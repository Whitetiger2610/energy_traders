import {Routes, Route, Router, Navigate } from "react-router-dom"
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


import {UserContext} from "./context/UserContext"
import { useContext } from "react"



function App() {

  const { user } = useContext(UserContext);

  return (
    <>
    <NavBar/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registro" element={<RegistroPage/>} />
        <Route path="/perfil" element={user?<ProfilePage/> : <Navigate to ="/login"/>} />
        <Route path="/productos/:id" element={<ProductoPage/>} />
        <Route path="/productos" element={<ProductosPage/>} />
        <Route path="/agregarproducto" element={(user?.rol === "proveedor"|| user?.rol === "fabricante")? <AddProductoPage/>: <Navigate to ="/login"/>} />
        <Route path="/carrito" element={<CarritoPage/>} />
        {/* <Route path="/pedidos" element={user?<ProfilePage/> : <Navigate to ="/login"/>} /> */}
        <Route path="/servicios" element={<ComingPage/>} />
        <Route path="/fabricantes" element={<ComingPage/>} />
        <Route path="/proveedores" element={<ComingPage/>} />
        <Route path="/contacto" element={<ContactPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App

{/* <CartContext>
    <UserContext>
    <ProductContext>
      <NavBar />
      <Routes>
      <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registro" element={<RegistroPage/>} />
        <Route path="/perfil" element={user?.rol ?<ProfilePage/> : <Navigate to ="/login"/>} />
        <Route path="/productos/:id" element={<ProductoPage/>} />
        <Route path="/productos" element={<ProductosPage/>} />
        <Route path="/agregarproducto" element={(user?.rol === "proveedor"|| user?.rol === "fabricante")? <AddProductoPage/>: <Navigate to ="/login"/>} />
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
      </CartContext> */}
