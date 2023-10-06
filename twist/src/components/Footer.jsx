import React from 'react'
import "./Footer.css"
import {BiLogoTwitter} from "react-icons/bi"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
  return (

    <div className='divv'>
        <div className='divimg'>
       <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
        </div>

        <div className='divptag'>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy </p>
            <p>Site Map</p>
        </div>

        <div className='divaddress'>
            <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        </div>

        <div className='divlogo'>
            <p><BiLogoTwitter/></p>
            <p><BsLinkedin/></p>
        </div>

        <div className='divend'>
            <p>© 2022. Ntwist Inc.</p>
        </div>
     
    </div>
  )
}

export default Footer