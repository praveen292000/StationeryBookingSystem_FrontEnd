import {  Route, Switch } from "react-router-dom";
import ViewOrderByDate from "../components/order/ViewOrderByDate";
import ViewOrderById from "../components/order/ViewOrderById";
import './page.css';

const OrderPage = (props) => {
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>ViewById</button>
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewByDate`)}>ViewBydate</button>
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewOrderById}
              />
              <Route
                exact
                path={`${props.match.url}/viewByDate`}
                component={ViewOrderByDate}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
    // <div>

    //         <ViewOrderById/>
    //         <ViewOrderByDate/>

    // </div>
  );
};

export default OrderPage;