import React, { useContext } from 'react';
import { SwitchContext } from '../App';

const Footer = () => {
     const QuickLinks = ['Home', 'About', 'Events', 'Testimonials'];
     const imageLinks = [
          'Vector.png',
          'instagran logo.png',
          'linkedin logo.png',
          'telegram logo.png',
          'discord logo.png',
          'whatsapp logo.png'
     ];

     const {theme}= useContext(SwitchContext)

     return (
          <div className='w-full '>
               <div className={`grid w-full grid-flow-col  grid-cols-12 ${theme ? 'bg-[#14172e]' :  'bg-[#EDEDED]' } `}>
                    <div className='col-span-4 pl-[20%] pr-2'>
                         <img src={ theme ? 'images/Crewsphere _ wht letter 1.png' : 'images/Crewsphere _ blck letter 1.png'} className='my-20 ' alt='Crewsphere logo' />
                         <div className='my-20 mt-48 sm:mt-0'>
                              <h1 className={` mb-6 sm:text-xl ml-2 font-medium  ${theme ? ' text-white ' : ''} `}>Follow Us</h1>
                              <div className='flex'>
                                   {imageLinks.map((link, ind) => (
                                        <img key={ind} className='mx-2 bg-white rounded-md cursor-pointer' src={'images/' + link} alt='Social media icon' />
                                   ))}
                              </div>
                         </div>
                    </div>
                    <div className='col-span-4 sm:col-span-3 mx-2 flex flex-col items-center my-20'>
                         <div className='flex items-center'>
                              <img src={theme ? 'images/linkWhite.png' : 'images/linkBlack.png'} className='w-4 h-3' alt='Quick links icon' />
                              <span className={`sm:text-xl font-medium mx-1 ${theme? ' text-white' : '' }`}> Quick links</span>
                         </div>
                         <ul className='ml-6 sm:text-lg text-[#9b9b9b]'>
                              {QuickLinks.map((data, ind) => (
                                   <li key={ind} className='my-3 hover:text-white sm:my-5'>
                                        {' '}
                                        {data}{' '}
                                   </li>
                              ))}
                         </ul>
                    </div>
                    <div className='col-span-4 w-full sm:col-span-5  my-20 '>
                         <div className='flex items-center'>
                              <img src={theme ? 'images/emailWhite.png' : 'images/emailBlack.png'} className='w-4 h-3' alt='Mail icon' />
                              <span className={`sm:text-xl font-medium mx-1 ${theme ? 'text-white' : ''} ` } > Mail</span>
                         </div>
                         <h3 className='ml-2 hover:text-white mt-3 sm:mt-5 sm:text-lg text-[#9b9b9b] overflow-hidden whitespace-nowrap overflow-ellipsis'>
                              Support@crewsphere.io
                         </h3>
                    </div>

               </div>

               <div className='text-[white] text-lg w-full flex justify-center py-6 bg-gradient-to-b from-[#24194c] via-[#422277] to-[#46227f]'>
                    <h1>© 2023 C<u>rewsphere </u>All Rights Reserved</h1>
               </div>
          </div>
     );
};

export default Footer;
