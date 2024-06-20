import cleaners from '../../../public/Frame 101.png'
import ImageGrid from "@/app/(components)/ImageGrid";

export default function ResidentialCleaning() {
    return (
        < >
            <div>
                <div
                    className={`h-[80vh] md:h-[30em] relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover  before:opacity-50 before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-residential-clean before:bg-center grid place-items-center`}>

                    <div className="hero-content z-10 text-white   max-w-[60em] px-10">

                        <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>Residential Cleaning</h1>
                        <p>
                            We understand the importance of a clean and healthy home. Our professional cleaning team is
                            dedicated to providing top-notch cleaning services tailored to your specific needs. We offer
                            a comprehensive range of cleaning services to ensure every corner of your home sparkles!
                        </p>
                        <div className={`flex gap-5 flex-col sm:flex-row mt-5`}>
                            <button
                                className={`p-2 max-w-40 w-full bg-[#5465FF] transition-all  hover:bg-[#9BB1FF] border border-[#5465FF] rounded text-white`}>Get
                                a Quote
                            </button>
                            <button
                                className={`py-2 max-w-40 w-full bg-[#9BB1FF] hover:bg-[#9BB1FF66] hover:border hover:border-[#9BB1FF] border transition-all rounded text-black`}>Call
                                us Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="grid md:px-56 px-10 grid-rows-1 my-10 md:grid-cols-2 gap-10 items-center justify-center  md:gap-40 ">
                <div className={`md:w-[35em]`}>
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
                    <p>Our professional house cleaning services make it easy to enjoy a spotless home and a hassle-free
                        life. To find out more about our extensive services or obtain a free, no-obligation quote, call
                        us now!</p>
                </div>
                <ImageGrid/>
            </div>
        </>

    )

}