import './App.css';
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { Products } from "./app/interfaces/product/product.interface";
import { useEffect } from 'react';
import { ProductService } from './app/services/repositories/productService';
import { ADD_PRODUCTS } from './app/store/actions/product/product.action';
import { CardProduct } from './app/components/cards/CardProduct';

interface productStore{
  productReducer:any
}

function App() {

  const dispatch = useDispatch();

  useEffect(()=>{
    (async function(){
      const { data } = await ProductService.getProducts()
      dispatch({type:ADD_PRODUCTS, payload:data.body })
    })();
  },[dispatch])

  const results:Products = useSelector((store:productStore) => store.productReducer, shallowEqual)    
  
  return (
    <div>
      <div className="wrapper">
         {
            results.products.map((item, index) => (
               <CardProduct product={{...item}} index={index} />
            ))
         }
      </div>
        
    </div>
  );
}

export default App;
