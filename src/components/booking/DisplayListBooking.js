import DisplayBooking from "./DisplayBooking"

const DisplayListBooking = ({orderList}) => {
    return ( 
        <div>
            {
                orderList.map((order)=> (<DisplayBooking key={order.orderId} order={order}/>))
            }
        </div>
     );
}
 
export default DisplayListBooking;