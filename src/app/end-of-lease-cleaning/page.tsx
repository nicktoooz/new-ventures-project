'use client'


export default function EndOfLease() {
    return (
        < >
            <div>
                <div className={`h-[30em] md:h-96 bg-gray-400 grid place-items-center`}>
                    <div className="hero-content max-w-[60em] px-10">
                        <h1 className={`text-3xl md:text-4xl mb-4 font-medium`}>End of Lease Cleaning </h1>
                        <p>
                            Our end of lease cleaning service is designed to meet the stringent requirements of property
                            managers and landlords. We provide a comprehensive clean to ensure you get your full
                            security deposit back.
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

                <div className="preview justify-self-center  grid aspect-square w-80 grid-cols-4 gap-2.5">
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

