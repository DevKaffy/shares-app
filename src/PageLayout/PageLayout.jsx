import React from 'react'
import Navbar from '../Components/Navbar/Navbar'

const PageLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <main>
            {children}
        </main>
    </div>
  )
}

export default PageLayout