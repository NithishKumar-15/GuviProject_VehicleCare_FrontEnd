import React from 'react'

export const FeedBack = () => {
  return (
    <div className='mb-3'>
    <div className='w-25 h-25 mx-auto border'>
      <h5 className='text-center bg-dark text-white'>FeedBack Form</h5>

      <div className='w-75 h-75 mx-auto'>
      <form action="post">
        <div className='mb-3'>
        <label className='form-label' htmlFor='userName'>User Name</label>
        <input type={"text"} className="form-control" id='userName'></input>
        </div>

        <div className='mb-3'>
        <label className='form-label' htmlFor='feedback'>Your FeedBack</label>
        <textarea type={"text"} className="form-control" id='feedback' rows={'3'}/>
        </div>
        
        <div className='mb-3'>
        <label className='form-label' htmlFor='rating'>Your Rating</label>
        <select className="form-control" id='rating' >
          <option disabled>Your Rating from 1 t0 5</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>             
       </div>
       <button className='btn bg-dark text-white d-flex mx-auto mb-3'>Submit</button>
      </form>
      </div>

    </div>
  </div>
  )
}
