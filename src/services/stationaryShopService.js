import axios from 'axios';
const baseUrl = "http://localhost:8081";


export function addStationaryShopResquest(data){
    console.log("-----------Inside Add StationaryShop Request----------")
    const url=baseUrl+"/stationaryShops/add";
    const promise=axios.post(url,data);
    return promise;
}

export function viewStationaryShopById(stationaryShopId){
    console.log("-----------Inside View StationaryShop By Id Request----------")
    const url=baseUrl+`/stationaryShops/view/${stationaryShopId}`;
    const promise=axios.get(url);
    return promise;
}

export function viewStationaryShopByLocation(pincode){
    console.log("-----------Inside View StationaryShop By Location Request----------")
    const url=baseUrl+`/stationaryShops/viewbylocation/${pincode}`;
    const promise=axios.get(url);
    return promise;
}

export function viewAllStationaryShop(){
    console.log("-----------Inside All View StationaryShop Request----------")
    const url=baseUrl+"/stationaryShops/viewall";
    const promise=axios.get(url);
    return promise;
}