import { useSelector, shallowEqual } from "react-redux";
import { Product } from "./app/interfaces/product/product.interface";

interface productStore{
  productReducer:any
}

function App() {
  const results:Product[] = useSelector((store:productStore) => store.productReducer, shallowEqual)    
   console.log(results)

  return (
    <div>
        react
    </div>
  );
}

export default App;
