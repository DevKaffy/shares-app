import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const PageLayout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        <main className='flex-grow overflow-auto'>
            {children}
        </main>
    </div>
  )
}

export default PageLayout