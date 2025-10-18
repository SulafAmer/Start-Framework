import React from 'react'
import avatarImg from '../../assets/avataaars.svg'
import homeCss from '../Home/Home.module.css'

export default function Home() {
  return <>
  <div className={`h-100 ${homeCss.mainHome} text-white py-5`}>
    <div className='d-flex justify-content-center mb-4'>
    <img src={avatarImg} className={`${homeCss.w}`}/>
    </div>
    <div className='text-center'> 
    <h1>START FRAMEWORK</h1>
    <div className='d-flex justify-content-center align-items-center mb-2'>
      <div className='homeLines'></div>
      <div className='px-3' ><i class="fa-solid fa-star"></i></div>
      <div className='homeLines'></div>
    </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>

    </div>
  </div>
  </>
}
