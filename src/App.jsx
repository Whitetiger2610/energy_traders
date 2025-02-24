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


//Importacion Contexts
import ProductContext from "./context/ProductContext"
import AddProductoPage from "./views/agregar/AddProductoPage"
import ComingPage from "./views/soon/ComingPage"


function App() {

  return (
    <>
    <ProductContext>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/registro" element={<RegistroPage/>} />
        <Route path="/productos/:id" element={<ProductoPage/>} />
        <Route path="/productos" element={<ProductosPage/>} />
        <Route path="/agregarproducto" element={<AddProductoPage/>} />
        <Route path="/servicios" element={<ComingPage/>} />
        <Route path="/fabricantes" element={<ComingPage/>} />
        <Route path="/proveedores" element={<ComingPage/>} />
        <Route path="/contacto" element={<ComingPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
      <Footer/>
      </ProductContext>
    </>
  )
}

export default App
