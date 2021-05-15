const DisplayBooking = ({order}) => {
    return ( 
        <div className="container-sm p-3">
            <p>OrderId : {order.orderId}</p>
            <p>CustomerId : {order.customerId}</p>
            <p>FirstName : {order.firstName}</p>
            <p>OrderDate : {order.orderDate}</p>
            <p>OrderStatus :{order.orderStatus}</p>
            <h6>Productss</h6>
            {order.ProductsName.map((Products,index)=>
            <p>{index+1} : {Products}</p>)}
        </div>
     );
}
 
export default DisplayBooking;