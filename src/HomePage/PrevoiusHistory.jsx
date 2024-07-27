import React from 'react'

export const PrevoiusHistory = () => {
  return (
    <div className='w-50 h-25 mx-auto d-flex justify-content-between border rounded p-3 mt-3'>
        <div>
          <span className='h5' style={{color:"rgb(85,90,150)"}}>Nithish kumar</span>
          <p className='ms-1 text-secondary'>(TN-05-BQ-0240)- General Service</p>
        </div>
        <div className='text-secondary'>
          <h6>Serviced on 03/04/2024</h6>
          <div className='d-flex'>
          <span>Rating</span>
          <div className='border border-dark text-center ms-3 m-0' style={{width:"30px"}}>5</div>
          </div>
        </div>
      </div>
  )
}
