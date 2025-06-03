import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import Rightarrow from "../assets/Brightarrow.svg";
import Responsive from "../assets/responsive.svg";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav>
      <div className="hidden md:flex flex-row justify-around items-center py-2.5 bg-white">
        <div className="">
          <a href="/" className="flex flex-row gap-1">
              <img src={Logo} alt="" />
              <h3 className="font-bold text-[#263238]">Nexcent</h3>
            </a>
        </div>
        <div className="flex items-center gap-7">
          <a href="/Home" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Home</a>
          <a href="/features" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Features</a>
          <a href="/community" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Community</a>
          <a href="/blog" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Blog</a>
          <a href="/pricing" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Pricing</a>
          <a href="#">
            <button className="flex border rounded-[5px] py-2 px-5 text-[11.14px] bg-[#4CAF4F] text-white hover:scale-110 hover:bg-[#66b869]">
              Register Now <img src={Rightarrow} alt="" />
            </button>
          </a>
        </div>
      </div>

      
      <div className="flex md:hidden flex-row justify-between items-center py-2.5 mx-7">
        <div >
         <a href="/" className="flex flex-row gap-1"> <img src={Logo} alt="" /><h3 className="font-bold text-[#263238]">Nexcent</h3></a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:ring-2 focus:ring-gray-300 dark:text-gray-400"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobile(!mobile)}
        >
          <span className="sr-only">Open main menu</span>
          <img src={Responsive} alt="responsive image" />
        </button>
      </div>

      {/* Responsive*/}
      {mobile && (
        <div className="md:hidden mx-8">
          <div className="flex flex-col items-end gap-4 py-4">
            <a href="/Home" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Home</a>
            <a href="/features" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Features</a>
            <a href="/community" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Community</a>
            <a href="/blog" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Blog</a>
            <a href="/pricing" className="text-[11.14px] hover:bg-[#F53855] hover:text-white hover:rounded-sm hover:px-1">Pricing</a>
            <a href="#">
              <button className="flex border rounded-[5px] py-2 px-5 text-[11.14px] bg-[#4CAF4F] text-white hover:scale-110 hover:bg-[#66b869]">
                Register Now <img src={Rightarrow} alt="" />
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;