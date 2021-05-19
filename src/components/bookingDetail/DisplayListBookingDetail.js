import DisplayBookingDetail from "./DisplayBookingDetail"

const DisplayListBookingDetail = ({bookingList}) => {
    return ( 
        <div>
            {
                bookingList.map((booking)=> (<DisplayBookingDetail key={booking.bookingId} booking={booking}/>))
            }
        </div>
     );
}
 
export default DisplayListBookingDetail;