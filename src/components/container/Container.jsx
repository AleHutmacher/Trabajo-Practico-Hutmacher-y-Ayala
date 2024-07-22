import React from 'react'
import Header from "../header/Header";
import Footer from '../footer/Footer';
import MainContent from '../maincontent/MainContent';


function Container() {
  return (
    <div className='flex flex-col items-center'>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default Container