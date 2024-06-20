'use client'


import ImageGrid from "@/app/(components)/ImageGrid";

export default function EndOfLease() {
    return (
        < >
            <div>
                <div
                    className={`h-[80vh] md:h-[30em]  relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover  before:opacity-50 before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-eol-clean before:bg-center grid place-items-center`}>
                    <div className="hero-content z-10 text-white   max-w-[60em] px-10">

                        <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>End of Lease Cleaning </h1>
                        <p>
                            Our end of lease cleaning service is designed to meet the stringent requirements of property
                            managers and landlords. We provide a comprehensive clean to ensure you get your full
                            security deposit back.
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
                className="grid grid-rows-1 px-10 my-10 md:grid-cols-2 gap-10 md:gap-40 justify-center place-content-center">
                <ul className={`md:ml-32`}>
                    <li className={`mt-2`}><p><span className={`font-bold`}><span className={`text-[#788BFF]`}>&#10004; </span>General Cleaning: </span>This
                        involves wiping down surfaces,
                        cleaning floors, dusting, and removing cobwebs to ensure all areas are spotless.</p></li>
                    <li className={`mt-2`}><p><span className={`font-bold`}><span className={`text-[#788BFF]`}>&#10004; </span>Bathroom Cleaning:</span> This
                        includes cleaning toilets,
                        showers, sinks, and mirrors, as well as scrubbing tiles and grout to leave the bathroom
                        sparkling clean.</p></li>
                    <li className={`mt-2`}><p><span className={`font-bold`}><span className={`text-[#788BFF]`}>&#10004; </span>Kitchen Cleaning:</span> This
                        service covers cleaning
                        appliances such as ovens, stove tops, and range hoods, wiping down cupboards and countertops,
                        and thoroughly cleaning sinks. </p></li>
                    <li className={`mt-2`}><p><span className={`font-bold`}><span className={`text-[#788BFF]`}>&#10004; </span>Carpet Cleaning:</span> This
                        involves vacuuming and steam
                        cleaning carpets to remove stains and odors, ensuring carpets are fresh and clean.</p></li>
                    <li className={`mt-2`}><p><span className="font-bold"><span className={`text-[#788BFF]`}>&#10004; </span>Window Cleaning:</span> This
                        includes cleaning both the
                        interior and exterior of windows to ensure they are clear and streak-free.</p></li>
                    <li className={`mt-2`}><p><span className="font-bold"><span className={`text-[#788BFF]`}>&#10004; </span>Disinfecting:</span> This
                        involves using specialized cleaning
                        products to kill germs and bacteria, ensuring the property is hygienic and safe.</p></li>
                    <p className={`mt-12`}>Our professional house cleaning services make it easy to enjoy a spotless home and a hassle-free life. To find out more about our extensive services or obtain a free, no-obligation quote, call us now!</p>
                </ul>

                <ImageGrid/>

            </div>
        </>
    )
}

