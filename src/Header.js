import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img className='logo' src="https://s3.amazonaws.com/thumbnails.venngage.com/template/fc8535df-be09-4c80-8ea5-a69a34b2318e.png" alt="aaa" width="100px" height="50px"></img>
      </div>
      <div className='header_search'>
        <input className='searchInput' type="text"></input>
      </div>
      <div className='header_nav'>
        <div className='header_option'>
          <span>Hello Guest</span>
        </div>
        <div className='header_option'>
          <span>Sign In</span>
        </div>
        <div className='header_option'>
          <span>Members</span>
        </div>

      </div>
    </div>
  )
}

export default Header