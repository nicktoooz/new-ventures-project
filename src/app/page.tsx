'use client'
import Image from 'next/image';
import image1 from '../../public/hero.png';
import house from '../../public/houseicon.png';
import shake from '../../public/shake.png';
import phone from '../../public/phone.svg';
import email from '../../public/mail.svg';
import trash_bin from '../../public/trash_bin.svg';
import promo1 from '../../public/promo1.svg';
import promo2 from '../../public/promo2.svg';
import house2 from '../../public/haus.svg';
import mopping from '../../public/mopping.png';
import desktop from '../../public/desktop.png'
import key from '../../public/key.png'
import window from '../../public/window.png'
import ReviewCard from '@/app/(components)/ReviewCard';
import {useRef, useState} from "react";
import axios from "axios";
import chevronLeft from '../../public/chevron_left.svg'
import chevronRight from '../../public/chevron_right.svg'
import {AnimatePresence, motion, useInView} from "framer-motion";

import {SuccessMessage} from "@/app/(components)/SuccessMessage";
import Header from './Header';
import Footer from './Footer';

type ReviewRange = {
    start: number,
    end: number
}

export default function Home() {
    const [name, setName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [suburb, setSuburb] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [service, setService] = useState('')
    const [details, setDetails] = useState('')
    const [success, setSuccess] = useState(false)
    const [buttonMessage, setButtonMessage] = useState('Send Message')
    const [reviewRange, setReviewRange] = useState<ReviewRange>({start: 0, end: 3})
    const reviewRef = useRef(null)
    const serviceRef = useRef(null)
    const inViewService = useInView(serviceRef)
    const inViewRef = useInView(reviewRef)

    const reviews = [
        {
            user: 'John Doe 1',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 2',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 3',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 4',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 5',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 6',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 7',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 8',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        },
        {
            user: 'John Doe 9',
            review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit'
        }

    ]
    return (
        <div>
            <AnimatePresence>
                <Header/>
                <SuccessMessage visible={success} onClose={() => {
                    setSuccess(false)
                    location.href = '/'
                }}/>
                <main className={`flex bg-[#dde4fb] flex-col`}>
                    {/*first div*/}
                    {/*Hero*/}
                    <div className={`flex mt-5 p-10 justify-around `}>
                        <div>
                            <div className={`flex flex-col md:flex-row gap-3 md:gap-14`}>
                                <section className={`flex gap-3`} onClick={() => location.href = 'tel:+61406780941'}
                                >
                                    <motion.div
                                        animate={{
                                            rotate: [-10, 10, -10, 10, -10], // Change these values to adjust the shake intensity
                                            transition: {
                                                duration: 0.5, // Adjust the duration to control the speed of the shake
                                                repeat: 1, // This makes the animation loop infinitely
                                            }
                                        }}
                                    >
                                        <Image className={`aspect-square `} src={phone} alt={``}/>
                                    </motion.div>
                                    <p>+61 406 780 941</p>
                                </section>
                                <section className={`flex gap-3`}
                                         onClick={() => location.href = 'mailto:info@dondenciong.com.au'}>
                                    <Image className={`aspect-square `} src={email} alt={``}/>
                                    <p>info@dondenciong.com.au</p>
                                </section>
                            </div>
                            <motion.div
                                initial={{opacity: 0, translateY: -10}}
                                animate={{opacity: 1, translateY: 0}}
                                transition={{delay: 0.3, duration: 0.5}}
                            >
                                <h1 className={`text-4xl font-bold mt-10`}>Don Denciong Cleaning Services:</h1>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, translateY: -10}}
                                animate={{opacity: 1, translateY: 0}}
                                transition={{delay: 0.5, duration: 0.5}}>
                                <h1 className={`text-4xl font-bold mt-2`}>
                                    Where <span className={`text-[#5465FF]`}>Cleanliness</span> Meets Excellence!
                                </h1>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0, translateY: -10}}
                                animate={{opacity: 1, translateY: 0}}
                                transition={{delay: 0.7, duration: 0.5}}>
                                <h1 className={`mt-5 text-xl`}>Your New Cleaning Partner!</h1>
                                <h1 className={`text-xl`}>Expert Cleaning for Your Home and Office!</h1>
                                <h1 className={`text-xl`}> We Make Clean Look Easy!</h1>
                            </motion.div>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 1, duration: 0.5}}>
                                <div className={`gap-4 mt-5  flex`}>
                                    <button onClick={() => location.href = "#quote"}
                                            className={`p-2 max-w-40 w-full bg-[#5465FF] transition-all  hover:bg-[#9BB1FF] border border-[#5465FF] rounded text-white`}>Send
                                        a Quote
                                    </button>
                                    <button
                                        className={`py-2 max-w-40 w-full bg-[#9BB1FF] hover:bg-[#9BB1FF66] hover:border hover:border-[#9BB1FF] border transition-all rounded text-black`}>Learn
                                        More
                                    </button>
                                </div>
                            </motion.div>
                        </div>

                        <div className={`hidden md:block`}>
                            <Image className={`aspect-square w-[30em]`} src={image1} alt={``}/>
                        </div>
                    </div>

                    {/*first div*/}

                    {/*second div*/}
                    {/*Our Services*/}
                    <div ref={serviceRef}
                         className={`flex flex-col items-center bg-white h-[100em] md:h-[45em] py-16 px-8`}>
                        <h1 className={`text-4xl font-bold`}>
                            Our <span className={`text-[#5465FF]`}>Services</span>
                        </h1>
                        {inViewService && (
                            <div className={`flex flex-wrap max-w-[80em] gap-5 items-center justify-center mt-5`}>
                                <motion.div
                                    initial={{opacity: 0, translateX: -100}}
                                    animate={{opacity: 1, translateX: 0}}
                                    exit={{opacity: 0, translateX: -100}}
                                    transition={{delay: 0.2, duration: 0.5}}>
                                    <div className={`max-w-[30em] p-10 bg-[#dde4fb] rounded-md shadow`}>
                                        <Image className={`aspect-square w-16`} src={house} alt={``}/>
                                        <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Residential
                                            Cleaning</h1>
                                        <p className={`mt-2`}>Our professional cleaning team is dedicated to providing
                                            top-notch cleaning services tailored to your specific need</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, translateX: 100}}
                                    animate={{opacity: 1, translateX: 0}}
                                    exit={{opacity: 0, translateX: 100}}
                                    transition={{delay: 0.2, duration: 0.5}}>
                                    <div className={`max-w-[30em] p-10 bg-[#dde4fb] rounded-md shadow`}>
                                        <Image className={`aspect-square w-16`} src={desktop} alt={``}/>
                                        <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Commercial/Office
                                            Cleaning</h1>
                                        <p className={`mt-2`}>Our team of expert cleaners is dedicated to delivering
                                            top-notch
                                            cleaning services to businesses in the area.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, translateX: -100}}
                                    animate={{opacity: 1, translateX: 0}}
                                    exit={{opacity: 0, translateX: -100}}
                                    transition={{delay: 0.2, duration: 0.5}}>
                                    <div className={`max-w-[30em] p-10 bg-[#dde4fb] rounded-md shadow`}>
                                        <Image className={`aspect-square w-16`} src={key} alt={``}/>
                                        <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>End-of-Lease
                                            Cleaning</h1>
                                        <p className={`mt-2`}>Our end of lease cleaning service is designed to meet the
                                            stringent
                                            requirements of property managers and landlords.</p>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{opacity: 0, translateX: 100}}
                                    animate={{opacity: 1, translateX: 0}}
                                    exit={{opacity: 0, translateX: 100}}
                                    transition={{delay: 0.2, duration: 0.5}}>
                                    <div className={`max-w-[30em] p-10 bg-[#dde4fb] rounded-md shadow`}>
                                        <Image className={`aspect-square w-16`} src={window} alt={``}/>
                                        <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Window Cleaning</h1>
                                        <p className={`mt-2`}>Window cleaning services for a wide range of clients,
                                            including
                                            houses, shops, bars, car dealerships, showrooms, and strata buildings.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                    </div>
                    {/*second div*/}

                    {/*third div*/}
                    {/*Why Choose Don Denciong?*/}
                    <div className={`flex flex-col items-center p-16`}>
                        <h1 className={` text-4xl  font-bold`}>
                            Why <span className={`text-[#5465FF]`}>Choose </span>Don Denciong?
                        </h1>
                        <div className={`flex items-center justify-center p-5`}>
                            <div className={`flex flex-wrap justify-center items-center`}>
                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>

                                <div className={`p-5`}>
                                    <div
                                        className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow flex flex-col items-center`}>
                                        <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                        <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                            Staff</h1>
                                        <p className={`text-center mt-2`}>Our professional cleaners are thoroughly
                                            vetted
                                            and trained to provide the highest standard of service.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*third div*/}

                    {/*fourth div*/}
                    {/*Our Process*/}
                    <div className={`bg-white py-16 mt-14 flex flex-col items-center  `}>
                        <h1 className={`text-center text-4xl font-bold`}>
                            Our <span className={`text-[#5465FF]`}>Process</span>
                        </h1>
                        <div className={` py-16`}>
                            <div className={`flex flex-wrap gap-16 px-8 justify-center`}>
                                <div className={`max-w-[32em] p-8 bg-[#dde4fb] relative rounded-xl shadow`}>
                                    <div
                                        className={` aspect-square border-white border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#788BFF]`}>
                                        <h1 className={`text-4xl font-bold text-white`}>1</h1>
                                    </div>
                                    <h1 className={`mt-3 text-xl font-bold`}>Consultation</h1>
                                    <p className={`mt-2`}>We start with a free consultation to understand your cleaning
                                        needs and preferences. Whether it’s a one-time deep clean or regular
                                        maintenance, we
                                        tailor our services to fit your requirements.</p>
                                </div>

                                <div className={`max-w-[32em] p-8 bg-[#dde4fb] relative rounded-xl shadow `}>
                                    <div
                                        className={` aspect-square border-white border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#788BFF]`}>
                                        <h1 className={`text-4xl font-bold text-white`}>2</h1>
                                    </div>
                                    <h1 className={`mt-3 text-xl font-bold`}>Customized Plan</h1>
                                    <p className={`mt-2`}>Based on the consultation, we create a customized cleaning
                                        plan
                                        that outlines the tasks, schedule, and pricing. We ensure transparency and no
                                        hidden
                                        costs.</p>
                                </div>

                                <div className={`max-w-[32em] p-8 bg-[#dde4fb] relative rounded-xl shadow `}>
                                    <div
                                        className={` aspect-square border-white border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#788BFF]`}>
                                        <h1 className={`text-4xl font-bold text-white`}>3</h1>
                                    </div>
                                    <h1 className={`mt-3 text-xl font-bold`}>Professional Cleaning</h1>
                                    <p className={`mt-2`}>Our experienced team arrives on time, fully equipped with
                                        eco-friendly cleaning products and tools. We follow the plan meticulously,
                                        ensuring
                                        every corner is spotless.</p>
                                </div>

                                <div className={`max-w-[32em]  p-8 bg-[#dde4fb] relative rounded-xl shadow `}>
                                    <div
                                        className={` aspect-square border-white border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#788BFF]`}>
                                        <h1 className={`text-4xl font-bold text-white`}>4</h1>
                                    </div>
                                    <h1 className={`mt-3 text-xl font-bold`}>Quality Check</h1>
                                    <p className={`mt-2`}>After the cleaning, we perform a thorough quality check to
                                        ensure
                                        everything meets our high standards. Your satisfaction is guaranteed.</p>
                                </div>

                                <div className={`max-w-[32em] p-8 bg-[#dde4fb] relative rounded-xl shadow `}>
                                    <div
                                        className={` aspect-square border-white border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#788BFF]`}>
                                        <h1 className={`text-4xl font-bold text-white`}>5</h1>
                                    </div>
                                    <h1 className={`mt-3 text-xl font-bold`}>Feedback and Follow-Up</h1>
                                    <p className={`mt-2`}>We welcome your feedback and use it to improve our services.
                                        We
                                        also offer follow-up services to maintain the cleanliness of your space.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*fourth div*/}

                    {/*fifth div*/}
                    {/*Our Customer Says*/}
                    <div className={`flex flex-col justify-center items-center mt-14`}>
                        <h1 className={`font-bold text-4xl`}>
                            Our <span className={` text-[#5465FF]`}>Customer Says</span>
                        </h1>
                        <div ref={reviewRef}
                             className={`mt-10 h-[75em] md:h-[40em] justify-center items-center max-w-[80em] flex flex-col `}>
                            {inViewRef && (
                                <div className={`flex flex-wrap gap-10 p-10 items-center justify-center`}>
                                    {reviews.map((e, i) => {
                                        if (i >= reviewRange.start && i <= reviewRange.end) {
                                            return (
                                                <motion.div key={i}
                                                            initial={{opacity: 0}}
                                                            animate={{opacity: 1}}
                                                            exit={{opacity: 0}}
                                                            transition={{delay: 0.3, duration: 0.5}}>
                                                    <ReviewCard name={e.user} review={e.review}/>
                                                </motion.div>
                                            )
                                        }
                                    })}
                                </div>
                            )}
                            <div className={`flex gap-8 mt-5`}>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        console.log('sub', reviewRange)
                                        if ((reviewRange.start - 1) <= 0) return
                                        setReviewRange({start: reviewRange.start - 4, end: reviewRange.end - 4})

                                    }}
                                    className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] hover:bg-[#b7bdf9] transition-all duration-200 justify-center items-center text-2xl text-white`}>
                                    <Image className='translate-x-1' src={chevronLeft} alt=''/></button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        if (!reviews[reviewRange.end + 1]) return
                                        console.log('add', reviewRange)
                                        setReviewRange({start: reviewRange.start + 4, end: reviewRange.end + 4})
                                    }}
                                    className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] hover:bg-[#b7bdf9] transition-all duration-200 justify-center items-center text-2xl text-white`}>
                                    <Image src={chevronRight} alt=''/></button>
                            </div>
                        </div>
                    </div>
                    {/*fifth div*/}

                    {/*fifth div*/}
                    {/*Special Offer*/}
                    <div className={`flex flex-col items-center mt-24 bg-white p-8`}>
                        <h1 className={`text-4xl font-bold`}>
                            Special <span className={`text-[#5465FF]`}>Offer</span>
                        </h1>
                        <div className={`flex flex-col w-full mt-5 items-center `}>
                            <div className={`flex gap-10 flex-col md:flex-row justify-center`}>
                                <Image className={`aspect-square scale-75`} src={trash_bin} alt={``}/>
                                <div className={`flex flex-col w-full gap-3 items-center justify-center`}>
                                    <Image className={`w-[31em]`} src={promo1} alt={``}/>
                                    <Image className={`w-[31em]`} src={promo2} alt={``}/>
                                </div>
                            </div>
                            <div
                                className={`flex bg-[#dde4fb] flex-col md:flex-row p-10 gap-8 rounded-xl items-center max-w-[65em] justify-around mt-5 shadow`}>
                                <Image className={`aspect-square w-36`} src={house2} alt={``}/>
                                <div className={`flex flex-col justify-center `}>
                                    <h1 className={`text-[#5465FF] text-2xl font-bold`}>Get your place cleaned</h1>
                                    <p className={`mt-2 `}>Your New Cleaning Partner!</p>
                                    <p className={``}>Expert Cleaning for Your Home and Office!</p>
                                    <p className={``}> We Make Clean Look Easy!</p>
                                </div>
                                <div className={`flex flex-col gap-5 justify-center `}>
                                    <button onClick={() => location.href = "#quote"}
                                            className={`p-2 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Get
                                        a Quote
                                    </button>
                                    <button
                                        onClick={() => location.href = 'tel:+61406780941'}
                                        className={`py-2 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Call
                                        us Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*fifth div*/}

                    {/*sixth div*/}
                    {/*Get a Quote*/}
                    <div id={'quote'} className={`p-8 md:p-16 md:px-52`}>
                        <h1 className={`text-4xl font-bold text-center`}>
                            Get a <span className={`text-[#5465FF]`}>Quote</span>
                        </h1>
                        <div className={`flex md:flex-row flex-col items-center justify-center gap-8 mt-5 `}>
                            <div className={`flex-1`}>
                                <h1 className={`font-bold text-2xl`}>
                                    Get your Free <span className={`text-[#5465FF]`}>Cleaning Quote</span>
                                </h1>
                                <Image className={`aspect-auto w-[32em]`} src={mopping} alt={``}/>
                            </div>
                            <form action={`#`}
                                  className={`flex flex-col bg-[#ced7f8] flex-1 w-full p-4 rounded-xl gap-5 shadow items-center`}>
                                <div className="relative w-full">
                                    <input value={name} onChange={e => setName(e.target.value)} type="text"
                                           className="rounded-md w-full px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Name :
                                    </label>
                                </div>

                                <div className="relative w-full">
                                    <input value={streetAddress} onChange={e => setStreetAddress(e.target.value)}
                                           type="text"
                                           className=" w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Street Address :
                                    </label>
                                </div>

                                <div className="relative w-full">
                                    <input value={suburb} onChange={e => setSuburb(e.target.value)} type="text"

                                           className=" w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Suburb :
                                    </label>
                                </div>

                                <div className="relative w-full">
                                    <input value={emailAddress} onChange={e => setEmailAddress(e.target.value)}
                                           type="text"
                                           className=" w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Email :
                                    </label>
                                </div>
                                <div className="relative w-full">
                                    <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)}
                                           type="tel"

                                           className="  w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Mobile Number :
                                    </label>
                                </div>

                                <div className="relative w-full">
                                    <input value={service} onChange={e => setService(e.target.value)} type="text"

                                           className="  w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                           placeholder=" "
                                           required
                                    />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Service/s Required:
                                    </label>
                                </div>

                                <div className="relative w-full">
                                <textarea value={details} onChange={e => setDetails(e.target.value)}
                                          className=" h-24  w-full rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                          placeholder=" "
                                          required
                                />
                                    <label htmlFor="Name"
                                           className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                        Please provide any other relevant details.
                                    </label>
                                </div>

                                <button onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    if (buttonMessage === 'Send Message') {
                                        if (name && streetAddress && suburb && emailAddress && mobileNumber && service && details) {
                                            setButtonMessage('Sending...')
                                            axios.post("/api/send-mail", {
                                                "name": name,
                                                "streetAddress": streetAddress,
                                                "suburb": suburb,
                                                "email": emailAddress,
                                                "mobileNumber": mobileNumber,
                                                "service": service,
                                                "details": details
                                            }).then(res => {
                                                setName("")
                                                setStreetAddress("")
                                                setSuburb("")
                                                setEmailAddress("")
                                                setMobileNumber("")
                                                setService("")
                                                setDetails("")
                                                setButtonMessage('Send Message')
                                                setSuccess(true)
                                                console.log("success")
                                                console.log(res.data)
                                            }).catch(err => {
                                                console.log("error")
                                            })
                                        } else {
                                            console.log('err')
                                        }
                                    }

                                }} className={`bg-[#5465FF] rounded-md max-w-64 w-full p-3 text-white`}
                                        type={`submit`}>{buttonMessage}</button>
                            </form>
                        </div>
                    </div>
                    {/*sixth div*/}

                </main>
                <Footer/>
            </AnimatePresence>
        </div>
    );
}

// @ts-ignore

