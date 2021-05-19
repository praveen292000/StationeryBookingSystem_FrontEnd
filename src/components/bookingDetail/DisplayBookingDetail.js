const DisplayBookingDetail = ({booking}) => {
    return ( 
        <div className="container-sm p-3">
            <p>BookingId : {booking.bookingId}</p>
            <p>CustomerId : {booking.customerId}</p>
            <p>FirstName : {booking.firstName}</p>
            <p>BookingDate : {booking.bookingDate}</p>
            <p>BookingStatus :{booking.bookingStatus}</p>
            <h6>Products</h6>
            {booking.productName.map((product,index)=>
            <p>{index+1} : {product}</p>)}
        </div>
     );
}
 
export default DisplayBookingDetail;