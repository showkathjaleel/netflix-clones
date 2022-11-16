import React from 'react';
 import './Banner.css';


function Banner() {
  return (
    <div className='banner'>
         <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
             <button className='button'>Play</button>
             <button className='button'>My list</button>   
            </div>
            <h3 className='desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h3>

         </div>
         <div className='fade_bottom' ></div>
    </div>
  )
}

export default Banner 