import React from 'react'
import Uni from './Uni';

function Home(props) {

  
     






  return (
    <>
     <h1 className='text-center mt-6 text-xl'>All Universities</h1>
     <div className='w-full flex flex-wrap  justify-center pt-10 '>
       
            <Uni country={props.country}/>
     </div>

    </>
  )
}

export default Home
