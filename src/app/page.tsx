import Image from "next/image";
import image1 from "../../public/hero.png"
import house from "../../public/houseicon.png"
import desktop from "../../public/desktop.png"
import key from '../../public/key.png'
import window from '../../public/window.png'
import shake from '../../public/shake.png'
import phone from '../../public/phone.svg'
import email from '../../public/mail.svg'
import left from '../../public/chevron_left.svg'
import right from '../../public/chevron_right.svg'
import ReviewCard from "@/app/(components)/ReviewCard";
export default function Home() {
  return (
   <div>
     <header className={`h-20 shadow-xl flex justify-between p-5 items-center`}>
         <div>
             <h1>Don Denciong</h1>
         </div>
         <div className={`header-right gap-14 flex items-center mr-5`}>
             <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>Home</button>
             <button  className={`hover:underline decoration-4 decoration-[#5465FF] `}>Services</button>
             <button className={`hover:underline decoration-4 decoration-[#5465FF] `}>About Us</button>
             <button className={`border-2 border-[#5465FF] hover:bg-[#5465FF] hover:text-white p-2 rounded-md text-[#5465FF]`}>Contact Us</button>
         </div>
     </header>

       <main className={`flex py-14 bg-[#dde4fb] flex-col`}>
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
                   <h1 className={`text-4xl font-bold mt-2`}>Where <span className={`text-[#5465FF]`}>Cleanliness</span> Meets Excellence!</h1>
                   <h1 className={`mt-5 text-xl`}>Your New Cleaning Partner!</h1>
                   <h1 className={`text-xl`}>Expert Cleaning for Your Home and Office!</h1>
                   <h1 className={`text-xl`}> We Make Clean Look Easy!</h1>
                   <div className={`mt-20 gap-8 flex`}>
                       <button className={`p-2 bg-[#5465FF] hover:bg-white hover:text-[#5465FF] border border-[#5465FF] rounded text-white`}>Send a Quote</button>
                       <button className={`py-2 px-4 bg-white hover:bg-[#5465FF] hover:text-white rounded text-[#5465FF] border border-[#5465FF]`}>Learn More</button>
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
               <h1 className={`text-4xl font-bold`}>Our <span className={`text-[#5465FF]`}>Services</span></h1>
               <div>
                   <div className={`flex flex-wrap gap-5 items-center justify-center mt-5`}>
                   <div className={`p-8`}>
                           <div className={`w-[32em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                               <Image className={`aspect-square w-16`} src={house} alt={``}/>
                               <h1 className={`text-[#5465FF] text-2xl font-bold mt-2`}>Residential Cleaning</h1>
                               <p className={`mt-2`}>Our professional cleaning team is dedicated to providing top-notch cleaning services tailored to your specific need</p>
                           </div>
                       </div>

                       <div className={`p-8`}>
                           <div className={`w-[32em] h-[16.5em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                               <Image className={`aspect-square w-16`} src={desktop} alt={``}/>
                               <h1 className={`text-[#5465FF] text-2xl font-bold mt-2`}>Commercial / Office Cleaning</h1>
                               <p className={`mt-2`}>Our team of expert cleaners is dedicated to delivering top-notch cleaning services to businesses in the area.</p>
                           </div>
                       </div>

                       <div  className={`p-8`}>
                           <div className={`w-[32em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                               <Image className={`aspect-square w-16`} src={key} alt={``}/>
                               <h1 className={`text-[#5465FF] text-2xl font-bold mt-2`}>End of Lease Cleaning</h1>
                               <p className={`mt-2`}>Our end of lease cleaning service is designed to meet the stringent requirements of property managers and landlords.</p>
                           </div>
                       </div>


                       <div  className={`p-8`}>
                           <div className={`w-[32em] p-10 bg-[#dde4fb] rounded-md shadow-xl`}>
                               <Image className={`aspect-square w-16`} src={window} alt={``}/>
                               <h1 className={`text-[#5465FF] text-2xl font-bold mt-2`}>Window Cleaning</h1>
                               <p className={`mt-2`}>Window cleaning services for a wide range of clients, including houses, shops, bars, car dealerships, showrooms, and strata buildings.</p>
                           </div>
                       </div>



                   </div>
               </div>
           </div>
           {/*second div*/}


           {/*third div*/}
           {/*Why Choose Don Denciong?*/}
           <div className={`flex flex-col items-center p-16`}>
                <h1 className={` text-4xl font-bold`}> Why <span className={`text-[#5465FF]`}>Choose </span>Don Denciong?</h1>
                <div className={`flex items-center justify-center p-5`}>
                    <div className={`flex flex-wrap  ml-8`}>
                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>

                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>


                        <div className={`p-5`}>
                            <div className={`w-[18em] bg-[#FFFFFF] p-10 rounded-md shadow-xl flex flex-col items-center`}>
                                <Image className={`aspect-square w-16 `} src={shake} alt={``}/>
                                <h1 className={`font-bold text-xl text-center`}>Experienced and Trustworthy Staff</h1>
                                <p className={`text-center mt-2`}>Our professional cleaners are thoroughly vetted and
                                    trained to provide the highest standard of service.</p>
                            </div>
                        </div>

                    </div>
                </div>

           </div>
           {/*third div*/}

           {/*fourth div*/}
           {/*Our Process*/}
           <div className={`bg-white py-16 mt-14 flex flex-col items-center  `}>
               <h1 className={`text-center text-4xl font-bold`}>Our <span className={`text-[#5465FF]`}>Process</span></h1>
           <div className={`px-28 py-16`}>
               <div className={`flex flex-wrap gap-16  justify-center`}>

                   <div className={`w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl shadow-xl`}>
                       <div
                           className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                           <h1 className={`text-4xl font-bold text-white`}>1</h1>
                       </div>
                       <h1 className={`mt-3 text-xl font-bold`}>Consultation</h1>
                       <p className={`mt-2`}>We start with a free consultation to understand your cleaning needs and
                           preferences. Whether it’s a one-time deep clean or regular maintenance, we tailor our
                           services to fit your requirements.</p>
                   </div>

                   <div className={`w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                       <div
                           className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                           <h1 className={`text-4xl font-bold text-white`}>2</h1>
                       </div>
                       <h1 className={`mt-3 text-xl font-bold`}>Customized Plan</h1>
                       <p className={`mt-2`}>Based on the consultation, we create a customized cleaning plan that outlines the tasks, schedule, and pricing. We ensure transparency and no hidden costs.</p>
                   </div>

                   <div className={`w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                       <div
                           className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                           <h1 className={`text-4xl font-bold text-white`}>3</h1>
                       </div>
                       <h1 className={`mt-3 text-xl font-bold`}>Professional Cleaning</h1>
                       <p className={`mt-2`}>Our experienced team arrives on time, fully equipped with eco-friendly cleaning products and tools. We follow the plan meticulously, ensuring every corner is spotless.</p>
                   </div>

                   <div className={`w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                       <div
                           className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                           <h1 className={`text-4xl font-bold text-white`}>4</h1>
                       </div>
                       <h1 className={`mt-3 text-xl font-bold`}>Quality Check</h1>
                       <p className={`mt-2`}>After the cleaning, we perform a thorough quality check to ensure everything meets our high standards. Your satisfaction is guaranteed.</p>
                   </div>

                   <div className={`w-[32em] h-52 p-8 bg-[#dde4fb] relative rounded-xl  shadow-xl`}>
                       <div
                           className={` flex justify-center items-center absolute top-[-32px] left-[-30px] rounded-full w-20 h-20  bg-[#5465FF]`}>
                           <h1 className={`text-4xl font-bold text-white`}>5</h1>
                       </div>
                       <h1 className={`mt-3 text-xl font-bold`}>Feedback and Follow-Up</h1>
                       <p className={`mt-2`}>We welcome your feedback and use it to improve our services. We also offer follow-up services to maintain the cleanliness of your space.</p>
                   </div>
               </div>
           </div>
           </div>

           {/*fourth div*/}

           {/*fifth div*/}
           {/*Our Customer Says*/}
           <div className={`flex flex-col justify-center items-center mt-14`}>
               <h1 className={`font-bold text-4xl`}>Our <span className={` text-[#5465FF]`}>Customer Says</span></h1>
               <div className={`mt-10 items-center w-[80em] flex flex-col `}>
                   <div className={`flex flex-wrap gap-10 p-10 items-center justify-center`}>
                       <ReviewCard/>
                       <ReviewCard/>
                       <ReviewCard/>
                       <ReviewCard/>
                   </div>
                   <div className={`flex gap-8 mt-5`}>
                       <button className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] justify-center items-center`}></button>
                       <button className={`flex w-16 h-16 rounded-full border-4 border-[#5465FF] bg-[#5465FF] justify-center items-center`}></button>
                   </div>
               </div>
           </div>
           {/*fifth div*/}

           {/*fifth div*/}
           {/*Special Offer*/}
           <div className={`flex flex-col items-center mt-24 bg-white p-16`}>
               <h1 className={`text-4xl font-bold`}>Special <span className={`text-[#5465FF]`}>Offer</span></h1>

           </div>

           {/*fifth div*/}



       </main>
   </div>
  );
}


