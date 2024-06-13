'use client'
import Image from "next/image";
import menu from "../../public/icons8-menu.svg";
import {useState} from "react";

export default function Header() {
    const [menuVisibility, setMenu] = useState(false)

    return <header className={`h-16 shadow-xl flex justify-between px-5 items-center `}>
        <Menu visible={menuVisibility}/>
        <div>
            <h1>Don Denciong</h1>
        </div>
        <div className={`header-right `}>
            <Image onClick={() => setMenu(!menuVisibility)} className={`md:hidden`} src={menu} alt={``}/>
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
}
function Menu({visible}:{visible:boolean}) {
    return (
        visible && (
            <div className={`w-full mt-16 h-96 bg-slate-500 absolute top-0 left-0`}>


            </div>
        )
    )
}