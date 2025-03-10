
import { useContext, useEffect } from 'react'
import Perfil from '../components/profile/ProfileComponent'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {


const {user, profile} = useContext(UserContext)
const navigate = useNavigate()

useEffect(() => {
    if (localStorage.getItem("token")){
  profile();
    }
}, [profile]);

useEffect(()=>{
    if (!user){
        navigate("/")
    }
}, [user,navigate])

  if (!user) {
    return <p>Aún no se ha inicado sesión...</p>;
  }

  return (
    <>
    <Perfil user={user}
    />
    </>
  )
}

export default ProfilePage