import React from 'react'
import { Lazy } from 'react-lazy'
import './index.sass'

export default function PaintProduct({ product:{ brand, eyecatcher, id, image, name, price, priceSale, url } }) {

  return (
    <article className='products-container__product' key={id}>
      {eyecatcher ? <div className='products-container__product-eyecatcher'>
        <p>Erbjudande</p>
      </div> : <div className='empty'></div>}
      <div className='products-container__product-image'>
        <Lazy component='a' href='/' ltIE9>
           <img alt='product' src={image}/> 
        </Lazy>
      </div>
      <div className='products-container__product-data'>
        <h2>{brand}</h2>
        <div> 
          <h4>{name}</h4>
          <p className='product-data__priceSale'>{priceSale}:-</p>
        </div>
        <p className='product-data__price'>istället för {price}:-**</p>
        <div className='product-data__link'>
          <a href={url}  target='_blank' rel='noopener noreferrer'>Visa detaljer</a>
        </div>
      </div>
    </article>
  )}