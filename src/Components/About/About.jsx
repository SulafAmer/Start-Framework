import React from 'react'
import aboutCss from '../About/About.module.css'
export default function About() {
  return <>
  <title>About</title>
  <div className={`text-white ${aboutCss.mainAbout} text-center py-5`}>
    <h1 className={`fw-bold ${aboutCss.hp}`}>ABOUT COMPONENT</h1>
     <div className='d-flex justify-content-center align-items-center mb-3'>
      <div className='homeLines'></div>
      <div className='px-3' ><i class="fa-solid fa-star"></i></div>
      <div className='homeLines'></div>
    </div>
    <div className={`container justify-content-center px-5 ${aboutCss.mb}`}>
      <div className='row pb-5'>
     <div className='col-lg-6 col-12 text-start'>
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     </div>
     <div className='col-lg-6 col-12 text-start'>
      <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
     </div>
     </div>
    </div>


  </div>
 
  </>
}
