import React from 'react'
import Up from '../assets/upArrow.svg'
import Down from '../assets/downArrow.svg'
import Facebook from '../assets/Frame.png'
import Twitter from '../assets/Asset 1 1.png'
import Insta from '../assets/Frame (1).png'
import Linkdin from '../assets/Frame (2).png'
import './main.css'

const Footer = () => {
    const [info, setInfo] = React.useState(false)

    function up() {
        setInfo(!info)
    }
    function down() {
        setInfo(!info)
    }
    const [taxi, setTaxi] = React.useState(false)

     function upArrow() {
        setTaxi(!taxi)
    }
    function downArrow() {
        setTaxi(!taxi)
    }

    const [container, setContainer] = React.useState(false)

    function upArr() {
        setContainer(!container)
    }
    function downArr() {
        setContainer(!container)
    }
  return (
    <>
          <div className='footer'>
              <div className='smallfooter'>
                  <h3>INFORMATION</h3>
                  <div>About us</div>
                  <div>Careers</div>
                  <div>Driver safety</div>
                  <div>Contact us</div>
                  <div>Terms of use</div>
                  <div>Privacy Policy</div>
              </div>  
              <div className='smallfooter'>
                  <h3>CONTAINER TRANSPORT</h3>
                  <div>Convenience</div>
                  <div>Location</div>
                  <div>Live Unloads</div>
                  <div>Side Loader Drops</div>
                  <div>Imports and Exports</div>
                  <div>50T Onsite Forklift</div>
                  <div>Oversize, Overweight</div>
                  <div> Dangerous Goods</div>
                  <div>24/7 Operations</div>
                  <div>Company Owned Fleet</div>
              </div>    
              <div className='smallfooter'>
                  <h3>Complete warehousing solutions</h3>
                  <div>Short & Long Term</div>
                  <div>Indoor & Outdoor Storage</div>
                  <div>Racked, Dry & Floor Stacked</div>
                  <div>Distribution</div>
                  <div>Import, Unpack, Pack, Ship</div>
                  <div>Privacy Policy</div>
                  <div>Sub-Leasing</div>
                  <div>Secure Facilities</div>
                  <div>Barcode Scanning</div>
              </div> 
            </div>
         
          <div className='mobilefooter'>
              <div>
                  <div>
                      <p>INFORMATION</p>
                      {info ? <img src={Up} alt='uparrow' onClick={up} /> : <img src={Down} alt='downarrow' onClick={down} />}   
                  </div>
                  {info && <ul className='smallfooter'>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Driver safety</li>
                  <li>Contact us</li>
                  <li>Terms of use</li>
                  <li>Privacy Policy</li>
                  </ul>}
              </div>

              <div>
                  <div>
                      <p>TAXI & COURIER TRUCKS</p>
                      {taxi ? <img src={Up} alt='uparrow' onClick={upArrow} /> : <img src={Down} alt='downarrow' onClick={downArrow} />}   
                  </div>
                  {taxi && <ul className='smallfooter'>
                   <li>Versatile Fleet</li>
                   <li>Safety & Training</li>
                  </ul>}
              </div>

              <div>
                  <div>
                      <p>CONTAINER TRANSPORT</p>
                      {container ? <img src={Up} alt='uparrow' onClick={upArr} /> : <img src={Down} alt='downarrow' onClick={downArr} />}   
                  </div>
                  {container && <ul className='smallfooter'>
                  <li>Short & Long Term</li>
                  <li>Indoor & Outdoor Storage</li>
                  <li>Racked, Dry & Floor Stacked</li>
                  <li>Distribution</li>
                  <li>Import, Unpack, Pack, Ship</li>
                  <li>Privacy Policy</li>
                  <li>Sub-Leasing</li>
                  <li>Secure Facilities</li>
                  <li>Barcode Scanning</li>
                  </ul>}
              </div>
              <hr className="ruler" />
              <center><b>Social Media</b></center>
              <div className='logos'>
                  <img src={Facebook } alt='Facebook' />
                  <img src={Twitter} alt='Twitter' />
                  <img src={Insta} alt='Insta' />
                  <img src={Linkdin } alt='Linkedin'/>
              </div>
              <hr className="ruler" />
              <center>© 2014 Swift Transport. All rights reserved.</center>
            </div>
          
    </>
  )
}

export default Footer
