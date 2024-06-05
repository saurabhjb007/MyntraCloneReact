import React from 'react'
import {imgWomenArr, imgWomenOfferArr } from '../body/imgUrl'

function WomenBody() {
  return (
    <div className='text-center'>
    <img className='mt-4 w-5/6 m-auto'
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/30/4d5cd030-06fe-4c79-867d-5f1b598ddf6a1717010361896-FLAT-500-Off-on-1st-Purchase-Strip.jpg"
      alt='banner' />
    <img className='mt-2'
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/29/1ec0c4aa-ae29-4885-afb0-7c40a8d9cab51716983601539-DESKTOP-WP-BANNER.jpg"
      alt='banner' />

    <img className=' mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'150px'} alt='banner' />

    <div className='flex p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>

    <img className=' mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
      height={'100px'} alt='banner' />

    <div className='flex p-2'>
      {imgWomenOfferArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>


    <img className=' mt-4 m-4'
      src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
      height={'150px'} alt='banner' />

    <div className='flex p-2'>
      {imgWomenArr.map(val => {
        console.log(val)
        return <img src={val.img} className='col-2' alt='shradda' />
      })}
    </div>
    <img className='my-8'
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/1/2c1fc4d4-6d90-41a4-aac7-544939070d4a1714558979424-App-Install-Banner-----8.png"
      alt='banner' />
  </div>
  )
}

export default WomenBody