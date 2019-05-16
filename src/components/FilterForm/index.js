import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import './index.sass'

export default function FilterForm() {
  
  const { param, setParam } = useContext(AppContext)

  return (
       <form className='filterForm-container'>
        <select className='filterForm-container__select' onChange={e => setParam(e.target.value)} value={param}>
          <option value='Fler kriterier'>Fler kriterier</option>
          <option value='Pris stigande'>Pris stigande</option>
          <option value='Pris fallande'>Pris fallande</option>
          <option value='Stigande (A till Z)'>Stigande (A till Z)</option>
          <option value='Descending (Z till A)'>Descending (Z till A)</option>
        </select>
      </form>

  )
}