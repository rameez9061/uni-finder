import React, { useState } from 'react'

function Navbar(props) {

   
  return (
   <>
   <div className="navbar flex justify-between box-border h-10 px-5 items-center shadow-md shadow-gray-700">
    <div className="leftnav flex items-center">
        <h1 className='px-6 font-bold text-xl'>Uni-Finder</h1>
        <ul>
            <li>Home</li>
        </ul>
    </div>
    <div className="combo flex">

    <input   value={props.inputValue} onChange={props.handleInputChange} type="text" name=""  id="" placeholder='Enter the Country' className='px-2 border-none text-black rounded-sm' />
    <button onClick={props.countryChange} className='px-2 bg-blue-300 ml-1 rounded-md text-black'>Search</button>
    </div>
    <button className="mode p-0.5 bg-slate-700 text-white rounded-md shadow-sm shadow-blue-200">Mode</button>
   </div>
   </>
  )
}

export default Navbar
