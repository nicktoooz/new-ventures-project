'use client'
import Image from 'next/image';
import image1 from '../../public/hero.png';
import house from '../../public/houseicon.png';
import desktop from '../../public/desktop.png';
import key from '../../public/key.png';
import window from '../../public/window.png';
import shake from '../../public/shake.png';
import phone from '../../public/phone.svg';
import email from '../../public/mail.svg';
import wmail from '../../public/white_mail.png';
import wphone from '../../public/white_phone.png';
import trash_bin from '../../public/trash_bin.svg';
import promo1 from '../../public/promo1.svg';
import promo2 from '../../public/promo2.svg';
import house2 from '../../public/haus.svg';
import mopping from '../../public/mopping.png';
import ReviewCard from '@/app/(components)/ReviewCard';
import {useState} from "react";
import axios from "axios";

export default function Home() {
    const [name, setName] = useState('')
    const [streetAddress, setStreetAddress] = useState('')
    const [suburb, setSuburb] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [service, setService] = useState('')
    const [details, setDetails] = useState('')
    const [issucces, setSucces] = useState(false)

    return (
        <div>

            <header className={`h-20 shadow-xl flex justify-between p-5 items-center`}>
                <div>
                    <h1>Don Denciong</h1>
                </div>
                <div className={`header-right gap-14 flex items-center mr-5`}>
                    <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>Home</button>
                    <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>Services</button>
                    <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>About Us</button>
                    <button
                        className={`border-2 border-[#5465FF] hover:bg-[#5465FF] hover:text-white p-2 rounded-md text-[#5465FF]`}>Contact
                        Us
                    </button>
                </div>
                <SuccessMessage visible={issucces}/>
            </header>

            <main className={`flex bg-[#dde4fb] flex-col`}>
                {/*first div*/}
                {/*Hero*/}
                <div className={`flex mt-5 p-10 justify-around `}>
                    <div>
                        <div className={`flex gap-14`}>
                            <section className={`flex gap-3`}>
                                <Image className={`aspect-square `} src={phone} alt={``}/>
                                <p>+61 406 780 941</p>
                            </section>
                            <section className={`flex gap-3`}>
                                <Image className={`aspect-square `} src={email} alt={``}/>
                                <p>+61 406 780 941</p>
                            </section>
                        </div>
                        <h1 className={`text-4xl font-bold mt-10`}>Don Denciong Cleaning Services:</h1>
                        <h1 className={`text-4xl font-bold mt-2`}>
                            Where <span className={`text-[#5465FF]`}>Cleanliness</span> Meets Excellence!
                        </h1>
                        <h1 className={`mt-5 text-xl`}>Your New Cleaning Partner!</h1>
                        <h1 className={`text-xl`}>Expert Cleaning for Your Home and Office!</h1>
                        <h1 className={`text-xl`}> We Make Clean Look Easy!</h1>
                        <div className={`mt-20 gap-8 flex`}>
                            <button onClick={() => location.href = "#quote"}
                                    className={`p-2 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Send
                                a Quote
                            </button>
                            <button
                                className={`py-2 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Learn
                                More
                            </button>
                        </div>
                    </div>

                    <div className={``}>
                        <Image className={`aspect-square w-[30em]`} src={image1} alt={``}/>
                    </div>
                </div>

                {/*first div*/}

                {/*second div*/}
                {/*Our Services*/}
                <div className={`flex flex-col items-center mt-24 bg-white py-16`}>
                    <h1 className={`text-4xl font-bold`}>
                        Our <span className={`text-[#5465FF]`}>Services</span>
                    </h1>
                    <div>
                        <div className={`flex flex-wrap gap-5 items-center justify-center mt-5`}>
                            <div className={`p-8`}>
                                <div className={`w-[30em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                                    <Image className={`aspect-square w-16`} src={house} alt={``}/>
                                    <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Residential Cleaning</h1>
                                    <p className={`mt-2`}>Our professional cleaning team is dedicated to providing
                                        top-notch cleaning services tailored to your specific need</p>
                                </div>
                            </div>

                            <div className={`p-8`}>
                                <div className={`w-[30em] h-[16.5em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                                    <Image className={`aspect-square w-16`} src={desktop} alt={``}/>
                                    <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Commercial / Office
                                        Cleaning</h1>
                                    <p className={`mt-2`}>Our team of expert cleaners is dedicated to delivering
                                        top-notch cleaning services to businesses in the area.</p>
                                </div>
                            </div>

                            <div className={`p-8`}>
                                <div className={`w-[30em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                                    <Image className={`aspect-square w-16`} src={key} alt={``}/>
                                    <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>End of Lease Cleaning</h1>
                                    <p className={`mt-2`}>Our end of lease cleaning service is designed to meet the
                                        stringent requirements of property managers and landlords.</p>
                                </div>
                            </div>

                            <div className={`p-8`}>
                                <div className={`w-[30em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                                    <Image className={`aspect-square w-16`} src={window} alt={``}/>
                                    <h1 className={`text-[#5465FF] text-xl font-bold mt-2`}>Window Cleaning</h1>
                                    <p className={`mt-2`}>Window cleaning services for a wide range of clients,
                                        including houses, shops, bars, car dealerships, showrooms, and strata
                                        buildings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*second div*/}

                {/*third div*/}
                {/*Why Choose Don Denciong?*/}
                <div className={`flex flex-col items-center p-16`}>
                    <h1 className={` text-4xl  font-bold`}>
                        {' '}
                        Why <span className={`text-[#5465FF]`}>Choose </span>Don Denciong?
                    </h1>
                    <div className={`flex items-center justify-center p-5`}>
                        <div className={`flex flex-wrap justify-center items-center`}>
                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
                                        and trained to provide the highest standard of service.</p>
                                </div>
                            </div>

                            <div className={`p-5`}>
                                <div
                                    className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                    <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                    <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy
                                        Staff</h1>
                                    <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted
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
                    <div className={`px-28 py-16`}>
                        <div className={`flex flex-wrap gap-16  justify-center`}>
                            <div className={`max-w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl shadow-xl`}>
                                <div
                                    className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                                    <h1 className={`text-4xl font-bold text-white`}>1</h1>
                                </div>
                                <h1 className={`mt-3 text-xl font-bold`}>Consultation</h1>
                                <p className={`mt-2`}>We start with a free consultation to understand your cleaning
                                    needs and preferences. Whether it’s a one-time deep clean or regular maintenance, we
                                    tailor our services to fit your requirements.</p>
                            </div>

                            <div className={`max-w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                                <div
                                    className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                                    <h1 className={`text-4xl font-bold text-white`}>2</h1>
                                </div>
                                <h1 className={`mt-3 text-xl font-bold`}>Customized Plan</h1>
                                <p className={`mt-2`}>Based on the consultation, we create a customized cleaning plan
                                    that outlines the tasks, schedule, and pricing. We ensure transparency and no hidden
                                    costs.</p>
                            </div>

                            <div className={`max-w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                                <div
                                    className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                                    <h1 className={`text-4xl font-bold text-white`}>3</h1>
                                </div>
                                <h1 className={`mt-3 text-xl font-bold`}>Professional Cleaning</h1>
                                <p className={`mt-2`}>Our experienced team arrives on time, fully equipped with
                                    eco-friendly cleaning products and tools. We follow the plan meticulously, ensuring
                                    every corner is spotless.</p>
                            </div>

                            <div className={`max-w-[32em]  h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                                <div
                                    className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                                    <h1 className={`text-4xl font-bold text-white`}>4</h1>
                                </div>
                                <h1 className={`mt-3 text-xl font-bold`}>Quality Check</h1>
                                <p className={`mt-2`}>After the cleaning, we perform a thorough quality check to ensure
                                    everything meets our high standards. Your satisfaction is guaranteed.</p>
                            </div>

                            <div className={`max-w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                                <div
                                    className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                                    <h1 className={`text-4xl font-bold text-white`}>5</h1>
                                </div>
                                <h1 className={`mt-3 text-xl font-bold`}>Feedback and Follow-Up</h1>
                                <p className={`mt-2`}>We welcome your feedback and use it to improve our services. We
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
                    <div className={`mt-10 items-center max-w-[80em] flex flex-col `}>
                        <div className={`flex flex-wrap gap-10 p-10 items-center justify-center`}>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                        <div className={`flex gap-8 mt-5`}>
                            <button
                                className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] justify-center items-center`}></button>
                            <button
                                className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] bg-[#5465FF] justify-center items-center`}></button>
                        </div>
                    </div>
                </div>
                {/*fifth div*/}

                {/*fifth div*/}
                {/*Special Offer*/}
                <div className={`flex flex-col items-center mt-24 bg-white p-16`}>
                    <h1 className={`text-4xl font-bold`}>
                        Special <span className={`text-[#5465FF]`}>Offer</span>
                    </h1>
                    <div className={`flex flex-col w-full p-10 mt-5 items-center `}>
                        <div className={`flex gap-10 justify-center`}>
                            <Image className={`aspect-square w-[22rem]`} src={trash_bin} alt={``}/>
                            <div className={`flex flex-col gap-3 items-center justify-center`}>
                                <Image className={`w-[31em]`} src={promo1} alt={``}/>
                                <Image className={`w-[31em]`} src={promo2} alt={``}/>
                            </div>
                        </div>
                        <div
                            className={`flex bg-[#dde4fb] p-10 rounded-xl items-center max-w-[65em] justify-around mt-5 shadow-xl`}>
                            <Image className={`aspect-square w-36`} src={house2} alt={``}/>
                            <div className={`flex flex-col justify-center `}>
                                <h1 className={`text-[#5465FF] text-3xl font-bold`}>Get your place cleaned</h1>
                                <p className={`mt-5 text-xl`}>Your New Cleaning Partner!</p>
                                <p className={`text-xl`}>Expert Cleaning for Your Home and Office!</p>
                                <p className={`text-xl`}> We Make Clean Look Easy!</p>
                            </div>
                            <div className={`flex flex-col gap-5 justify-center `}>
                                <button onClick={() => location.href = "#quote"}
                                        className={`p-2 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Get
                                    a Quote
                                </button>
                                <button
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
                <div id={'quote'} className={`p-16`}>
                    <h1 className={`text-4xl font-bold text-center`}>
                        Get a <span className={`text-[#5465FF]`}>Quote</span>
                    </h1>
                    <div className={`flex items-center justify-center gap-8 mt-5 `}>
                        <div>
                            <h1 className={`font-bold text-2xl`}>
                                Get your Free <span className={`text-[#5465FF]`}>Cleaning Quote</span>
                            </h1>
                            <Image className={`aspect-auto w-[32em]`} src={mopping} alt={``}/>
                        </div>
                        <div  className={`bg-[#ced7f8] p-10 rounded-xl flex flex-col gap-5 shadow-xl items-center`}>
                            <div className="relative">
                                <input value={name} onChange={e => setName(e.target.value)}  type="text"

                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Name :
                                </label>
                            </div>

                            <div className="relative">
                                <input value={streetAddress} onChange={e => setStreetAddress(e.target.value)}
                                       type="text"
                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Street Address :
                                </label>
                            </div>

                            <div className="relative">
                                <input value={suburb} onChange={e => setSuburb(e.target.value)} type="text"

                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Suburb :
                                </label>
                            </div>

                            <div className="relative">
                                <input value={emailAddress} onChange={e => setEmailAddress(e.target.value)}
                                       type="text"
                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Email :
                                </label>
                            </div>
                            <div className="relative">
                                <input value={mobileNumber} onChange={e => setMobileNumber(e.target.value)} type="tel"

                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Mobile Number :
                                </label>
                            </div>

                            <div className="relative">
                                <input value={service} onChange={e => setService(e.target.value)} type="text"

                                       className="w-[32em]  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Service/s Required:
                                </label>
                            </div>

                            <div className="relative">
                                <input value={details} onChange={e => setDetails(e.target.value)} type="text"

                                       className="w-[32em] h-24  block rounded-md px-2.5 pb-2.5 pt-5 text-sm  border-[#5465FF] border outline-[#5465FF]  peer"
                                       placeholder=" "/>
                                <label htmlFor="Name"
                                       className="absolute text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                                    Please provide any other relevant details.
                                </label>
                            </div>

                            <button onClick={(e) => {
                                if (name && streetAddress && suburb && emailAddress && mobileNumber && service && details) {
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
                                        setSucces(true)
                                        setTimeout(()=>{
                                            setSucces(false)
                                        },3000)
                                        console.log("success")

                                    }).catch(err => {
                                        console.log("error")
                                    })
                                } else {
                                    console.log('err')
                                }

                            }} className={`bg-[#5465FF] rounded-md w-64 p-3 text-white`}> Send Message
                            </button>
                        </div>
                    </div>
                </div>
                {/*sixth div*/}

                <footer className={`h-56 text-white bg-[#788BFF] flex items-center justify-between p-16`}>
                    <div className={`flex flex-col justify-center `}>
                        <h1 className={`text-xl`}>Don Denciong</h1>
                        <p className={`mt-5 text-xs`}>Your New Cleaning Partner!</p>
                        <p className={`text-xs`}>Expert Cleaning for Your Home and Office!</p>
                        <p className={`text-xs`}> We Make Clean Look Easy!</p>
                    </div>

                    <div className={`flex gap-36 justify-center `}>
                        <div className={`gap-2.5 flex flex-col`}>
                            <h1 className={`text-xl`}>Company</h1>
                            <p className={`text-xs`}>About Us</p>
                            <p className={`text-xs`}>Services</p>
                            <p className={`text-xs`}>Contact Us</p>
                        </div>

                        <div className={`gap-2.5 flex flex-col`}>
                            <h1 className={`text-xl`}>Services</h1>
                            <p className={`text-xs`}>Residential Cleaning</p>
                            <p className={`text-xs`}>Commercial/ Office Cleaning</p>
                            <p className={`text-xs`}>End of Lease Cleaning</p>
                            <p className={`text-xs`}>Window Cleaning</p>
                        </div>

                        <div className={`gap-2.5 flex flex-col px-5`}>
                            <h1 className={`text-xl`}>Contact Us</h1>
                            <div className={`flex flex-col gap-2`}>
                                <section className={`flex gap-2`}>
                                    <Image className={`aspect-square w-[1.1rem]  `} src={wphone} alt={``}/>
                                    <p className={`text-xs`}>+61 406 780 941</p>
                                </section>
                                <section className={`flex gap-3`}>
                                    <Image className={`aspect-square w-[1.1rem] `} src={wmail} alt={``}/>
                                    <p className={`text-xs`}>info@dondenciong.com.au</p>
                                </section>
                                <section className={`flex gap-2.5`}>
                                    <p className={` font-bold text-xs`}>ABN</p>
                                    <p className={`text-xs`}>26912506894</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

function SuccessMessage({visible}: {visible:boolean}) {
    return (
        visible && (
            <div className={`h-screen w-full fixed bg-[#00000026] z-50 grid place-items-center top-0 left-0`}>
                <div className={`max-w-96 h-96 bg-green-200`}>
                    <h1>LOREM</h1>
                </div>
            </div>
        )
    )

}
