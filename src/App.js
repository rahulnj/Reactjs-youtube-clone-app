import React from 'react'
import { Container } from 'react-bootstrap'

///components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


///pages///
import HomeScreen from './pages/HomeScreen'



const App = () => {
  return (
    <>
      <Header />
      <div className="app_container">
        <Sidebar />
        <Container fluid className='app_main'>
          <HomeScreen />
        </Container>
      </div>
    </>
  )
}

export default App
