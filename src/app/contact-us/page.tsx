import Image from "next/image";
import phone from "../../../public/phone.svg";
import mail from "../../../public/mail.svg";
import equipment from '../../../public/equipment.png'

export default function ContactUs() {
    return(
        <main className={`flex flex-col bg-[#dde4fb] items-center p-16`}>
            <h1 className={`text-4xl mt-10 font-bold text-[#5465FF] text-center`}>Contact <span className={`text-black`}>Us</span></h1>
            <div className={`flex p-10 gap-5 justify-center`}>
                <div className={`mt-10`}>
                    <p className={`text-2xl`}>Ready to experience exceptional cleaning services?</p>
                    <p className={`text-2xl`}>Reach out to us for a free quote or to schedule your first cleaning.</p>
                    <div className={`flex flex-col gap-2 mt-10 font-bold`}>
                        <section className={`flex gap-2`}>
                            <Image className={`aspect-square w-8  `} src={phone} alt={``}/>
                            <p className={`text-xl`}>+61 406 780 941</p>
                        </section>
                        <section className={`flex gap-3`}>
                            <Image className={`aspect-square w-8 `} src={mail} alt={``}/>
                            <p className={`text-xl`}>info@dondenciong.com.au</p>
                        </section>
                        <section className={`flex gap-2.5`}>
                            <p className={` font-bold text-xl`}>ABN</p>
                            <p className={`text-xl`}>26912506894</p>
                        </section>

                    </div>
                </div>
                <Image className={`w-[28rem]`} src={equipment} alt={``}/>
            </div>
        </main>
    )

}