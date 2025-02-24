
import CarouselComponent from '../../components/slider/CarouselComponent'

const HomePage = () => {

  const imgs = {
    img1:{
      url:"SolarEnergy.webp",
      titulo:"Solar",
      descripcion:"lorem"
    },
    img2:{
      url:"EnergyTraders.png",
      titulo:"Energy",
      descripcion:"lorem"
    }
  }

  return (
    <> 
      <CarouselComponent  img1={imgs.img1} img2={imgs.img2}/>
      
    </> 
  )
}

export default HomePage