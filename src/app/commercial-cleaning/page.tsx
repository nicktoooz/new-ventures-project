'use client'
import ImageGrid from "@/app/(components)/ImageGrid";
import {useState} from "react";
import Quote from "@/app/(components)/QuoteOverlay";

export default function CommercialCleaning() {
    const [quoteVisible, setQuoteVisible] = useState(false)
    return (
        < >
            <Quote visible={quoteVisible} onClose={() => setQuoteVisible(!quoteVisible)}/>
            <div>
                <div
                    className={`h-[80vh] md:h-[30em]  relative after:absolute after:inset-0 after:content-[''] after:bg-gradient-cover  before:opacity-50 before:absolute before:inset-0 before:content-[''] before:h-full before:w-full before:bg-commercial-clean before:bg-center grid place-items-center`}>

                    <div className="hero-content z-10 text-white   max-w-[60em] px-10">

                        <h1 className={`text-3xl md:text-4xl mb-4 font-bold`}>Commercial / Office Cleaning </h1>
                        <p>
                            Our team of expert cleaners is dedicated to delivering top-notch cleaning services to
                            businesses in the area. We understand that each business has unique cleaning needs, which is
                            why we offer customizable cleaning packages tailored to your specific requirements.
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
                className="grid grid-rows-1 px-10 my-10 md:grid-cols-2 gap-10 md:gap-40 justify-center place-content-center">
                <div className={`max-w-[30em] justify-self-end self-center `}>
                    <p>We know that time is precious for businesses, so we work around your schedule to minimize
                        disruption to your daily operations. Whether you need cleaning during business hours or after
                        hours, we can accommodate your needs.</p>
                    <p className={`mt-4`}>Don&apos;t let a dirty office impact your business’s productivity and
                        reputation. Let our professional
                        cleaning experts handle the cleaning for you, so you can focus on what matters most – growing
                        your business.</p>
                    <p className={`mt-4`}>We take pride in providing exceptional customer service and satisfaction. All
                        our cleaning
                        professionals have undergone background checks and thorough training to ensure they know exactly
                        what to do. Our team of friendly and professional cleaners is always punctual and reliable,
                        ensuring your office remains clean and hygienic for your employees and clients.</p>
                    <p className={`mt-4`}>Contact us today to schedule a consultation and receive a free quote for our
                        services. Let us
                        help you elevate your business with our top-notch office cleaning services.</p>
                    <p className={`mt-4`}>Our general cleaning services include dusting, vacuuming, mopping, and wiping
                        down surfaces. Additionally, we provide specialized services such as bathroom and kitchen
                        cleaning, carpet cleaning, window cleaning, and disinfecting. We use only the highest quality
                        cleaning products and equipment to ensure a thorough clean every time.</p>
                </div>
                <ImageGrid className={``}/>
            </div>
        </>
    )
}

