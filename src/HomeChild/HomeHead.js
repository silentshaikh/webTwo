import React from 'react'
import { useNavigate } from 'react-router-dom';
import fruit from '../home-fruits.png';
import '../HomeChild/HomeChild.css';
function HomeHead({head}) {
    const homeNavig = useNavigate();
  return (
    <>
      <div className='homeCont'>
    <div className="hBoxTwo">
    <h1 >{head}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam adipisci quis repellendus natus explicabo excepturi</p>
    <button onClick={() => homeNavig('/product')}>Show More</button>
    </div>
    <div className="hBoxOne">
    <img src={fruit} alt="homeImage" />
    </div>
    </div>
    </>
  )
}

export default HomeHead;
