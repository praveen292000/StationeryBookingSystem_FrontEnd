import AddProductToCart from "../components/Cart/AddProductToCart";
import AddOrRemoveProductFromCart from "../components/Cart/AddOrRemoveProductFromCart"
import { Route, Switch } from "react-router-dom";
import './page.css';

const CartPage = (props) => {
    return ( 
        <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/addProduct`)}>AddProduct</button>
              <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/cart`)}>Cart</button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/addProduct`}
                component={AddProductToCart}
              />
              <Route
                exact
                path={`${props.match.url}/cart`}
                component={AddOrRemoveProductFromCart}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
        // <div>
        //     <AddProductToCart/>
        //     <AddOrRemoveProductFromCart/>
        // </div>
     );
}
 
export default CartPage;