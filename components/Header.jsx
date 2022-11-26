import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
      <div className='container mx-auto px-10 mb-8'>
          
          <div className='border-b w-full inline-block border-blue-400 py-10'>
              
              <div className='md:float-right block'>
                  <Link href="/">
                      <span className='cursor-ponter text-4xl text-white font-bold'></span>
                  </Link>

                  
              </div>
              

          </div>
          

    </div>
  )
}

export default Header