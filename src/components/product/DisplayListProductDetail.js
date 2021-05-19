
import DisplayProductDetail from "./DisplayProductDetail";

const DisplayListProductDetail = ({productList}) => {
    return ( 
        <div>
            {
                productList.map((product)=> <div key={product.product_Id}> <DisplayProductDetail product={product}/></div>)
            }
        </div>
     );
}
 
export default DisplayListProductDetail
;