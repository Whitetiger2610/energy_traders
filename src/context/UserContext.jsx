import { createContext, useState } from "react"

export const UserContext = createContext();

const UserProvider = ({ children }) => {

const [user, setUser] = useState(null);

const login = async (email, password) => {
      
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (response.ok) {
      alert(data?.error || "Autenticación Exitosa!");
      localStorage.setItem("token", data.token);
      setUser({email
       
              })
      return true;

      } else {
        alert(data?.error || "Error autenticacion")
        return false;
      }
     
    
}

const register = async (email, password) => {
  const response = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (response.ok) {
  alert(data?.error || "Registro Exitoso!");
  localStorage.setItem("token", data.token);
  setUser({
    "email": email,
    "password": password
      })
      return true;
    } else {
      alert(data?.error || "Error registro")
      return false;
    }
};

const logout = () => {

  localStorage.removeItem("token")
  setUser(null);
};

const profile = async () => {
  const token = localStorage.getItem("token");
  
  if (token) {
    try {
      const response = await fetch("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al obtener el perfil");
      }

      const data = await response.json();
      setUser(data); // Actualizar el estado del usuario con los datos del perfil
    } catch (error) {
      console.error("Error al obtener el perfil:", error);
    }
  }
};


const value ={
  user,
  login,
  logout,
  register,
  profile
}
  return (
    <UserContext.Provider value={value}>
      {children}  
    </UserContext.Provider>
  )
}

export default UserProvider