import React from 'react'
import Email from '../assets/email.png'
import Rate from '../assets/rate (1).png'
import Support from '../assets/support 1.png'
import WareHouse from '../assets/warehouse (1).png'
import Email2 from '../assets/email (1).png'
import './main.css'

const Middle = () => {
  return (
    <>
      <div className='middle'>
        <div className='card'>
          <img src={Support } alt=' support' />
          <p>Call us at anytime on 1210 779 434</p>
        </div>
        <div className='card'>
          <img src={ Email } alt='email' />
          <p>See why more companies prefer Swift</p>
        </div>
        <div className='card'>
          <img src={ Rate} alt='rate' />
          <p>Email the Team at Swift Transport Courier Division</p>
        </div>
        <div className='card'>
          <img src={ WareHouse} alt='warehouse' />
          <p>Email the Team at Swift Containers Transport Division</p>
        </div>
        <div className='card'>
          <img src={ Email2} alt='email' />
          <p>Visit our warehousing and distribution center</p>
        </div>
      </div>
    </>
  )
}

export default Middle
