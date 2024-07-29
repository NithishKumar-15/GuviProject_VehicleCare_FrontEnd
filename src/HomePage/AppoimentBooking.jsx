import { React,useState,useRef } from 'react';
import instance from '../AxiosInstance/axiosinstance';

export const AppoimentBooking = ({allServiceDetails,user,trackVehicle}) => {

   
    const [successMessage,setSuccessMessage]=useState(null)
    //useRefs to handel the appoinment form inputs
    const customerName=useRef();
    const phoneNumber=useRef();
    const vehicleNumber=useRef();
    const appoinmentDate=useRef();
    const service=useRef();
    console.log(trackVehicle)

    async function appoinmentBooking(e){
        e.preventDefault();

        const data={
            customerName:customerName.current.value,
            phoneNumber:phoneNumber.current.value,
            vehicleNumber:vehicleNumber.current.value,
            appoinmentDate:appoinmentDate.current.value,
            service:service.current.value
        }

         
           await instance.post("HomePage/AppointmentBook",data).then((res)=>{
                if(res.data.message==="Appoiment added"){
                    phoneNumber.current.value="";
                    vehicleNumber.current.value=""
                    setSuccessMessage("");
                }
           })
    }

    return (
        <>
            <div className='container-fluid d-flex flex-column' id='containerAP'>

                <div className='m-auto w-50 h-75 rounded my-3'>
                    <h3 className='bg-dark text-white text-center m-0'>Appointment Booking</h3>
                    <div className='w-100 h-100 d-flex flex-column p-3' id='formcontentAP'>

                        <div className='w-75 h-50 m-auto'>
                            <form onSubmit={appoinmentBooking}>
                                <div className='row mb-3'>
                                    <label htmlFor='customerName' className='col-lg-5 col-md-auto col-form-label'>Customer Name</label>
                                    <div className='col'>
                                        <input type="text" className='form-control' id='customerName'ref={customerName} value={user} disabled/>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='phoneNumber' className='col-lg-5 col-md-auto col-form-label'>Phone Number</label>
                                    <div className='col'>
                                        <input type="number" className='form-control' id='phoneNumber' ref={phoneNumber}/>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='vehicleNumber' className='col-lg-5 col-md-auto col-form-label'>Vehicle Number</label>
                                    <div className='col'>
                                        <input type="text" className='form-control' id='vehicleNumber' ref={vehicleNumber}/>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='appoiment' className='col-lg-5 col-md-auto col-form-label'>Available Appointments Dates</label>
                                    <div className='col'>
                                        <select type="text" className='form-control' id='appoiment' ref={appoinmentDate}>
                                            <option value="2024/7/29/1">2024/06/29</option>
                                            <option value="2024/7/29/1">2024/06/29</option>
                                            <option value="2024/7/29/1">2024/06/29</option>
                                            <option value="2024/7/29/1">2024/06/29</option>
                                            <option value="2024/7/29/1">2024/06/29</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='typeofservice' className='col-lg-5 col-md-auto col-form-label'>Type of Service</label>
                                    <div className='col'>
                                        <select type="text" className='form-control' id='typeofservice'ref={service}>
                                            {allServiceDetails.map((val)=>(<option key={val.ServiceName} value={`${val.ServiceName}/${val.Price}`}>{val.ServiceName}</option>))}
                                        </select>
                                    </div>
                                </div>
                                {successMessage!=null&& 
                                <div className='mb-3  text-center'>
                                <label className='form-text text-success'>Your Appoinment Booked you will get email on date of appoinment Please login again to track your vehicle</label>
                                </div>
                                }
                                <button className='btn bg-dark text-white d-flex mx-auto'>Book Appointment</button>
                            </form>
                        </div>

                    </div>
                </div>
                <hr></hr>
            </div>

            <h1 className='text-center mt-5'>Track your vehicle</h1>

           {trackVehicle!=""&&<div className='trackAP mx-auto w-75 my-5 border rounded'>
                <span className='h5'>Vehicle Number: </span> <span className='h5'>{trackVehicle.vehicleNumber}</span>
                <div className='row my-5 mx-auto'>

                    {trackVehicle.work==="workstarted"?<div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Work Started</h5>
                    </div>:
                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work Started</h5>
                    </div>}

                    {trackVehicle.work==="workonprocess"?<div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Work On process</h5>
                    </div>:
                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work On process</h5>
                    </div>}

                    {trackVehicle.work==="fiftypercentofworkcompleted"?<div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Fifty percent work completed</h5>
                    </div>:
                    <div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Fifty percent work completed</h5>
                    </div>}

                    {trackVehicle.work==="workgoingtocomplete"?<div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Work Going to complete</h5>
                    </div>:
                    <div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work Going to complete</h5>
                    </div>}

                    {trackVehicle.work==="workcompleted"?<div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Work completed</h5>
                    </div>:
                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work completed</h5>
                    </div>}

                </div>
                <div className='d-flex justify-content-between px-3 mb-3'>
                    {trackVehicle.work==="workstarted"&& <span className='h4'>Amount : {Number(trackVehicle.serviceAmount)/5} ₹</span>}
                    {trackVehicle.work==="workonprocess"&& <span className='h4'>Amount : {Number(trackVehicle.serviceAmount)/4} ₹</span>}
                    {trackVehicle.work==="fiftypercentofworkcompleted"&& <span className='h4'>Amount : {Number(trackVehicle.serviceAmount)/3} ₹</span>}
                    {trackVehicle.work==="workgoingtocomplete"&& <span className='h4'>Amount : {Number(trackVehicle.serviceAmount)/2} ₹</span>}
                    {trackVehicle.work==="workcompleted"&& <span className='h4'>Amount : {Number(trackVehicle.serviceAmount)} ₹</span>}
                    {trackVehicle.work==="workcompleted"?<button className='btn bg-dark text-white'>Pay</button>:<button className='btn bg-dark text-white' disabled>Pay</button>}
                    
                </div>
            </div>}
        </>
    )
}


