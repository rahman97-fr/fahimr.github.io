import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expertise from './components/expertise/Expertise'
import Projects from './components/projects/Projects'
import Contacts from './components/contacts/Contacts'
//import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About/>
      <Expertise/>
      <Projects/>
      <Contacts />
    </>
  )
}

export default App

