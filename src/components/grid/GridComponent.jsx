
import { useContext } from 'react'

import { ProductContext } from '../../context/ProductContext'
import CardComponent from '../card/cardComponent'

import './grid.css'

const GridComponent = () => {
    const {productos} = useContext(ProductContext)

  return ( 
    <div className='card-wrapper'>
        {
          productos.map(p => (
              
            <CardComponent 
                key={p.id}
                id = {p.id}
                name = {p.name} 
                img1 = {p.img1} 
                price = {p.price} 
                desc = {p.desc}
            />
          )  
        )
        }
    </div>
  )
}

export default GridComponent