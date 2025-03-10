import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css'
import { Link } from 'react-router-dom';
// import { Image } from 'react-bootstrap';

const CarouselComponent = ({img1,img2}) => {
  return (
    <Carousel  className='custom-carousel' >
      <Carousel.Item >
        <Image src={img1.url} className="d-block w-100 carousel-img" />
        <Carousel.Caption>
          <h1 className='text-bg-dark'>EL MAYOR MARKETPLACE DE PRODUCTOS Y SERVICIOS DE ENERGIAS RENOVABLES</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={img2.url} className="d-block w-100 carousel-img" />
        <Carousel.Caption>
          <Link to="/productos" >Productos</Link>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;