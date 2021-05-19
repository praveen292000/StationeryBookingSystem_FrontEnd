import { Route, Switch } from "react-router-dom";
//import AddCustomerDetail from "../components/customer/AddCustomerDetail";
//import AddStoreInchargeDetail from "../components/Register/AddStoreInchargeDetail";
import Register from "../components/Register/Register";
import './page.css'

const RegisterPage = (props) => {
  console.log(props);
  return (
    <div>
      <div className="container">
        <div className="page">
          <div className="pageButton">
            <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Register</button>
           {/* //<button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/select`)}>Register as StoreIncharge</button> */}
          </div>
          <div className="pageLine"></div>
          <div className="pageContainer">
            <Switch>
              <Route
                exact
                path={`${props.match.url}/add`}
                component={Register}
              />{/* 
              <Route
                  exact
                  path={`${props.match.url}/register/storeincharge`}
                  component={AddStoreInchargeDetail}
                /> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
