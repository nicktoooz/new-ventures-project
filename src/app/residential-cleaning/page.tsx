'use client'
import ImageGrid from "@/app/(components)/ImageGrid";
import {useState} from "react";
import Quote from "@/app/(components)/QuoteOverlay";

export default function ResidentialCleaning() {
    const [quoteVisible, setQuoteVisible] = useState(false)
    return (
        < >
            <Quote visible={quoteVisible} onClose={() => setQuoteVisible(!quoteVisible)}/>
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
                                onClick={() => setQuoteVisible(!quoteVisible)}
                                className={`p-2 max-w-40 w-full bg-[#5465FF] transition-all  hover:bg-[#6684ef] rounded text-white`}>Get
                                a Quote
                            </button>
                            <button
                                onClick={() => location.href = 'tel:+61406780941'}
                                className={`py-2 max-w-40 w-full bg-[#9BB1FF] hover:bg-[#819bf7] transition-all rounded text-black`}>Call
                                us Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="grid md:px-20 px-5 grid-rows-1 my-10 md:grid-flow-col gap-10 items-center  md:gap-20 ">
                <div className={``}>
                    <p className={`font-bold mt-3`}> Our services can include:</p>
                    <div className={`flex flex-wrap gap-3 text-nowrap py-5`}>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Kitchen cleansing</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Vacuuming</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Dusting</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Sweeping</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Kitchen cleansing</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Bathroom and toilet cleaning</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Own cleaning</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Mirror cleaning</span>
                        </div>
                        <div className={`bg-[#e1e4ff]  w-fit px-4 py-1 rounded-full`}>
                            <span className={``}>&#10004;</span> <span
                            className={``}>Surface cleaning</span>
                        </div>
                    </div>
                    <p>Our professional house cleaning services make it easy to enjoy a spotless home and a hassle-free
                        life. To find out more about our extensive services or obtain a free, no-obligation quote, call
                        us now!</p>
                </div>
                <ImageGrid className={``}/>
            </div>
        </>

    )

}