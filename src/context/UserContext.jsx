import { createContext, useState } from "react";
import api from "../api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

const [user, setUser] = useState(null);

const login = async (email, password, rol) => {
      
      // const response = await fetch("http://localhost:3000/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //     rol
      //   }),
      // });
      try{
        const response = await api.post("/login", { email, password, rol });
        // const data = await response.json();

        // if (response.ok) {
        alert(response.data?.error || "Autenticación Exitosa!");
        localStorage.setItem("token", response.data.token);
        setUser({email})
        return true;

      } catch (error) {
        alert(error.response.data?.error || "Error autenticacion")
        return false;
      }
     
    
}

const register = async (rol, nombre, apellido, nit, email, password) => {
  
  //   const response = await fetch("http://localhost:3000/registro", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     rol,
  //     nombre,
  //     apellido,
  //     nit,
  //     email,
  //     password,
  //   }),
  // });
  try{
      const response = await api.post("/registro", {
        rol,
        nombre,
        apellido,
        nit,
        email,
        password,
      });
      // const data = await response.json();


  // if (!response.ok) { 
  //   throw new Error(response.data.error || "Error en el registro"); 
  //   }

  alert("Registro exitoso");
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  setUser({
    "rol": rol,
    "nombre": nombre,
    "apellido": apellido,
    "nit": nit,
    "email": email,
    "password": password,
      })
      return true;
    } catch (error) {
      alert(error.response?.data?.error || "Error en el registro"); // 
      return false;
     }
}

const logout = () => {
  localStorage.removeItem("token");
  setUser(null); 
  alert("Se ha cerrado sesión");

  setTimeout(()=>{
    window.location.reload(); 
  },200)
};

const profile = async () => {
  const token = localStorage.getItem("token");
  
  if (token) {
    try {
      // const response = await fetch("http://localhost:3000/perfil", {
      //   method: "GET",
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
      // });
      const response = await api.get("/perfil", {
        headers: { Authorization: `Bearer ${token}` },
      });
      
      // if (!response.ok) {
      //   throw new Error("Error al obtener el perfil");
      // }

      // const data = await response.json();
      setUser({
        id: response.data.id,
        rol: response.data.rol,
        nombre:response.data.nombre,
        apellido:response.data.apellido,
        nit: response.data.nit,
        email: response.data.email
      }); // Actualizar el estado del usuario con los datos del perfil
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
      localStorage.removeItem("token");
      setUser(null)
    }
  }
};


  return (
    <UserContext.Provider value={{user,login,logout,register,profile}}>
      {children}  
    </UserContext.Provider>
  )
}

export default UserProvider