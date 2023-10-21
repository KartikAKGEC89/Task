import React from 'react'
import Phone from '../assets/phone-call.png'
import { Link } from 'react-router-dom'
import Hamburger from '../assets/align-justify.png'
import telephone from '../assets/landline.png'
import './main.css'

const Navbar2 = () => {
    const [hamburger, setHamburger] = React.useState(false)
    
    function handleclick() {
        setHamburger(!hamburger)
    }
  return (
      <>
          <div className='navbar2'>
              <div className="flexB">
          <img src={telephone} style={{height: "3vw"}} alt='telephone'/>
          <p>Call Us 1300 779 438</p>
        </div> 
              <div id='nav1'>
                  <Link to="/whySwift">
                      <span className='navItem'>
                          WHY SHIFT TRANSPORT
                      </span>
                  </Link>
                  <Link to="/">
                      <span className='navItem'><u>FLEET</u></span>
                  </Link>

                  <span className='navItem'> COMPANY POLICIES </span>
                  <span className='navItem'> ABOUT US </span>
                  <span className='navItem'> CONTACT US </span>
              </div> 
              <div id='nav2'>
                  <button className='navItem1' id='redBtn'> Swift Intermodal </button>
                  <span className='navItem1'>Container Transport Solutions</span>
                  <span className='navItem1'>Complete Warehousing Solutions</span>
              </div>
          </div>
          <div className='mobNav' style={{backgroundColor: "#002a54"}}>
              <div>
                  <img src={Phone} alt='phone' />
                  <img src={Hamburger} alt='hamburger' onClick={handleclick} />
              </div>
              {hamburger && <ul className='navList'>
                  <li><Link to="/whySwift">
                      <span className='navItem'>
                          WHY SHIFT TRANSPORT
                      </span>
                  </Link>
                  </li>
                  <li><Link to="/">
                      <span className='navItem'>FLEET</span>
                  </Link>
                  </li>
                  <li>COMPANY POLICIES</li>
                  <li>ABOUT US</li>
                  <li>CONTACT US</li>
                  <li>Container Transport Solution</li>
                  <li>Complete Warehousing Solution</li>
                  <li>
                      <button style={{color:"black"}}>
              Swift Intermodal
            </button>
                  </li>
              </ul>}
          </div>
    </>
  )
}

export default Navbar2
