import React from 'react';
import './RelatedProducts.css';
import data_pro from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='rl'>
      <h1>Related Products</h1>
      <hr />
      <div className="rl-item">
        {data_pro.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
    </div>
    </div>
  )
}

export default RelatedProducts;