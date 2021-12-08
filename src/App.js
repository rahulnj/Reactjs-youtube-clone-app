import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import './_app.scss'


///components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


///pages///
import HomeScreen from './pages/HomeScreen'



const App = () => {
  const [sidebar, setSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }


  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container border border-info">
        <Sidebar sidebar={sidebar} />
        <Container fluid className='app_main border border-warning'>
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default App
