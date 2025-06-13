import React from 'react'
import Logo from '../assets/Icons/Logo.svg'
import Logo1 from '../assets/Icons/Logo (1).svg'
import Logo2 from '../assets/Icons/Logo (2).svg'
import Logo3 from '../assets/Icons/Logo (3).svg'
import Logo4 from '../assets/Icons/Logo (4).svg'
import Logo5 from '../assets/Icons/Logo (5).svg'
import Logo6 from '../assets/Icons/Logo (6).svg'
import Rightarrow from "../assets/Right.svg"
import Pic from "../assets/image 9.svg"

const Customers = () => {
  return (
    <div className='bg-[#F5F7FA] py-5 overflow-x-hidden'>
        <div className='w-[75%] flex flex-col md:flex-row items-center justify-center justify-self-center'>
        <div className='mr-7'>
            <img src={Pic} alt="" />
        </div>
        <div className='flex flex-col w-[70%]'>
            <div>
                <p className='font-medium text-[11.14px]/[16.71px] text-[#717171]'>
                    Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </p>
                <p className='font-semibold text-[13.92px]/[19.49px] text-[#4CAF4F] mt-2.5'>
                    Tim Smith
                </p>
                <p className='font-normal text-[11.14px]/[16.71px] text-[#89939E] mt-2.5'>
                    British Dragon Boat Racing Association
                </p>
            </div>
            <div className='flex flex-wrap md:flex-row items-center mt-5 items'>
                <img src={Logo} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <img src={Logo1} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <img src={Logo2} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <img src={Logo3} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <img src={Logo4} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <img src={Logo5} alt="Logo" className='mr-3 md:mr-5 lg:mr-14.5'/>
                <a href='#' className='font-semibold text-[13.92px]/[19.49px] text-[#4CAF4F]'>Meet all customers </a><img src={Rightarrow} alt=""/>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Customers