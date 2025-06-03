import React from 'react'
import MO from '../assets/MO.svg'
import NA from '../assets/NA.svg'
import CAG from '../assets/CAG.svg'

const Community = () => {
  return (
    <div>
        <div className='w-[75%] flex flex-col justify-self-center text-center my-5'>
            <div className=''>
                <h3 className='text-[rgb(77,77,77)] text-[30.63px]/[30.63px] font-semibold md:w-[60%] justify-self-center'>Manage your entire community in a single system</h3>
            <p className='m-2 text-[11.14px]/[16.71px] text-[#717171] font-normal'>Who is Nextcent suitable for?</p>
            </div>
            <div className='flex flex-col items-center md:flex-row md:justify-self-center md:justify-center my-6'>
                <div className='h-[180px] md:w-[28%] my-2.5 md:my-0 border border-white hover:scale-110  shadow-lg flex flex-col items-center text-center justify-center mr-6 rounded-2xl py-5 px-0.5'>
                <a href='/members' className='flex flex-col items-center text-center justify-center'>
                    <img src={MO} alt="" width={60}/>
                    <h3 className='text-[#4D4D4D] text-[19.49px]/[25.06px] font-semibold'>Membership Organisations</h3>
                    <p className='text-[9.74px] text-[#717171] font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </a>
                </div>
                <div className='h-[180px] md:w-[28%] my-2.5 md:my-0 border border-white hover:scale-110  shadow-lg flex flex-col items-center text-center justify-center mr-6 rounded-2xl py-5 px-0.5'>
                <a href='/national' className='flex flex-col items-center text-center justify-center'>
                    <img src={NA} alt="" width={60}/>
                    <h3 className='text-[#4D4D4D] text-[19.49px]/[25.06px] font-semibold'>National <br/>Associations</h3>
                    <p className='text-[9.74px] text-[#717171] font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </a>
                </div>
                <div className='h-[180px] md:w-[28%] my-2.5 md:my-0 border border-white hover:scale-110  shadow-lg flex flex-col items-center text-center justify-center mr-6 rounded-2xl py-5 px-0.5'>
                <a href='/clubs' className='flex flex-col items-center text-center justify-center'>
                    <img src={CAG} alt=""width={60} />
                    <h3 className='text-[#4D4D4D] text-[19.49px]/[25.06px] font-semibold'>Clubs And Groups</h3>
                    <p className='text-[9.74px] text-[#717171] font-normal'>Our membership management software provides full automation of membership renewals and payments</p>
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Community