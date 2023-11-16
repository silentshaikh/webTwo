import React from 'react'
import prodApi from './ProductApi';
import '../Product/Product.css';
function Product() {
  return (
  <>
  <h1 style={{textAlign:'center',color:'#34e7e4', fontSize:'4rem',paddingBottom:'40px'}}>Our Product</h1>
    <div className="productList">
      {
        prodApi.map((element,index) => {
          return (
            <div className="cardBox" key={index}>
            <img src={element.img} alt="product" />
            <h3>{element.head}</h3>
            <p>{element.para}</p>
      </div>
          );
        })
      }
    </div>
  </>
  )
}

export default Product
