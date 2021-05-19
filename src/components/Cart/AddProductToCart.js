import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import { productToCartIncreaseThunk } from "../../redux/Cart/productToCart/productToCartAction";
import { viewAllProductThunk } from "../../redux/product/viewAllProduct/viewAllProductAction";
import './productToCart.css'
const AddProductToCart = ({history}) => {

    const dispatch=useDispatch();

    const response=useSelector((state)=>{
        return{
            productDetail:state.productToCart.productDetail,
            productList:state.viewAllProduct.products,
            error:state.productToCart.error,
            customerId:state.viewAllCustomer.customer,
        }
    })


  const fetchAll=()=>
  {
    dispatch(viewAllProductThunk())
  }
  useEffect(fetchAll,[])

  const onHandleAdd=(product_Id)=>{
      const data={
        product_Id:product_Id,
        customerId:response.customerId,
        product_Quantity:1
      }
      dispatch(productToCartIncreaseThunk(data))

  }

  return (
    <div className="cartProduct">
      <h2 className="title">Add Product To Cart</h2>
      <div className="heading">
        <h5>Name</h5>
        <div className="">
          <h6>Cost</h6>
          <h6>ClickToAdd &#8595;</h6>
        </div>
      </div>
      {response.productList.map((product) => (
        <div key={product.product_Id} className="product">
          <h6>{product.product_Name}</h6>
          <div>
            <h6>&#8377; {product.product_Price}</h6>
            <button type="submit" onClick={()=>onHandleAdd(product.product_Id)} className="btn btn-primary btn-sm">
              AddToCart
            </button>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={()=>history.push("/cart/cart")}>Go To Cart</button>
    </div>
  );
};

export default withRouter(AddProductToCart);