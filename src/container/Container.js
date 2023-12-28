import React from 'react'
import NavbarMain from '../Layout/Navbar/NavbarMain'
import ImageHero from '../Layout/ImageHero/ImageHero'
import ListH from '../Layout/ListHero/ListH'
import Slider from '../Layout/Caruosel/Slider'
import Achieve from '../Layout/Achivement/Achieve'
import SlideT from '../Layout/slideText/SlideT'
import Footer from '../Layout/Footer/Footer'
import Ht from '../../src/Layout/ListHesderText/Ht'

const Container = () => {
  return (
    <div>
      <NavbarMain/>
      <ImageHero/>
      <Ht/>
      <ListH/>
      <Slider/>
      <Achieve/>
      <SlideT/>
      <Footer/>
    </div>
  )
}

export default Container
