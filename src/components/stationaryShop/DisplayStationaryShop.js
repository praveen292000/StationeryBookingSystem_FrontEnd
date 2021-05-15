const DisplayStationaryShop = ({stationaryShop}) => {
    return ( 
        <div className="container-sm p-3"> 
              <p>StationaryShopId : {stationaryShop.stationaryShopId}</p>
              <p>StationaryShopName : {stationaryShop.stationaryShopName}</p>
              <p>Manager Name : {stationaryShop.managerName}</p>
              <p>Contact Number : {stationaryShop.contactNumber}</p>
        </div>
     );
}
 
export default DisplayStationaryShop;