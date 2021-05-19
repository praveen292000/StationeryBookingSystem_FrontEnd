import DisplayOrder from "./DisplayOrder";

const DisplayOrderList = ({orderList}) => {
    return ( 
        <div>
              {
                orderList.map((order)=> <div key={order.orderId}> <DisplayOrder order={order}/></div>)
            }
        </div>
     );
}
 
export default DisplayOrderList;