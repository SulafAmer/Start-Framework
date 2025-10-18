import React from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
import portfolioCss from '../Portfolio/Portfolio.module.css'

export default function Portfolio() {
  return <>
  <title>Portfolio</title>
  <div>
    <h1 className='portfolioHeader text-center fw-bold mt-3'>PORTFOLIO COMPONENT</h1>
     <div className='d-flex justify-content-center align-items-center mb-3'>
      <div className='portfolioLines'></div>
      <div className='px-3' ><i class="fa-solid fa-star portfolioStar"></i></div>
      <div className='portfolioLines'></div>
    </div>
    <div className="container mb-4">
      <div className="row gy-5 ">
        <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img1}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 text-primary `}></i>
         </div>
        </div>
        </div>  
         <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img2}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 `}></i>
         </div>
        </div>
        </div> 
         <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img3}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 `}></i>
         </div>
        </div>
        </div> 
         <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img1}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 `}></i>
         </div>
        </div>
        </div> 
         <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img2}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 `}></i>
         </div>
        </div>
        </div> 
         <div className='col-lg-4 col-12 px-4 '>
        <div className={`position-relative ${portfolioCss.mainPlus} p-0`}>
         <img src={`${img3}`} alt="img1" className='w-100 rounded-3 '/>
         <div className={`w-100 h-100 position-absolute fixed-top rounded-3 d-flex justify-content-center align-items-center ${portfolioCss.plusDiv}`}>
           <i class={`fa-solid fa-plus fa-5x text-white m-0 `}></i>
         </div>
        </div>
        </div> 
      </div>
    </div>
  </div>
  </>
}
