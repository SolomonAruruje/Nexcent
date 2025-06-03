import React from 'react'

const Banner2 = ({
  Heading = "The unseen of spending three years at Pixelgrade",
  Content = "Type here",
  ButtonText = "Learn More",
  Picture = "4.5",
  reverseOrder = false,
 }) => {
  return (
    <div className='pb-5' id='1'>
      <div className={`${reverseOrder ? "md:flex-row-reverse flex-col-reverse" : ""} flex flex-col md:flex-row w-[75%] md:justify-around items-center justify-self-center flex-wrap`}>
            <div className={`w-[60%]`}>
                <h2 className='text-[25.06px]/[30.63px] text-[#4D4D4D] font-semibold my-3'>{Heading}</h2>
                <p className='text-[#717171] text-[9.74px]/[13.92px] my-3 font-normal'>{Content}</p>
                <a href="#">
                    <button className='rounded border border-none bg-[#4CAF4F] px-5 py-2 my-3 text-white text-[11.14px] font-normal hover:scale-110 hover:bg-[#66b869]'>{ButtonText}</button>
                </a>
            </div>
            <div className={`w-[100%] md:w-[35%]`}>
                <img src={Picture} alt="Image" />
            </div>
        </div>
    </div>
  )
}

export default Banner2