import AddStoreIncharge from "../components/StoreIncharge/AddStoreIncharge";//import ViewByLocationStoreIncharge from "../components/StoreIncharge/ViewStoreIncharge";
//import ViewStoreIncharge from "../components/StoreIncharge/ViewStoreIncharge"
import ViewStoreInchargeById from "../components/StoreIncharge/ViewStoreInchargeById";
import {  Route, Switch } from "react-router-dom";
import './page.css';
//import DisplayStoreIncharge from "../components/StoreIncharge/DisplayStoreIncharge";

const StoreInchargePage = (props) => {
    return ( 
        <div>
        <div className="container">
          <div className="page">
            <div className="pageButton">
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Add</button> 
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>Login</button>
{/*                 <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/display`)}>View</button>  */}
            </div>
            <div className="pageLine"></div>
            <div className="pageContainer">
            <Switch>
                <Route
                  exact
                  path={`${props.match.url}/add`}
                  component={AddStoreIncharge}
                /> 
                <Route
                  exact
                  path={`${props.match.url}/view`}
                  component={ViewStoreInchargeById}
                />
              {/*   <Route
                  exact
                  path={`${props.match.url}/display`}
                  component={DisplayStoreIncharge}
                />  */}
              </Switch>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default StoreInchargePage;