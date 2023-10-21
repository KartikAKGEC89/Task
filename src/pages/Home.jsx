import React from 'react'
import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Middle from '../components/Middle'
import Footer from '../components/Footer'
import './pages.css'

const Home = () => {
  return (
    <>
      <Navbar2 />

      
      <div className='homeHero'>
      <div>
        <h3 style={{
          fontSize: "2.6vw",
          marginBottom: "1.3vw",
          lineHeight: "3vw",
        }}>
          Cheaper delivery costs through innovative vehicle design
        </h3>
        </div>
        </div>
      {/* <Navbar />
      <Middle />
      <Footer /> */}
    </>
  )
}

export default Home
