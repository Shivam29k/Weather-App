import React from 'react'
import Search from './search/Search'

function Navbar({setCoordinate}) {
  return (
    <div className='navbar'>
        <div className="back"></div>
        <Search setCoordinate={setCoordinate}/>
    </div>
  )
}

export default Navbar