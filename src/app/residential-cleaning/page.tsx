
import cleaners from '../../../public/Frame 101.png'
import Image from "next/image";
export default function ResidentialCleaning (){
    return(
            < >
                <div>
                    <div className={`h-[30em] md:h-96 bg-gray-400 grid place-items-center`}>
                        <div className="hero-content max-w-[60em] px-10">
                            <h1 className={`text-3xl md:text-4xl mb-4 font-medium`}>Residential Cleaning</h1>
                            <p>
                                We understand the importance of a clean and healthy home. Our professional cleaning team is dedicated to providing top-notch cleaning services tailored to your specific needs. We offer a comprehensive range of cleaning services to ensure every corner of your home sparkles!
                            </p>
                            <div className={`flex gap-5 flex-col sm:flex-row mt-5`}>
                                <button
                                    className={`p-2 w-32 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Get
                                    a Quote
                                </button>
                                <button
                                    className={`py-2 w-32 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Call
                                    us Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="grid md:px-56 px-10 grid-rows-1 my-10 md:grid-cols-2 gap-10 items-center justify-center  md:gap-40 ">
                    <div>
                        <p className={`font-bold mt-3`}> Our services can include:</p>
                        <div className={`flex gap-5 md:gap-10 mb-10 md:flex-row flex-col`}>
                            <div className={`mt-5 flex flex-col gap-3`}>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Mopping</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Vaccumming</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Dusting</span>
                                </section>
                            </div>

                            <div className={`mt-5 flex flex-col gap-3`}>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Sweeping</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Kitchen cleansing</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Bathroom and toilet cleaning</span>
                                </section>
                            </div>

                            <div className={`mt-5 flex flex-col gap-3`}>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Own cleaning</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Mirror and cleaning</span>
                                </section>
                                <section className={`flex items-center gap-2`}>
                                    <p className={`text-[#5465FF] `}>&#10004;</p> <span
                                    className={``}>Surface cleaning</span>
                                </section>
                            </div>
                        </div>
                        <p>Our professional house cleaning services make it easy to enjoy a spotless home and a hassle-free life. To find out more about our extensive services or obtain a free, no-obligation quote, call us now!</p>
                    </div>
                    <div className="preview justify-self-end grid aspect-square w-80 grid-cols-4 gap-2.5">
                        <div className="main bg-red-600 aspect-square col-span-4"></div>
                        <div className="child aspect-square bg-blue-500"></div>
                        <div className="child aspect-square bg-blue-500"></div>
                        <div className="child aspect-square bg-blue-500"></div>
                        <div className="child aspect-square bg-blue-500"></div>
                    </div>
                </div>
            </>

    )

}