import React from 'react'
import Rightarrow from "../assets/Brightarrow.svg"

const Demo = () => {
  return (
    <div className='flex justify-center items-center w-[100%] bg-[#F5F7FA] overflow-x-hidden'>
        <div className='w-[75%] py-6 flex flex-col text-center items-center'>
            <h1 className='text-[44.55px]/[52.9px] text-[#263238] md:w-[75%] font-semibold'>Pellentesque suscipit fringilla libero eu.</h1>
            <a href="#">
            <button className='rounded-[5px] text-[11.14px]/[16.71px] hover:scale-110 hover:bg-[#66b869] w-[120px] font-medium flex flex-row justify-center items-center py-3 mt-7 bg-[#4CAF4F] text-white'>
                Get a Demo 
                <img src={Rightarrow} alt="" className='ml-2 w-[15%]'/>
                </button>
            </a>
        </div>
    </div>
  )
}

export default Demo