import {  Route, Switch } from "react-router-dom";
import UpdateBookingDetail from "../components/bookingDetail/UpdateBookingDetail"
import ViewBookingDetail from "../components/bookingDetail/ViewBookingDetail"
import ViewBookingDetailByCustomer from "../components/bookingDetail/ViewBookingDetailByCustomer"
import './page.css';

const BookingDetailPage = (props) => {
    return ( 

        <div>
        <div className="container">
          <div className="page">
            <div className="pageButton">
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/view`)}>View</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/update`)}>Update</button>
                <button className="btn btn-outline-dark" onClick={()=>props.history.push(`${props.match.url}/viewbycustomer`)}>ViewByCustomer</button>
            </div>
            <div className="pageLine"></div>
            <div className="pageContainer">
              <Switch>
                <Route
                  exact
                  path={`${props.match.url}/view`}
                  component={ViewBookingDetail}
                />
                <Route
                  exact
                  path={`${props.match.url}/update`}
                  component={UpdateBookingDetail}
                />
                <Route
                  exact
                  path={`${props.match.url}/viewbycustomer`}
                  component={ViewBookingDetailByCustomer}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
        // <div>
        //     <UpdateBookingDetail/> 
           
        //     <ViewBookingDetail/>
        //     <ViewBookingDetailByCustomer/>
        // </div>
     );
}
 
export default BookingDetailPage;