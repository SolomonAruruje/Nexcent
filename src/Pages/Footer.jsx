import React from 'react'
import Logo from "../assets/LogoIcon.svg"
import Instagram from "../assets/Instagram.svg"
import Dribble from "../assets/Website.svg"
import Twitter from "../assets/Twitter.svg"
import Youtube from "../assets/Youtube.svg"
import Send from "../assets/send.svg"

const Footer = () => {
  return (
    <div>
        <div className='bg-[#263238] py-15'>
            <div className='flex  flex-col md:flex-row justify-between md:w-[70%] justify-self-center'>
                <div className='flex flex-col'>
                  <a href="/" className="flex flex-row">
                      <img src={Logo} alt="" />
                      <h3 className="ml-2 text-[25.06px]/[30.63px] font-bold text-[#FFFFFF]">Nexcent</h3>
                  </a>
                  <div className='my-6'>
                      <p className='text-[9.74px]/[13.92px] font-normal text-white'>Copyright &copy; 2020 Landify UI Kit.</p>
                      <p className='text-[9.74px]/[13.92px] font-normal text-white'>All rights reserved</p>
                  </div>
                  <div className='flex flex-row'>
                    <a href="#"><img src={Instagram} alt="" className='mr-3' /></a>
                    <a href="#"><img src={Dribble} alt="" className='mr-3' /></a>
                    <a href="#"><img src={Twitter} alt="" className='mr-3' /></a>
                    <a href="#"><img src={Youtube} alt="" className='' /></a>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row md:justify-end mt-9 md:mt-0'>
                    <div>
                      <ul className='flex flex-col md:w-[120px] md:mr-12'>
                      <li className='text-[13.92px]/[19.49px] font-semibold text-white mb-5'>Company</li>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>About us</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Blog</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Contact us</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Pricing</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white '>Testimonials</a>
                      </ul>
                    </div>
                    <div>
                      <ul className='flex flex-col md:w-[120px] md:mr-12 mt-6 md:mt-0'>
                      <li className='text-[13.92px]/[19.49px] font-semibold text-white mb-5'>Support</li>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Help center</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Terms of service</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Legal</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white mb-2.5'>Privacy policy</a>
                      <a href='#' className='text-[9.74px]/[13.92px] text-white '>Status</a>
                      </ul>
                    </div>
                    <div>
                      <ul className='flex flex-col md:w-[120px] mt-6 md:mt-0'>
                      <li className='text-[13.92px]/[19.49px] font-semibold text-white mb-5'>Stay up to date</li>
                      <div className='bg-[#717171] rounded w-[160px] px-2 flex flex-row h-[20px] items-center'>
                      <input type="Email" placeholder='Your email address' className='text-white h-[15px] text-[9.74px]'/>
                      <a href=""><button><img src={Send} alt="" /></button></a>
                      </div>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer