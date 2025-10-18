import React, { useState } from 'react'
import contactCss from '../Contact/Contact.module.css'
export default function Contact() {
  return <>
  <title>Contact</title>
   <div className='pb-5'>
    <h1 className='portfolioHeader text-center mt-4 fw-bold'>CONTACT SECTION</h1>
     <div className='d-flex justify-content-center align-items-center mb-5'>
      <div className='portfolioLines'></div>
      <div className='px-3' ><i class="fa-solid fa-star portfolioStar"></i></div>
      <div className='portfolioLines'></div>
    </div>
    <div className=" container-fluid container-lg">
      <div className="row justify-content-center">
    <div className='col-lg-6 px-5 px-lg-0'>
      
   <div className="mb-5">
  <input type="text" className={`form-control input`} id="exampleFormControlInput1" placeholder="userName" />
</div>
<div className="mb-5">
  <input type="number"  className="form-control input" id="exampleFormControlInput1" placeholder="userAge" />
</div>
<div className="mb-5">
  <input type="email" className="form-control input" id="exampleFormControlInput1" placeholder="userEmail" />
</div>
<div className="mb-4">
  <input type="password" className="form-control input" id="exampleFormControlInput1" placeholder="userPassword" />
</div>
<button className='text-white py-2 px-3 rounded-2'>send Message</button>
</div>
</div>
</div>


  </div>

  </>
}
