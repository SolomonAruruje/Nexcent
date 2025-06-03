import React from 'react'
import Logo from '../assets/Icons/Logo.svg'
import Logo1 from '../assets/Icons/Logo (1).svg'
import Logo2 from '../assets/Icons/Logo (2).svg'
import Logo3 from '../assets/Icons/Logo (3).svg'
import Logo4 from '../assets/Icons/Logo (4).svg'
import Logo5 from '../assets/Icons/Logo (5).svg'
import Logo6 from '../assets/Icons/Logo (6).svg'

const Clients = () => {
  return (
    <div className='w-[100%] bg-white py-5'>
    <div className='flex flex-col justify-self-center text-center w-[75%]'>
        <div className='mb-8'>
            <h3 className='text-[#4D4D4D] text-[25.06px] font-semibold'>Our Clients</h3>
            <p className='text-[11.14px] text-[#717171] font-normal'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='flex flex-row gap-9 md:gap-20 flex-wrap justify-center'>
            <img src={Logo} alt="img" className='hover:scale-110' />
            <img src={Logo1} alt="img" className='hover:scale-110' />
            <img src={Logo2} alt="img" className='hover:scale-110' />
            <img src={Logo3} alt="img" className='hover:scale-110' />
            <img src={Logo4} alt="img" className='hover:scale-110' />
            <img src={Logo5} alt="img" className='hover:scale-110' />
            <img src={Logo6} alt="img" className='hover:scale-110' />
        </div>
    </div>
    </div>
  )
}

export default Clients