import DisplayStationaryShop from "./DisplayStationaryShop";

const DisplayStationaryShopList = ({stationaryShopList}) => {
    return ( 
        <div >
            {
                stationaryShopList.map((stationaryShop)=> <div key={stationaryShop.stationaryShopId}> <DisplayStationaryShop stationaryShop={stationaryShop}/></div>)
            }
        </div>
     );
}
 
export default DisplayStationaryShopList;