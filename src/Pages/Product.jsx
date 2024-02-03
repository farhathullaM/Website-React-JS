import React, { useContext } from 'react';
import { ShopContext} from '../Context/ShopContext';
import all_product from '../Components/Assets/all_product';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams} from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DisciptionBox from '../Components/DiscriptionBox/DisciptionBox';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DisciptionBox />
    </div>
  )
}

export default Product;
