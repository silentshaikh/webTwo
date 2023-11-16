import React from 'react'
import '../HomeChild/HomeChild.css';
import hChildApi from './HomeChildApi';

import HomeHead from './HomeHead';
import HomeSubs from './HomeSubs';
function HomeChild() {
  
  return (
   <>
    <div className="homeContTwo">
    <h1>Enjoy The Fruit</h1>
      <div className="prodCard">
      {
        hChildApi.map((element,index) => {
          return( <div className="card" key={index}>
            <img src={element.img} alt="product" />
            <h3>{element.head}</h3>
            <p>{element.para}</p>
        </div>);
        })
       }
      </div>
    </div>
   <HomeSubs/>
   </>
  )
}

export default HomeChild
