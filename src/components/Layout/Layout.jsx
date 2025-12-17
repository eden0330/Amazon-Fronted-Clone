import React, { Children } from 'react'
import Header from '../Header/Header'
import Upperfooter from '../Footer/Upperfooter'

function Layout ({children}) {
  return (
    <>
<Header />
{children}
<Upperfooter/>
    </>
  )
}

export default Layout