import React, { useContext, useState } from 'react';
import { SwitchContext } from '../App';

const Header = () => {
  // Accessing the theme context
  const { theme, setTheme } = useContext(SwitchContext);

  // State for toggle switch
  const [toggleSwitch, setToggleSwitch] = useState(false);

  // Function to handle toggle switch
  function handleToggle() {
    setToggleSwitch(prev => !prev);
    setTheme(prevTheme => !prevTheme);
  }

  return (
    <header className={` fixed w-full grid grid-cols-1 sm:grid-cols-12 shadow-sm  ${theme ? 'bg-[#14172e]' : 'bg-[#EDEDED]'}`}>

      {/* Logo */}
      <div className='col-span-1 sm:col-span-3 flex items-center justify-center py-5 sm:py-8'>
        <img src={!theme ? 'images/Crewsphere _ blck letter 1.png' : 'images/Crewsphere _ wht letter 1.png'} className='w-40 sm:w-64 h-auto' alt='logo' />
      </div>

      {/* Navigation */}
      <nav className='col-span-1 sm:col-span-6 text-[#9b9b9b] items-center flex justify-center pb-5 sm:py-8'>
        <ul className='text-lg sm:text-xl flex flex-wrap justify-center sm:justify-end hover:transform hover:-translate-y-[1px]'>
          <li className='mx-4 sm:mx-6 hover:text-white cursor-pointer '>Home</li>
          <li className='mx-4 sm:mx-6 hover:text-white cursor-pointer'>About</li>
          <li className='mx-4 sm:mx-6 hover:text-white cursor-pointer'>Events</li>
          <li className='mx-4 sm:mx-6 hover:text-white cursor-pointer'>Testimonials</li>
        </ul>
      </nav>


      {/* Action Buttons */}
      <div className='col-span-1 sm:col-span-3 flex items-center justify-center sm:justify-end pb-4 sm:py-8 sm:mr-[20%]'>
        <div className={`mr-6 relative rounded-2xl items-center flex border  p-[2px] ${toggleSwitch ? 'border-white' : ' border-black'} `}>
          <div className='flex w-16'>
            <img
              onClick={handleToggle}
              className={`transition-all duration-500 w-6 h-6   ${toggleSwitch ? 'absolute right-0 mr-[2px]' : ''}`}
              src='images/Group 109.png'
              alt='icon'
            />
            <span className={`transition-all duration-500 ${toggleSwitch ? ' mx-2 text-white' : 'ml-2 mx-2  text-black'}`}>
              {toggleSwitch ? 'ON' : 'OFF'}
            </span>
          </div>
        </div>
        
        <button className={`transition-all ease-in-out duration-100 px-5 sm:px-11 rounded-md py-3 text-white  bg-gradient-to-r from-[#7934C9] to-[#0ED2BA] ${toggleSwitch ? 'hover:from-[#382b5a] hover:to-[#08333d]  hover:border  ' : ' hover:from-black hover:to-black'}`}>
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
