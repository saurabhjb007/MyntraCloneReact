import React from 'react'
import { withRouter } from 'react-router-dom'
import { imgMenArr, offerImg } from '../body/imgUrl'

function MenBody(props) {
  return (
    <div className='col text-center'>
      <img className='mt-4 w-5/6 m-auto'
      src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/30/4d5cd030-06fe-4c79-867d-5f1b598ddf6a1717010361896-FLAT-500-Off-on-1st-Purchase-Strip.jpg"
      alt='banner' />
      <img className='mt-2'  onClick={() => { props.history.push('/filtermen') }}
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/5/29/976fb3c0-274a-48bb-bc85-0cda5d5d97081716982199708-DESKTOP-MP-BANNER.jpg'
       alt='banner' />

      <img className='mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='p-2 flex'>
        {imgMenArr.map(val => {
          return <img src={val.img}
            onClick={() => { props.history.push('/filtermen') }}
            className='col-2' alt='shradda' />
        })}
      </div>

      <img className='mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/85891451-b148-4e95-b9f2-0bf42e82e51a1646993148063-Don_t-Miss-These-Offers.jpg'
        height={'100px'} alt='banner' />

      <div className='p-2 flex'>
        {offerImg.map(val => {
          console.log(val)
          return <img src={val.img}
          onClick={()=>{props.history.push('/filtermen')}}
           className='col-2' alt='shradda' />
        })}
      </div>


      <img className='mt-4 m-4'
        src='https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/11/d153ee75-3464-44f7-9041-4afd29d95a751646993148101-Unbelievable-Deals.jpg'
        height={'150px'} alt='banner' />

      <div className='flex p-2'>
        {imgMenArr.map(val => {
          console.log(val)
          return <img src={val.img} 
          onClick={()=>{props.history.push('/filtermen')}}
          className='col-2' alt='shradda' />
        })}
      </div>
    </div>
  )
}

export default withRouter(MenBody)