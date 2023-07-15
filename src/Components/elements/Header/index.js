import React from 'react'
import './style.css';
// import { LiaSortDownSolid } from 'react-icons/li';

const HeaderComponent = () => {
  return (
    <div className='header-components'>
        <h1 className='header-logo'>Logo</h1>
        <div className='dropdown'>
            <div className='icon-input'> 
            <input type="text" placeholder='All Categories' className='custom-select' />
            {/* <LiaSortDownSolid/> */}
           
            
            </div>
            <div className='option'>

            </div>
        {/* <select name="cars" className='custom-select'>
    <option value="0">All Categories</option>
    <option  value="1">Saab</option>
    <option value="2">Opel</option>
    <option value="3">Audi</option>
    <option value="4">Audi</option>
    <option value="5">Audi</option>
  </select> */}
        </div>
    </div>
  )
}

export default HeaderComponent