import AddStationaryShop from "../components/stationaryShop/AddStationaryShop";
import ViewByLocationStationaryShop from "../components/stationaryShop/ViewByLocationStationaryShop";
import ViewStationaryShopById from "../components/stationaryShop/ViewStationaryShopById";
import {  Route, Switch } from "react-router-dom";
import './page.css';

const StationaryShopPage = (props) => {
    return ( 
        <div>
        <div className="container">
          <div className="page">
            <div className="pageButton">
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/add`)}>Add</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewbylocation`)}>ViewByLocation</button>
            </div>
            <div className="pageLine"></div>
            <div className="pageContainer">
              <Switch>
                <Route
                  exact
                  path={`${props.match.url}/add`}
                  component={AddStationaryShop}
                />
                <Route
                  exact
                  path={`${props.match.url}/view`}
                  component={ViewStationaryShopById}
                />
                <Route
                  exact
                  path={`${props.match.url}/viewbylocation`}
                  component={ViewByLocationStationaryShop}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default StationaryShopPage;