import Image from "next/image";
import wphone from "../../public/white_phone.png";
import wmail from "../../public/white_mail.png";

export default function Footer() {
    return <footer
        className={`h-fit text-white bg-[#788BFF] gap-10 flex-col md:flex-row flex md:items-center justify-between p-10 md:p-16`}>
        <div className={`flex flex-col justify-center `}>
            <h1 className={`text-xl font-semibold`}>Don Denciong</h1>
            <p className={`mt-5 text-xs`}>Your New Cleaning Partner!</p>
            <p className={`text-xs`}>Expert Cleaning for Your Home and Office!</p>
            <p className={`text-xs`}> We Make Clean Look Easy!</p>
        </div>

        <div className={`flex gap-10 flex-col md:flex-row justify-center `}>
            <div className={`gap-2.5 flex flex-col`}>
                <h1 className={`text-xl font-semibold`}>Company</h1>
                <p className={`text-xs`}>About Us</p>
                <p className={`text-xs`}>Services</p>
                <p className={`text-xs`}>Contact Us</p>
            </div>

            <div className={`gap-2.5 flex flex-col`}>
                <h1 className={`text-xl font-semibold`}>Services</h1>
                <p className={`text-xs`}>Residential Cleaning</p>
                <p className={`text-xs`}>Commercial/ Office Cleaning</p>
                <p className={`text-xs`}>End of Lease Cleaning</p>
                <p className={`text-xs`}>Window Cleaning</p>
            </div>

            <div className={`gap-2.5 flex flex-col`}>
                <h1 className={`text-xl font-semibold`}>Contact Us</h1>
                <div className={`flex flex-col gap-2`}>
                    <section className={`flex gap-2`}>
                        <Image className={`aspect-square w-[1.1rem]  `} src={wphone} alt={``}/>
                        <p className={`text-xs`}>+61 406 780 941</p>
                    </section>
                    <section className={`flex gap-3`}>
                        <Image className={`aspect-square w-[1.1rem] `} src={wmail} alt={``}/>
                        <p className={`text-xs`}>info@dondenciong.com.au</p>
                    </section>
                    <section className={`flex gap-2.5`}>
                        <p className={` font-bold text-xs`}>ABN</p>
                        <p className={`text-xs`}>26912506894</p>
                    </section>
                </div>
            </div>
        </div>
    </footer>
}