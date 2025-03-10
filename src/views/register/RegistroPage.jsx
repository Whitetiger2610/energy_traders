import { useEffect } from "react"
import Register from "../../components/forms/RegisterComponent"
import { useNavigate } from "react-router-dom"

const RegistroPage = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) {
      navigate('/')
    }
  }, [])


  return (
    <div>
      <Register/>
    </div>
  )
}

export default RegistroPage;