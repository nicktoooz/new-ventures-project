
import cleaners from '../../../public/Frame 101.png'
import Image from "next/image";
export default function ResidentialCleaning (){
    return(
        <main className={`flex bg-[#dde4fb] p-16 items-center`}>
            <div className={`p-16`}>
                <h1 className={`text-3xl font-bold`}>Residential Cleaning</h1>
                <p className={`text-xl mt-2`}>We understand the importance of a clean and healthy home. Our professional
                    cleaning team is dedicated to providing top-notch cleaning services tailored to your specific needs.
                    We offer a comprehensive range of cleaning services to ensure every corner of your home
                    sparkles!</p>
                <p className={`text-xl font-bold mt-3`}> Our services can included:</p>
                <div className={`flex gap-10`}>
                    <div className={`mt-5 flex flex-col gap-3`}>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Mopping</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Vaccumming</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Dusting</span>
                        </section>
                    </div>

                    <div className={`mt-5 flex flex-col gap-3`}>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Sweeping</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Kitchen cleansing</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Bathroom and toilet cleaning</span>
                        </section>
                    </div>

                    <div className={`mt-5 flex flex-col gap-3`}>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Own cleaning</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Mirror and cleaning</span>
                        </section>
                        <section className={`flex items-center gap-2`}>
                            <p className={`text-[#5465FF] text-xl`}>&#10004;</p> <span
                            className={`text-xl`}>Surface cleaning</span>
                        </section>
                    </div>
                </div>
                <p className={`text-xl mt-5`}>Our professional house cleaning services make it easy to enjoy a spotless
                    home and a hassle-free life. To find out more about our extensive services or obtain a free,
                    no-obligation quote, call us now!</p>
                <div className={`flex gap-5 mt-14 `}>
                    <button className={`p-2 w-32 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Get a Quote</button>
                    <button className={`py-2 w-32 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Call us Now</button>
                </div>
            </div>
            <Image className={`w-[28em] h-[28em] p-5`} src={cleaners} alt={``}/>

        </main>
    )

}