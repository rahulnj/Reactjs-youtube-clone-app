import React from 'react'
import { Container } from 'react-bootstrap'

import './_app.scss'


///components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


///pages///
import HomeScreen from './pages/HomeScreen'



const App = () => {
  return (
    <>
      <Header />
      <div className="app_container border border-info">
        <Sidebar />
        <Container fluid className='app_main border border-warning'>
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default App
