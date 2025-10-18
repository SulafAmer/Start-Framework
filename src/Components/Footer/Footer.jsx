import React from 'react'
import footerCss from '../Footer/Footer.module.css'
export default function Footer() {
  return <>
<div className='text-white text-center'>
<div className={`${footerCss.firstFooterDiv} py-5`}>
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-4 mb-lg-0 mb-5'>
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='col-lg-4 mb-lg-0 mb-5'>
               <h3>AROUND THE WEB</h3>
               <div className='d-flex justify-content-center'>
               <div className={`${footerCss.iconBorder} d-flex justify-content-center align-items-center mx-1`}>
               <i class="fa-brands fa-facebook"></i>
               </div>
                <div className={`${footerCss.iconBorder} d-flex justify-content-center align-items-center mx-1`}>
               <i class="fa-brands fa-twitter"></i>
               </div>
                <div className={`${footerCss.iconBorder} d-flex justify-content-center align-items-center mx-1`}>
               <i class="fa-brands fa-linkedin-in"></i>
               </div>
                <div className={`${footerCss.iconBorder} d-flex justify-content-center align-items-center mx-1`}>
               <i class="fa-solid fa-globe"></i>
               </div>
               </div>


            </div>
            <div className='col-lg-4 mb-lg-0 mb-2'>
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
            
        </div>
    </div>

</div>
<div className={`${footerCss.secondFooterDiv} py-4`}>
    <p>Copyright © Your Website 2021</p>
</div>
</div>

  </>
}
