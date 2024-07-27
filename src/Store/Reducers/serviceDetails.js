import instance from "../../AxiosInstance/axiosinstance";

// let allServiceDetails=[];

// await instance.get("ServiceDetails/AllServiceDetails").then((res)=>{
//     allServiceDetails=[...res.data]
// })

async function getServiceDetails(){
    let data;
await instance.get("ServiceDetails/AllServiceDetails").then((res)=>{
   data=[...res.data];
})
return data
}

let allServiceDetails=await getServiceDetails();


function serviceDetailsReducer(state=allServiceDetails,action,data){
    if(action.type==="AddData"){
        return [...data]
    }else{
        return [...state]
    }  
}

export default serviceDetailsReducer