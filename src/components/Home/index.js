import React, { useContext, useEffect } from 'react'
import FilterForm from '../FilterForm'
import ListProducts from '../ListProducts'
import Loading from '../Loading'
import { AppContext } from '../AppContext'

export default function Home() {

  const { products, setProducts, showSpinner, param } = useContext(AppContext)
  
  const handleOnFilter = () => {

    switch(param) {
      case 'Fler kriterier':
        setProducts([...products.sort((a, b) => a.id - b.id)])
      break
      case 'Pris stigande':
        setProducts([...products.sort((a, b) => b.priceSale - a.priceSale)])
      break
      case 'Pris fallande':
        setProducts([...products.sort((a, b) => a.priceSale - b.priceSale)])
      break
      case 'Stigande (A till Z)':
        setProducts([...products.sort((a, b) => a.name.localeCompare(b.name))])
      break
      case 'Descending (Z till A)':
        setProducts([...products.sort((a, b) => b.name.localeCompare(a.name))])
      break
      default:
        setProducts([...products.sort((a, b) => a.id - b.id)])
      break
    }
  }

  useEffect(() => {
    param && handleOnFilter()
  },[param])


  return (
    <section>
      <FilterForm />
      <Loading showSpinner={showSpinner}/>
      <ListProducts />
    </section>
  );
}
