const DisplayOrder = ({order}) => {
    return ( 
        <div className="container-sm p-3">     
              <p>OrderId : {order.orderId}</p>
              <p>BookingStatus : {order.bookingStatus}</p>
              <p>Total Products : {order.totalProdcuts}</p>
              <p>Total Cost : {order.totalCost}</p>
              <p>Date : {order.orderDate}</p>
        </div>
     );
}
 
export default DisplayOrder;