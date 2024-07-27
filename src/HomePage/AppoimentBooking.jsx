import React from 'react'

export const AppoimentBooking = () => {

    return (
        <>
            <div className='container-fluid d-flex flex-column' id='containerAP'>

                <div className='m-auto w-50 h-75 rounded my-3'>
                    <h3 className='bg-dark text-white text-center m-0'>Appointment Booking</h3>
                    <div className='w-100 h-100 d-flex flex-column p-3' id='formcontentAP'>

                        <div className='w-75 h-50 m-auto'>
                            <form>
                                <div className='row mb-3'>
                                    <label htmlFor='customerName' className='col-lg-5 col-md-auto col-form-label'>Customer Name</label>
                                    <div className='col'>
                                        <input type="text" className='form-control' id='customerName' />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='phoneNumber' className='col-lg-5 col-md-auto col-form-label'>Phone Number</label>
                                    <div className='col'>
                                        <input type="number" className='form-control' id='phoneNumber' />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='vehicleNumber' className='col-lg-5 col-md-auto col-form-label'>Vehicle Number</label>
                                    <div className='col'>
                                        <input type="text" className='form-control' id='vehicleNumber' />
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='appoiment' className='col-lg-5 col-md-auto col-form-label'>Appoiments</label>
                                    <div className='col'>
                                        <select type="text" className='form-control' id='appoiment'>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='row mb-3'>
                                    <label htmlFor='typeofservice' className='col-lg-5 col-md-auto col-form-label'>Type of Service</label>
                                    <div className='col'>
                                        <select type="text" className='form-control' id='typeofservice'>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                            <option>Select</option>
                                        </select>
                                    </div>
                                </div>
                                <button className='btn bg-dark text-white d-flex mx-auto'>Book Appointment</button>
                            </form>
                        </div>

                    </div>
                </div>
                <hr></hr>
            </div>

            <h1 className='text-center mt-5'>Track your vehicle</h1>

            <div className='trackAP mx-auto w-75 my-5 border rounded'>
                <span className='h5'>Vehicle Number: </span> <span className='h5'>TN-04-BQ-0240</span>
                <div className='row my-5 mx-auto'>
                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(33,37,41)", color: "white" }}>
                        <h5>Work Started</h5>
                    </div>

                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work On process</h5>
                    </div>
                    <div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Fifty percent work completed</h5>
                    </div>

                    <div className='col-lg-3 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work Going to complete</h5>
                    </div>

                    <div className='col-lg-2 col-md-auto text-center' style={{ backgroundColor: "rgb(229,229,229)" }}>
                        <h5>Work completed</h5>
                    </div>

                </div>
                <div className='d-flex justify-content-between px-3 mb-3'>
                    <span className='h4'>Amount : 0 ₹</span>
                    <button className='btn bg-dark text-white' disabled>Pay</button>
                </div>
            </div>

        </>
    )
}
