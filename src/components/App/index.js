import React, { useState, useEffect } from 'react'
import { AppContext } from '../AppContext'
import Header from '../Header'
import Home from '../Home'
import Footer from '../Footer'
import logic from '../../logic'
import './index.sass'

export default function App() {

  const [products, setProducts] = useState([])
  const [param, setParam] = useState('')
  const [showSpinner, setShowSpinner] = useState(null)

  useEffect(() => {
    getProducts()
  },[])

  const getProducts = () => {
    setShowSpinner(true)
    logic.retrieveProducts().then(products => {
      setProducts(products)
      setShowSpinner(false)
    })
  }

  return (
    <AppContext.Provider value={{products, setProducts, param, setParam, showSpinner, setShowSpinner}} >
      {products.length === 0 ? <div className='loading-container'>
      <img className='loading-container__logo'alt='logo' src='http://www.xxxlutz.com/wp-content/uploads/2018/07/xxxlutz.jpg' />
      </div> :
      <div className='container'>
        <Header />
        <Home />
        <Footer />
      </div>}
    </AppContext.Provider>
  )
}