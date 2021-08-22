import axios from "axios"; //npm i axios

export class ProductService{

   public static getProducts():Promise<any>{
      return axios.get('http://127.0.0.1:8000/api/product')
   }
}