import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'
import Menu from '../components/Menu'
import Order from '../components/Order'
import BookTable from '../components/BookTable'
import SpecialtiesSection from '../components/SpecialtiesSection'
import Chef from '../components/Chef'
import Testimonials from '../components/Testimonials'
import Map from '../components/Map'
import Social from '../components/Social'

const Home = () => {
  return (
    <>
    <Hero/>
    <Aboutus/>
    <Menu/>
    <Order/>
    <BookTable/>
    <SpecialtiesSection/>
    <Chef/>
    <Testimonials/>
    <Map/>
    <Social/>
    </>
  )
}

export default Home