import React from 'react'
import members from '../assets/Members.svg'
import clubs from '../assets/Clubs.svg'
import Event from '../assets/Events.svg'
import payments from '../assets/Payments.svg'

const Help = () => {
  return (
    <div className='bg-[#F5F7FA] py-11 mb-10'>
        <div className='md:w-[70%] flex flex-col md:flex-row items-center justify-self-center'>
        <div className='w-[50%] sm:w-[] flex-wrap'>
            <h3 className='text-[25.06px]/[30.63px] text-[#4D4D4D] font-semibold'>Helping a local <span className='text-[#4CAF4F]'>business reinvent itself</span></h3>
            <p className='text-[11.14px]/[16.71px] font-normal text-[#18191F]'>We reached here with our hard work and dedication</p>
        </div>
        <div className='w-[50%] sm:w-[] flex-wrap justify-items-end'>
        <div className='flex flex-row mt-8 md:mt-0'>
            <div className='flex flex-row items-center w-[280px] md:w-[150px] mr-15'>
                <div className='md:mr-2.5'>
                    <img src={members} alt="img" className='w-full'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[19.49px]/[25.06px] font-semibold text-[#4D4D4D]'>2,245,341</h3>
                    <p className='text-[11.14px]/[16.71px] font-normal text-[#717171]'>Members</p>
                </div>
            </div>
            <div className='flex flex-row items-center w-[280px] md:w-[150px]'>
                <div className='md:mr-2.5'>
                    <img src={clubs} alt="img" className='w-full'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[19.49px]/[25.06px] font-semibold text-[#4D4D4D]'>46,328</h3>
                    <p className='text-[11.14px]/[16.71px] font-normal text-[#717171]'>Clubs</p>
                </div>
            </div>
        </div>
        <div className='flex flex-row mt-7 md:mt-8'>
            <div className='flex flex-row items-center w-[280px] md:w-[150px] mr-15'>
                <div className='md:mr-2.5'>
                    <img src={Event} alt="img" className='w-full'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[19.49px]/[25.06px] font-semibold text-[#4D4D4D]'>828,867</h3>
                    <p className='text-[11.14px]/[16.71px] font-normal text-[#717171]'>Event Bookings</p>
                </div>
            </div>
            <div className='flex flex-row items-center w-[280px] md:w-[150px]'>
                <div className='md:mr-2.5'>
                    <img src={payments} alt="img" className='w-full'/>
                </div>
                <div className='flex flex-col'>
                    <h3 className='text-[19.49px]/[25.06px] font-semibold text-[#4D4D4D]'>1,926,436</h3>
                    <p className='text-[11.14px]/[16.71px] font-normal text-[#717171]'>Payments</p>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Help