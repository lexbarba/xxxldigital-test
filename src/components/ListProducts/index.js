import React, { useContext } from 'react'
import PaintProduct from '../PaintProduct'
import { AppContext } from '../AppContext'
import './index.sass'

export default function ListProducts() {

  const { products }= useContext(AppContext)

  return (
    <section className='products-container'>
      {products.map(product => <PaintProduct key={product.id} product={product}/>)}
    </section>
  )
}