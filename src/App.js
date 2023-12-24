import React from 'react'
import NavbarMain from './Layout/Navbar/NavbarMain'
import ImageHero from './Layout/ImageHero/ImageHero'
import Ht from './Layout/ListHesderText/Ht'
import ListH from './Layout/ListHero/ListH'
import Slider from './Layout/Caruosel/Slider'
import Achieve from './Layout/Achivement/Achieve'

const App = () => {
  return (
    <div>
     <NavbarMain/>
     <ImageHero/>
     <Ht/>
     <ListH/>
     <Slider/>
     <Achieve/>
    </div>
  )
}

export default App
