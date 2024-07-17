'use client';
import { useState } from 'react';

export default function Header() {
  const [menuVisibility, setMenu] = useState(false);
  const [serviceVisibility, setServiceVisibility] = useState(false);
  return (
    <>
      <header className={`h-12 text-sm relative bg-white z-40 shadow-md flex justify-between px-5 items-center `}>
        <div>
          <h1>Don Denciong</h1>
        </div>
        <div className={`header-right z-50`}>
          <div className={`md:hidden`} onClick={() => setMenu(!menuVisibility)}>
            <span
              className={`bg-[#E3B04A] h-1 w-8 rounded block transition-all duration-500`}
              style={{
                rotate: `${menuVisibility ? '45deg' : '0deg'}`,
                transform: `${menuVisibility ? 'translateY(8px) translateX(4px)' : 'translateY(0px)'}`,
              }}
            ></span>
            <span className={`bg-[#E3B04A] h-1 w-8 rounded block transition-all duration-500 my-1`} style={{ opacity: `${menuVisibility ? 0 : 1}` }}></span>
            <span
              className={`bg-[#E3B04A] h-1 w-8 rounded block transition-all duration-500`}
              style={{
                rotate: `${menuVisibility ? '-45deg' : '0deg'}`,
                transform: `${menuVisibility ? 'translateY(-8px) translateX(4px)' : 'translateY(0px)'}`,
              }}
            ></span>
          </div>

          <div className={` hidden gap-10 md:flex items-center transition-all duration-500`}>
            <button onClick={() => (location.href = '/')} className={`hover:underline decoration-4 decoration-[#5465ff66]  `}>
              Home
            </button>
            <div className="container-dropdown relative">
              <button onClick={() => setServiceVisibility(!serviceVisibility)} className={`hover:underline decoration-4 decoration-[#5465FF66]`}>
                Services
              </button>
              <ServiceDrop isVisible={serviceVisibility} className={`absolute transition-all duration-300 shadow-md py-2 rounded-b-md mt-3 w-fit flex flex-col items-start bg-white text-nowrap`} />
            </div>
            <button onClick={() => (location.href = '/about-us')} className={`hover:underline decoration-4 decoration-[#5465FF66] `}>
              About Us
            </button>
            <button onClick={() => (location.href = '/contact-us')} className={`hover:underline decoration-4 decoration-[#5465ff66]  `}>
              Contact Us
            </button>
          </div>
        </div>
      </header>
      <Menu visible={menuVisibility} />
    </>
  );
}

function ServiceDrop({ className, isVisible }: { className: string; isVisible: boolean }) {
  return (
    <div className={`${className} transition-all duration-500 opacity-0`} style={{ visibility: `${isVisible ? 'visible' : 'hidden'}`, opacity: `${isVisible ? 1 : 0}` }}>
      <button onClick={() => (location.href = '/cleaning-window')} className="w-full px-5 py-2 hover:bg-[#788bff66] text-start">
        Window Cleaning
      </button>
      <button onClick={() => (location.href = '/residential-cleaning')} className={`w-full ease-in-out duration-500 px-5 py-2 hover:bg-[#788bff66] text-start`}>
        Residential Cleaning
      </button>
      <button onClick={() => (location.href = '/commercial-cleaning')} className={`w-full ease-in-out duration-500 px-5 py-2 hover:bg-[#788bff66] text-start`}>
        Commercial Cleaning
      </button>
      <button onClick={() => (location.href = '/end-of-lease-cleaning')} className={`w-full ease-in-out duration-500 px-5 py-2 hover:bg-[#788bff66] text-start`}>
        End of Lease Cleaning
      </button>
    </div>
  );
}

function Menu({ visible }: { visible: boolean }) {
  const [serviceState, setServiceState] = useState(false);
  return (
    <div className={`z-[26] shadow-md flex flex-col w-full mt-12 bg-white absolute text-gray-900 top-0 left-0 transition-all duration-500`} style={{ transform: `translateY(${visible ? '0' : '-100%'})` }}>
      <button onClick={() => (location.href = '/')} className={`h-14 px-4 text-start font-medium block`}>
        Home
      </button>
      <button className={`h-14 px-4 text-start font-medium block`} onClick={() => setServiceState(!serviceState)}>
        Services
      </button>
      <button
        onClick={() => (location.href = '/cleaning-window')}
        className="px-8 text-start font-medium transition-all delay-0 duration-500"
        style={{
          visibility: `${serviceState ? 'visible' : 'hidden'}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? '3.5rem' : '0',
        }}
      >
        Window Cleaning
      </button>
      <button
        onClick={() => (location.href = '/residential-cleaning')}
        className="px-8 text-start font-medium transition-all delay-100 duration-500"
        style={{
          visibility: `${serviceState ? 'visible' : 'hidden'}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? '3.5rem' : '0',
        }}
      >
        Residential Cleaning
      </button>
      <button
        onClick={() => (location.href = '/commercial-cleaning')}
        className="px-8 text-start font-medium transition-all delay-200 duration-500"
        style={{
          visibility: `${serviceState ? 'visible' : 'hidden'}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? '3.5rem' : '0',
        }}
      >
        Commercial Cleaning
      </button>
      <button
        onClick={() => (location.href = '/end-of-lease-cleaning')}
        className="px-8 text-start font-medium transition-all delay-300 duration-500"
        style={{
          visibility: `${serviceState ? 'visible' : 'hidden'}`,
          opacity: serviceState ? 1 : 0,
          height: serviceState ? '3.5rem' : '0',
        }}
      >
        End-of-Lease Cleaning
      </button>
      <button onClick={() => (location.href = '/about-us')} className={`h-14 px-4 text-start font-medium block`}>
        About Us
      </button>
      <button onClick={() => (location.href = '/contact-us')} className={`h-14 px-4 text-start font-medium block`}>
        Contact Us
      </button>
    </div>
  );
}
