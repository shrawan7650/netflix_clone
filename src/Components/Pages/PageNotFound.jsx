import React from 'react'
import './pageNotFound.css'
import Header from "./Header";
import pageLogo from '../../pagenotfound.png'
export const PageNotFound = () => {
  return (
   <>
   <Header/>
    <div className="wrapper">
        <img src={pageLogo} alt='loading...' loading='lazy'/>
    <div className="container">
        <div className="line"></div>
        <div className="info">This page could not be found.</div>
        
    </div>
</div>
   </>
  )
}
