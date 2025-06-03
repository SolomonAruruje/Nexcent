import React from 'react'
import image1 from "../assets/image 18.svg"
import Rightarrow from "../assets/Right.svg"
import image2 from "../assets/image 19.svg"
import image3 from "../assets/image 20.svg"


const Marketing = () => {
  return (
    <div className='w-[100%] py-5'>
        <div className='w-[70%] justify-center justify-self-center'>
            <div className='flex flex-col items-center text-center justify-self-center'>
                <h3 className='text-[25.06px]/[30.63px] text-[#4D4D4D] font-semibold'>Caring is the new marketing</h3>
                <p className='text-[11.41px]/[16.71px] text-[#717171] font-normal md:w-[60%]'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='flex flex-col md:flex-row w-[100%] justify-self-center md:py-5 pt-5 pb-15 md:pb-20 items-center justify-center'>
                <div className=' mb-25 md:mb-0'>
                    <div className='lg:w-[350px] md:w-[250px] md:mr-4 text-center relative flex justify-center'>
                        <img src={image1} alt="" className='lg:w-[350px]'/>
                        <div className='bg-[#ffffff] shadow-lg w-[200px] md:w-[212.5px] px-1.5 py-5 rounded-2xl absolute lg:w-[280px] h-[125.94px] lg:h-[125.94px] lg:bottom-[-20%] bottom-[-30%] flex flex-col justify-self-center items-center'>
                            <p className='text-[#717171] text-[13.92px]/[19.49px] font-semibold md:w-[85%]'>Creating Streamlined Safeguarding Processes with OneRen</p>
                            <a href="#" className='mt-2 text-[#4CAF4F] text-[13.92px]/[19.49px] flex flex-row'>Readmore<img src={Rightarrow} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='justify-self-center mb-25 md:mb-0'>
                    <div className='w-[350px] md:mr-4 text-center relative flex justify-center'>
                        <img src={image2} alt="" className='lg:w-[350px]'/>
                        <div className='bg-[#ffffff] shadow-lg w-[200px] md:w-[212.5px] px-1.5 py-5 rounded-2xl absolute lg:w-[280px] h-[125.94px] lg:h-[125.94px] lg:bottom-[-20%] bottom-[-30%] flex flex-col justify-self-center items-center'>
                            <p className='text-[#717171] text-[13.92px]/[19.49px] font-semibold md:w-[85%]'>What are your safeguarding responsibilities and how can you manage them?</p>
                            <a href="#" className='mt-2 text-[#4CAF4F] text-[13.92px]/[19.49px] flex flex-row'>Readmore<img src={Rightarrow} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='justify-self-center'>
                    <div className='w-[350px] text-center relative flex justify-center'>
                        <img src={image3} alt="" className='lg:w-[350px]'/>
                        <div className='bg-[#ffffff] shadow-lg w-[200px] md:w-[212.5px] px-1.5 py-5 rounded-2xl absolute lg:w-[280px] h-[125.94px] lg:h-[125.94px] lg:bottom-[-20%] bottom-[-30%] flex flex-col justify-self-center items-center'>
                            <p className='text-[#717171] text-[13.92px]/[19.49px] font-semibold md:w-[85%]'>Revamping the Membership Model with Triathlon Australia</p>
                            <a href="#" className='mt-2 text-[#4CAF4F] text-[13.92px]/[19.49px] flex flex-row'>Readmore<img src={Rightarrow} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Marketing