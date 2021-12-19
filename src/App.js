import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

import './_app.scss'


///components
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


///pages///
import HomeScreen from './pages/HomeScreen/HomeScreen'
import LoginScreen from './pages/LoginScreen/LoginScreen'
import WatchScreen from './pages/WatchScreen/WatchScreen';


import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchScreen from './pages/SearchScreen/SearchScreen';

const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false)

  const handleToggleSidebar = () => {
    setSidebar(value => !value)
  }
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className='app_main '>
          {children}
        </Container>
      </div>
    </>
  )
}



const App = () => {
  const { accessToken, loading } = useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }

  }, [accessToken, loading, navigate])



  return (
    <div>

      <Routes>
        <Route exact path='/' element={
          <Layout>
            <HomeScreen />
          </Layout>
        }>
        </Route>
        <Route exact path='/auth' element={
          <LoginScreen />
        }>
        </Route>
        <Route exact path='/search/:query' element={
          <Layout>
            <SearchScreen />
          </Layout>
        }>
        </Route>
        <Route exact path="/watch/:id" element={
          <Layout>
            <WatchScreen />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <HomeScreen />
          </Layout>
        } />
      </Routes>

    </div >
  )
}

export default App
