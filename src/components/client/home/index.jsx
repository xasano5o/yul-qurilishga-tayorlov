import React from 'react'
import CaruselCom from '../carusel'
import Navbbar from '../navbar'
import AboutCom from '../about'
import AboutText from '../about/aboutText'
import Footer from '../footer'

function HomeClient() {
  return (
    <div>
        <Navbbar/>
        <CaruselCom/>
        <AboutCom/>
        <AboutText/>
        <Footer/>
    </div>
  )
}

export default HomeClient