import React from 'react'
import Logo from '/src/assets/logo.svg'

function TopBar() {
  return (
    <div className='flex justify-center items-center header-top'>
      <img src={Logo} alt="Logo de la cafetería" width={64}/>
      <div className='text-3xl'>Cafetería Buen Sabor</div>
    </div>
  )
}

export default TopBar