import React from 'react'
import { Link } from 'react-router-dom'
import './categorypage.css'
function Category({product}) {
  return (
    <div className='categorypage'>
        <Link to="">
            {product.name}
        </Link>
    </div>
  )
}

export default Category