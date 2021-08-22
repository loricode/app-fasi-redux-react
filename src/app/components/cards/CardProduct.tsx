import './card.css';
import { Product } from "../../interfaces/product/product.interface";

interface Props{
   product:Product
   index:number
}


export function CardProduct({ product }:Props){
    return(
     <div className="card">
        <div>
           <h4>{product.name}</h4>
        </div>

        <div>
           <p>{product.price}</p>
           <h5>{product.description}</h5>
        </div>
     </div>

    );
}