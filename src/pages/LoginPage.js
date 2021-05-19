import { Route, Switch } from "react-router-dom";
//import AddCustomerDetail from "../components/customer/AddCustomerDetail";
//import UpdateCustomerDetail from "../components/customer/UpdateCustomerDetail";
//import ViewAllCustomer from "../components/customer/ViewAllCustomer";
//import ViewCustomerDetail from "../components/customer/ViewCustomerDetail";
import Login from "../components/Login/Login";
import './page.css'

const LoginPage = (props) => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            {/* //<button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Add</button> */}
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/login`)}>Login</button>
            {/* <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/update`)}>Update</button>
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button> */}
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/Login`}
                component={Login}
              />
               {/* <Route
                exact
                path={`${props.match.url}/select`}
                component={ViewAllCustomer}
              />
              <Route
                exact
                path={`${props.match.url}/update`}
                component={UpdateCustomerDetail}
              />
              <Route
                exact
                path={`${props.match.url}/view`}
                component={ViewCustomerDetail}
              /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
