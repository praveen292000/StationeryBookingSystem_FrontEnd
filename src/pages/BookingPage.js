import {  Route, Switch } from "react-router-dom";
import UpdateBooking from "../components/booking/UpdateBooking"
import ViewBooking from "../components/booking/ViewBooking"
import ViewBookingByCustomer from "../components/booking/ViewBookingByCustomer"
import './page.css';

const BookingPage = (props) => {
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
                  component={ViewBooking}
                />
                <Route
                  exact
                  path={`${props.match.url}/update`}
                  component={UpdateBooking}
                />
                <Route
                  exact
                  path={`${props.match.url}/viewbycustomer`}
                  component={ViewBookingByCustomer}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
        // <div>
        //     <UpdateBooking/> 
           
        //     <ViewBooking/>
        //     <ViewBookingByCustomer/>
        // </div>
     );
}
 
export default BookingPage;