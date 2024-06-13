'use client'
import {useState} from "react";

export default function Header() {
    const [menuVisibility, setMenu] = useState(false)

    return (
        <>
            <header className={`h-16 relative bg-white z-40 shadow-md flex justify-between px-5 items-center `}>
                <div>
                    <h1>Don Denciong</h1>
                </div>
                <div className={`header-right z-50`}>
                    <div className={`md:hidden`} onClick={() => setMenu(!menuVisibility)}>
                        <span className={`bg-[#5465FF] h-1.5 w-10 rounded block transition-all duration-500`} style={{rotate: `${menuVisibility ? '45deg' : '0deg'}`, transform: `${menuVisibility ? 'translateY(10px) translateX(4px)' : 'translateY(0px)'}`}}></span>
                        <span className={`bg-[#5465FF] h-1.5 w-10 rounded block transition-all duration-500 my-1`} style={{opacity: `${menuVisibility ? 0 : 1}`}}></span>
                        <span className={`bg-[#5465FF] h-1.5 w-10 rounded block transition-all duration-500`} style={{rotate: `${menuVisibility ? '-45deg' : '0deg'}`, transform: `${menuVisibility ? 'translateY(-10px) translateX(4px)' : 'translateY(0px)'}`}}></span>

                    </div>
                    <div className={` hidden gap-10 md:flex `}>
                        <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>Home</button>
                        <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>Services</button>
                        <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>About Us</button>
                        <button
                            className={`border-2 border-[#5465FF] hover:bg-[#5465FF] hover:text-white p-2 rounded-md text-[#5465FF]`}>Contact
                            Us
                        </button>
                    </div>
                </div>
            </header>
            <Menu visible={menuVisibility}/>
        </>)
}

function Menu({visible}: { visible: boolean }) {
    const [serviceState, setServiceState] = useState(false)
    return (
        <div
            className={`z-20 flex flex-col w-full   mt-16 bg-[#ced7f8] absolute text-gray-900 top-0 left-0 transition-all duration-500`}
            style={{transform: `translateY(${visible ? '0' : '-100%'})`}}>
            <button onClick={()=>location.href = '/'} className={`h-14 px-4 text-start font-medium block`}>Home</button>
            <button className={`h-14 px-4 text-start font-medium block`} onClick={()=>setServiceState(!serviceState)}>Services</button>
            <button onClick={()=>location.href = '/cleaning-window'} className="px-8 text-start font-medium transition-all delay-0 duration-500" style={{ visibility: `${serviceState ? 'visible' : 'hidden'}`, opacity: serviceState ? 1 : 0, height: serviceState ? '3.5rem' : '0' }}>Window Cleaning</button>
            <button onClick={()=>location.href = '/residential-cleaning'} className="px-8 text-start font-medium transition-all delay-100 duration-500" style={{ visibility: `${serviceState ? 'visible' : 'hidden'}`, opacity: serviceState ? 1 : 0, height: serviceState ? '3.5rem' : '0' }}>Residential Cleaning</button>
            <button onClick={()=>location.href = '/'} className="px-8 text-start font-medium transition-all delay-200 duration-500" style={{ visibility: `${serviceState ? 'visible' : 'hidden'}`, opacity: serviceState ? 1 : 0, height: serviceState ? '3.5rem' : '0' }}>Commercial Cleaning</button>
            <button onClick={()=>location.href = '/'} className="px-8 text-start font-medium transition-all delay-300 duration-500" style={{ visibility: `${serviceState ? 'visible' : 'hidden'}`, opacity: serviceState ? 1 : 0, height: serviceState ? '3.5rem' : '0' }}>End-of-Lease Cleaning</button>
            <button onClick={()=>location.href = '/'} className={`h-14 px-4 text-start font-medium block`}>About Us</button>
            <button onClick={()=>location.href = '/contact-us'} className={`h-14 px-4 text-start font-medium block`}>Contact Us</button>


        </div>
    )
}