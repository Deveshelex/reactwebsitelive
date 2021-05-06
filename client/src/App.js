import React from 'react'
import Navbar from './components/Navbar'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Registration from './components/Signup'
import './App.css'

const App = () =>{
  return(
    <div>
      <Navbar/>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/about'>
        <About/>
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/signup'>
        <Registration/>
      </Route>

      {/* <Route path='/about'>
        <About/>
      </Route>

      <Route path='/about'>
        <About/>
      </Route> */}
    </div>
  )
}

export default App