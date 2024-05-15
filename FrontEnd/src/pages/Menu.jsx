import React from 'react'

const Menu = () => {
  return (
    <div className='flex bg-white h-screen text-black'>
      <div className=''>
        <nav>
            <ul className='flex flex-col'>
                <li className='bg-yellow-500'>Pizza</li>
                <li>Burger</li>
                <li>Chicken</li>
                <li>Others</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Menu
