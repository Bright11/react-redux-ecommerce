import React from 'react'

import './topslider.css'
function Topproductslider({product}) {
  return (
  <div className="topsliderpage" style={{backgroundImage: `url(${product.image})`}}>
    <div className="slidenamep">
        <p>{product.description.substring(0,250)}</p>
    </div>
  <div className='topslidimg'>  <img src={product.image} alt="" /></div>
  </div>
  )
}

export default Topproductslider