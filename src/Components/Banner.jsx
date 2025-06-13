import React, { useEffect } from 'react';
import illustration from '../assets/Illustration.svg';
import ScrlButton from '../assets/Ellipse 6.svg'

const Banner = () => {
  useEffect(() => {
    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    const slider3 = document.getElementById('slider3');
    const firstDiv = document.getElementById('1st');
    const secondDiv = document.getElementById('2nd');
    const thirdDiv = document.getElementById('3rd');

    const handleSliderChange = (slider, targetDiv) => {
      if (slider && targetDiv) {
        slider.addEventListener('change', function() {
          if (firstDiv) firstDiv.classList.add('hidden');
          if (secondDiv) secondDiv.classList.add('hidden');
          if (thirdDiv) thirdDiv.classList.add('hidden');
          if (this.checked && targetDiv) {
            targetDiv.classList.remove('hidden');
          }
        });
      }
    };

    handleSliderChange(slider1, firstDiv);
    handleSliderChange(slider2, secondDiv);
    handleSliderChange(slider3, thirdDiv);

    return () => {
      
    };
  }, []);

  return (
    <div className='bg-[#F5F7FA] pt-10'>
      <div className='w-[73%] flex flex-col md:flex-row justify-self-center justify-around items-center' id='1st'>
          <div className='w-[50%] md:w-[65%] mr-3'>
            <h2 className='text-[44.55px]/[52.9px] text-[#4D4D4D] font-semibold my-3'>Lessons and insights <span className='text-[#4CAF4F]'>from 8 years</span></h2>
            <p className='text-[#717171] text-[11.14px]/[16.71px] my-3 font-normal'>Where to grow your business as a photographer: site or social media?</p>
            <a href="#">
              <button className='rounded border border-none bg-[#4CAF4F] px-5 py-2 my-3 text-white text-[11.14px] font-normal hover:scale-110 hover:bg-[#66b869]'>Register</button>
            </a>
          </div>
          <div className='w-[80%] md:w-[30%]'>
            <img src={illustration} alt="Illustration Img" width={300}/>
          </div>
      </div>
      <div className='hidden w-[73%] flex flex-col md:flex-row justify-self-center justify-around items-center' id='2nd'>
          <div className='w-[50%] md:w-[65%] mr-3'>
            <h2 className='text-[44.55px]/[52.9px] text-[#4D4D4D] font-semibold my-3'>Insights and lesson <span className='text-[#4CAF4F]'>from 8 years</span></h2>
            <p className='text-[#717171] text-[11.14px]/[16.71px] my-3 font-normal'>Where to grow your business as a photographer: site or social media?</p>
            <a href="#">
              <button className='rounded border border-none bg-[#4CAF4F] px-5 py-2 my-3 text-white text-[11.14px] font-normal hover:scale-110 hover:bg-[#66b869]'>Register</button>
            </a>
          </div>
          <div className='w-[80%] md:w-[30%]'>
            <img src={illustration} alt="Illustration Img" width={300}/>
          </div>
      </div>
      <div className='hidden w-[73%] flex flex-col md:flex-row justify-self-center justify-around items-center' id='3rd'>
          <div className='w-[50%] md:w-[65%] mr-3'>
            <h2 className='text-[44.55px]/[52.9px] text-[#4D4D4D] font-semibold my-3'>Insights and insights <span className='text-[#4CAF4F]'>from 8 years</span></h2>
            <p className='text-[#717171] text-[11.14px]/[16.71px] my-3 font-normal'>Where to grow your business as a photographer: site or social media?</p>
            <a href="#">
              <button className='rounded border border-none bg-[#4CAF4F] px-5 py-2 my-3 text-white text-[11.14px] font-normal hover:scale-110 hover:bg-[#66b869]'>Register</button>
            </a>
          </div>
          <div className='w-[80%] md:w-[30%]'>
            <img src={illustration} alt="Illustration Img" width={300}/>
          </div>
      </div>

      <div className='flex gap-1.5 justify-self-center mt-5 pb-2'>
        <div>
          <input type="radio" name="slider" className='w-3 mr-2.5' id="slider1" defaultChecked /> 
        </div>
        <div>
          <input type="radio" name="slider" className='w-3 mr-2.5' id="slider2" /> 
        </div>
        <div>
          <input type="radio" name="slider" className='w-3 mr-2.5' id="slider3" /> 
        </div>
      </div>
    </div>
  );
};

export default Banner;