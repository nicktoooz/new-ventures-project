'use client'
import {useState} from "react";

export default function Header() {
    const [menuVisibility, setMenu] = useState(false)

    return (
        <>
            <header className={`h-16 relative bg-white z-40 shadow-xl flex justify-between px-5 items-center `}>
                <div>
                    <h1>Don Denciong</h1>
                </div>
                <div className={`header-right z-50`}>
                    <div className={`md:hidden`} onClick={() => setMenu(!menuVisibility)}>
                <span className={`bg-gray-600 h-1.5 w-10 rounded block transition-all duration-500`} style={{
                    rotate: `${menuVisibility ? '45deg' : '0deg'}`,
                    transform: `${menuVisibility ? 'translateY(10px) translateX(4px)' : 'translateY(0px)'}`
                }}></span>
                        <span className={`bg-gray-600 h-1.5 w-10 rounded block transition-all duration-500 my-1`}
                              style={{opacity: `${menuVisibility ? 0 : 1}`}}></span>
                        <span className={`bg-gray-600 h-1.5 w-10 rounded block transition-all duration-500`} style={{
                            rotate: `${menuVisibility ? '-45deg' : '0deg'}`,
                            transform: `${menuVisibility ? 'translateY(-10px) translateX(4px)' : 'translateY(0px)'}`
                        }}></span>

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
    return (
        <div className={`z-20 w-full mt-16 h-96 bg-slate-500 absolute top-0 left-0 transition-all duration-500`}
             style={{transform: `translateY(${visible ? '0' : '-100%'})`}}>
        </div>
    )
}