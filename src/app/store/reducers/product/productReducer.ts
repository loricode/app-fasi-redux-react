import { Action } from '../../../interfaces/action/action.interface';
import { Product } from "../../../interfaces/product/product.interface";
import { ADD_PRODUCTS } from '../../actions/product/product.action';

const initialState = {
   products:[] as Product[]
}

export function productReducer(state = initialState, action:Action){
   switch(action.type){
      case ADD_PRODUCTS:
         return {
            products:action.payload
         }

      default:
         return state;   
   }
}