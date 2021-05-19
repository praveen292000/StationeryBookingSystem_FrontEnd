import AddProduct from "../components/product/AddProduct";
import ViewProduct from "../components/product/ViewProduct";
//import ViewProductbyName from "../components/product/ViewProductbyName";
import { Route, Switch } from "react-router-dom";
import './page.css';

const ProductPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            <button
            className="btn btn-outline-dark"
              onClick={() => props.history.push(`${props.match.url}/addproduct`)}
            >
              Add
            </button>
            <button
            className="btn btn-outline-dark"
              onClick={() => props.history.push(`${props.match.url}/view`)}
            >
              View
            </button>
           {/* 
            <button
            className="btn btn-outline-dark"
              onClick={() =>
                props.history.push(`${props.match.url}/viewbyname`)
              }
            >
              ViewByName
            </button> */}
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/addproduct`}
                component={AddProduct}
              />
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewProduct}
              />
          {/* 
              <Route
                exact
                path={`${props.match.url}/viewbyname`}
                component={ViewProductbyName}
              /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
