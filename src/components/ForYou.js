import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'


const ForYou = () => {
  let location=useLocation()
  const nextClick=()=>{
      
  }
  
  
  return (
    <>
    <div className='forYou'>
    <div className='forYouHeader'>
    
      <h1>For you</h1>
      <li className="item">            
          <i className="fa-sharp fa-solid fa-chevron-right" onClick={nextClick}></i>
          
      </li>
    </div>
   <div className='forYouNavbar'>
      <ul>
        <li className={`nav-link-${location.pathname==="/new"?"active":"passive"}`}><Link to="/new">new</Link></li>
        <li className={`nav-link-${location.pathname==="/playlists"?"active":"passive"}`}><Link to="/playlists">playlists</Link></li>
        <li className={`nav-link-${location.pathname==="/episodes"?"active":"passive"}`}><Link to="/episodes">episodes</Link></li>
      </ul>
    </div>  
    </div>
    </>
  )
}

export default ForYou
