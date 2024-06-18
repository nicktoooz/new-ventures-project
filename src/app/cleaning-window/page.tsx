'use client'
import ImageGrid from "@/app/(components)/ImageGrid";

export default function WindowCleaning() {
    return (
        < >
            <div>
                <div className={`h-[30em] md:h-96 bg-gray-400 grid place-items-center`}>
                    <div className="hero-content max-w-[60em] px-10">
                        <h1 className={`text-3xl md:text-4xl mb-4 font-medium`}>Window Cleaning</h1>
                        <p>
                            Looking for expert window cleaners in Sydney? You&apos;ve come to the right place! We
                            provide
                            top-notch window cleaning services for a wide range of clients, including houses, shops,
                            bars, car dealerships, showrooms, and strata buildings.
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
                <p className={`self-center justify-self-end max-w-96 `}>Having your windows professionally cleaned is an
                    effective way to give your property a fresh, new look. Visitors will immediately notice if your
                    glass doors and windows are free from dust and grime. This is especially important for shopfront
                    windows, as clean windows leave a strong impression that you mean business.</p>
                <ImageGrid/>
            </div>
        </>
    )
}

