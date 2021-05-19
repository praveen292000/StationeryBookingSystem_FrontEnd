import axios from 'axios';
const baseUrl = "http://localhost:8587";


export function addStoreInchargeResquest(data){
    console.log("-----------Inside Add StoreIncharge Request----------")
    const url=baseUrl+"/storeIncharges/add";
    const promise=axios.post(url,data);
    console.log("Complete");
    return promise;
}

export function viewStoreInchargeById(storeInchargeId){
    console.log("-----------Inside View StoreIncharge By Id Request----------")
    const url=baseUrl+`/storeIncharges/view/${storeInchargeId}`;
    const promise=axios.get(url);
    return promise;
}

export function viewStoreInchargeRequest(storeInchargeId){
    console.log("-----------Inside View StoreIncharge By Location Request----------")
    const url=baseUrl+`/storeIncharges/view/${storeInchargeId}`;
    const promise=axios.get(url);
    return promise;
}

export function viewAllStoreIncharge(){
    console.log("-----------Inside All View StoreIncharge Request----------")
    const url=baseUrl+"/storeIncharges/view-all";
    const promise=axios.get(url);
    return promise;
}