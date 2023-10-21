import React from 'react';
import Phone from '../assets/phone-call.png'
import { Link } from 'react-router-dom'
import Hamburger from '../assets/align-justify.png'
import './main.css'

const Navbar = () => {
    const [hamburger, setHamburger] = React.useState(false)
    
    function handleclick() {
        setHamburger(!hamburger)
    }
  return (
    <>
      <div className='navbar'>
              <div id='nav1'>
                  <Link to="/whySwift">
                      <span className='navItem'>
                          <u>WHY SHIFT TRANSPORT</u>
                      </span>
                  </Link>
                  <Link to="/">
                      <span className='navItem'>FLEET</span>
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
                          <p>WHY SHIFT TRANSPORT</p>
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
            <button>
              Swift Intermodal
            </button>
                  </li>
              </ul>}
          </div>
    </>
  )
}

export default Navbar
