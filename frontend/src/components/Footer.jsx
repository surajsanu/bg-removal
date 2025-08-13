import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright ©Suraj Panda | All right reserved.</p>
      <div className='flex gap-1'>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img width={40} src={assets.facebook_icon} alt="facebook account link" />
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img width={40} src={assets.twitter_icon} alt="twitter account link" />
        </a>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
            <img width={40} src={assets.google_plus_icon} alt="gmail account link" />
        </a>
       
      </div>
    </div>
  )
}

export default Footer