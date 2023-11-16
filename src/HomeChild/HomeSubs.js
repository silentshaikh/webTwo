import React from 'react'
import bannr from '../join-bg.png';
function HomeSubs() {
  return (
    <>
         <div className="homeSubs">
    <h1>Receive The Best Fruits</h1>
      <img src={bannr} alt="SubscribeImage" />
      <form action="">
      <input type="email" name="" id="" placeholder='Enter Your Email' required />
      <button>Subscribe</button>
      </form>
    </div>
    </>
  )
}

export default HomeSubs;
