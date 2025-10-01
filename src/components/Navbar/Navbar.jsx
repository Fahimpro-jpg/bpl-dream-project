import React from 'react';
import navImg from  "../../assets/logo.png"
import dollarImg from "../../assets/dollar-1.png"
const Navbar = () => {
    return (
        <div className="navbar max-w-[1250px] mx-auto">
  <div className="flex-1">
    <a className="text-xl">
      <img className='w-[60px] h-[60px]' src={navImg} alt="" />
    </a>
  </div>
  <div className="flex items-center gap-2">
    <span>6000000000</span>
    <span>Coin</span>
    <img src={dollarImg} alt="" />
 </div>
</div>
    );
};

export default Navbar;