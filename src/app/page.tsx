'use client';
import Image from 'next/image';
import image1 from '../../public/hero.svg';
import house from '../../public/houseicon.png';
import shake from '../../public/shake.png';
import phone from '../../public/phone.svg';
import email from '../../public/mail.svg';
import trash_bin from '../../public/trash_bin.svg';
import promo1 from '../../public/promo1.svg';
import promo2 from '../../public/promo2.svg';
import house2 from '../../public/haus.svg';
import mopping from '../../public/mopping.png';
import desktop from '../../public/desktop.png';
import key from '../../public/key.png';
import window from '../../public/window.png';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import chevronLeft from '../../public/chevron_left.svg';
import chevronRight from '../../public/chevron_right.svg';
import { AnimatePresence, delay, motion, useInView } from 'framer-motion';
import Header from './Header';
import gbp from '../../public/save.svg';
import guarantee from '../../public/guarantee.svg';
import notravelfee from '../../public/notravelfee.svg';
import { SuccessMessage } from './(components)/SuccessMessage';
import stars from '../../public/StarRating.svg';
import Footer from './Footer';
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Hero />
        <ServiceSection />
        <WhyChooseDondenciong />
        <OurProcess />
        <ReviewSection />
        <SpecialOffers />
        <GetAQuote />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom },
    }),
  };
  const show = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: custom },
    }),
  };

  return (
    <div className="hero bg-[#2a2a270d]">
      <div className="flex p-10 justify-center items-center">
        <div>
          <motion.div className="flex flex-col md:flex-row gap-5 md:gap-14" initial="hidden" animate="visible" variants={variants} custom={0.0}>
            <section className="flex gap-3" onClick={() => (location.href = 'tel:+61406780941')}>
              <Image className="aspect-square" src={phone} alt="Phone" />
              <p>+61 406 780 941</p>
            </section>
            <section className="flex gap-3" onClick={() => (location.href = 'mailto:info@dondenciong.com.au')}>
              <Image className="aspect-square" src={email} alt="Email" />
              <p>info@dondenciong.com.au</p>
            </section>
          </motion.div>
          <motion.h1 className="text-4xl font-bold mt-2" initial="hidden" animate="visible" variants={variants} custom={0.2}>
            Where <span className="bg-gradient-to-r from-[#2A2A27] to-[#E3B04A] bg-clip-text text-transparent">Cleanliness</span> Meets Excellence!
          </motion.h1>
          <motion.h1 className="mt-5 text-xl" initial="hidden" animate="visible" variants={variants} custom={0.4}>
            Your New Cleaning Partner!
          </motion.h1>
          <motion.h1 className="text-xl" initial="hidden" animate="visible" variants={variants} custom={0.6}>
            Expert Cleaning for Your Home and Office!
          </motion.h1>
          <motion.h1 className="text-xl" initial="hidden" animate="visible" variants={variants} custom={0.8}>
            We Make Clean Look Easy!
          </motion.h1>
          <div className="gap-4 mt-5 flex">
            <motion.button initial="hidden" animate="visible" variants={show} custom={1} onClick={() => (location.href = '#quote')} className="py-4 max-w-40 w-full bg-[#2A2A27] hover:shadow-xl transition-all hover:translate-y-[-5px] rounded text-white">
              Send a Quote
            </motion.button>
            <motion.button initial="hidden" animate="visible" variants={show} custom={1} onClick={() => (location.href = '#our-services')} className="py-4 max-w-40 w-full bg-[#f1d7ac4d] hover:shadow-xl hover:translate-y-[-5px] transition-all rounded text-black">
              Learn More
            </motion.button>
          </div>
        </div>
        <motion.div initial="hidden" animate="visible" variants={show} className="hidden md:block">
          <Image className="aspect-square w-[30em]" src={image1} alt="Hero Image" />
        </motion.div>
      </div>
    </div>
  );
}
function ServiceSection() {
  const services = [
    {
      url: 'residential-cleaning',
      image: house,
      title: 'Residential Cleaning',
      desc: 'Our professional cleaning team is dedicated to providing top-notch cleaning services tailored to your specific need.',
    },
    {
      url: 'commercial-cleaning',
      image: desktop,
      title: 'Commercial/Office Cleaning',
      desc: 'Our team of expert cleaners is dedicated to delivering top-notch cleaning services to businesses in the area.',
    },
    {
      url: 'end-of-lease-cleaning',
      image: key,
      title: 'End-of-Lease Cleaning',
      desc: 'Our end of lease cleaning service is designed to meet the stringent requirements of property managers and landlords.',
    },
    {
      url: 'cleaning-window',
      image: window,
      title: 'Window Cleaning',
      desc: 'Window cleaning services for a wide range of clients, including houses, shops, bars, car dealerships, showrooms, and strata buildings.',
    },
  ];

  const variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -200 : 200,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div id="our-services" className="our-services mt-8 mx-8 flex items-center flex-col">
      <h1 className="text-4xl font-bold">
        Our <span className="text-[#E3B04A]">Services</span>
      </h1>
      <AnimatePresence>
        <div className="service-section mt-10 grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div key={index} custom={index % 2 === 0 ? 1 : -1} initial="hidden" animate="visible" exit="hidden" variants={variants} className="bg-[#2a2a270d] max-w-[30em] p-10 rounded-lg">
              <ServiceCard key={index} url={service.url} image={service.image} title={service.title} desc={service.desc} />
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}

function WhyChooseDondenciong() {
  const foo = useRef(null);
  const inView = useInView(foo);

  const reasons = [
    {
      url: 'affordable-rates',
      image: gbp,
      title: 'Affordable Rates',
      desc: 'Quality cleaning doesn’t have to break the bank. We offer competitive pricing and transparent quotes with no hidden fees.',
    },
    {
      url: 'satisfaction-guarantee',
      image: guarantee,
      title: 'Satisfaction Guarantee',
      desc: "Your satisfaction is our priority. If you're not happy with our service, we'll make it right.",
    },
    {
      url: 'no-travel-fees',
      image: notravelfee,
      title: 'No Travel Fees',
      desc: 'We do not charge travel fees, so you can enjoy our services without any hidden costs.',
    },
  ];

  const show = {
    hidden: {
      opacity: 0,
    },
    visible: (custom: number) => ({
      opacity: 1,
      transition: { duration: 0.5, delay: custom },
    }),
  };

  return (
    <div className="our-services bg-[#2a2a270d] py-20 mt-10  flex items-center flex-col ">
      <h1 className="text-4xl font-bold text-center">
        Why <span className="text-[#E3B04A]">Choose</span> Dondenciong
      </h1>
      <div ref={foo} className="service-section mt-10 mx-8 justify-center flex flex-wrap md:flex-row flex-col gap-10">
        {reasons.map((reason, index) => (
          <motion.div initial="hidden" key={index} animate={inView && 'visible'} variants={show} custom={index * 0.2} className="bg-[#2a2a270d] max-w-[30em] p-10 rounded-lg">
            <ServiceCard url={reason.url} image={reason.image} title={reason.title} desc={reason.desc} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);
  const reviewData = [
    {
      user: 'Emily R...',
      desc: 'Fantastic job! The house was sparkling clean.',
      rating: 5,
    },
    {
      user: 'Michael T...',
      desc: 'Very thorough cleaning service. Highly recommend.',
      rating: 4,
    },
    {
      user: 'David L.',
      desc: 'The service was okay, but could be improved.',
      rating: 2,
    },
  ];

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev > 0 ? prev - 1 : reviewData.length - 1));
  };

  const handleNext = () => {
    setCurrentReview((prev) => (prev < reviewData.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="our-services  mt-20 pb-10  bg-[#2a2a270d] flex items-center flex-col">
      <h1 className="text-4xl mx-8 mt-16 font-bold text-center">
        What Our <span className="text-[#E3B04A]">Customers</span> Think
      </h1>
      <div className="service-section mt- flex justify-center flex-col h-[30em] w-full">
        <div className="flex flex-1 justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div key={currentReview} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 0.4 } }}>
              <ReviewCard user={reviewData[currentReview].user} desc={reviewData[currentReview].desc} rating={reviewData[currentReview].rating} />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="right-controller h-20 gap-10 flex justify-center">
          <button className="cursor-pointer" onClick={handlePrevious}>
            <Image src={chevronLeft} alt="Previous" />
          </button>
          <button className="cursor-pointer" onClick={handleNext}>
            <Image src={chevronRight} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
}

function OurProcess() {
  const processSteps = [
    {
      num: '1',
      title: 'Consultation',
      desc: 'We start with a free consultation to understand your cleaning needs and preferences. Whether it’s a one-time deep clean or regular maintenance, we tailor our services to fit your requirements.',
    },
    {
      num: '2',
      title: 'Customized Plan',
      desc: 'Based on the consultation, we create a customized cleaning plan that outlines the tasks, schedule, and pricing. We ensure transparency and no hidden costs.',
    },
    {
      num: '3',
      title: 'Professional Cleaning',
      desc: 'Our experienced team arrives on time, fully equipped with eco-friendly cleaning products and tools. We follow the plan meticulously, ensuring every corner is spotless.',
    },
    {
      num: '4',
      title: 'Quality Check',
      desc: 'After the cleaning, we perform a thorough quality check to ensure everything meets our high standards. Your satisfaction is guaranteed.',
    },
    {
      num: '5',
      title: 'Feedback and Follow-Up',
      desc: 'We welcome your feedback and use it to improve our services. We also offer follow-up services to maintain the cleanliness of your space.',
    },
  ];

  return (
    <div className="our-services flex items-center flex-col mx-8">
      <h1 className="text-4xl mt-20 font-bold text-center">
        How <span className="text-[#E3B04A]">Dondenciong</span> Works
      </h1>
      <div className="service-section mt-20 max-w-[100em] justify-center flex flex-wrap md:flex-row flex-col gap-16">
        {processSteps.map((step, index) => (
          <ProcessCard key={index} num={step.num} title={step.title} desc={step.desc} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ url, image, title, desc }: { url: string; image: any; title: string; desc: string }) {
  return (
    <a href={`/${url}`} className="w-full h-full">
      <Image className="image-placeholder aspect-square m-auto w-20" src={image} alt="" />
      <h1 className={`text-[#E3B04A] text-center text-2xl font-bold mt-2`}>{title}</h1>
      <p className={`mt-2 opacity-80 text-center`}>{desc}</p>
    </a>
  );
}

function ProcessCard({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className={`max-w-[32em] p-8 bg-[#f1d7ac33] relative rounded-xl shadow`}>
      <div className={` aspect-square border-[#f7f7f7] border-[.5em] w-20 flex justify-center items-center absolute -top-10  md:left-[-30px]  rounded-full  bg-[#2a2a27]`}>
        <h1 className={`text-4xl font-bold text-[#F1D7AC]`}>{num}</h1>
      </div>
      <h1 className={`mt-3 text-xl font-bold`}>{title}</h1>
      <p className={`mt-2`}>{desc}</p>
    </div>
  );
}

function ReviewCard({ user, desc, rating }: { user: string; desc: string; rating: number }) {
  return (
    <div className="flex-1 flex flex-col justify-center text-center items-center">
      <h1 className="text-3xl font-medium">{user}</h1>
      <p className="my-5">{desc}</p>
      <Image src={stars} alt="" />
    </div>
  );
}

function SpecialOffers() {
  return (
    <div className={`flex flex-col items-center mt-24 p-8`}>
      <h1 className={`text-4xl font-bold`}>
        Special <span className={`text-[#E3B04A]`}>Offer</span>
      </h1>
      <div className={`flex flex-col w-full mt-5 items-center `}>
        <div className={`flex gap-10 flex-col md:flex-row justify-center`}>
          <Image className={`aspect-square scale-75`} src={trash_bin} alt={``} />
          <div className={`flex flex-col w-full gap-3 items-center justify-center`}>
            <Image className={`w-[31em]`} src={promo1} alt={``} />
            <Image className={`w-[31em]`} src={promo2} alt={``} />
          </div>
        </div>
        <div className={`flex bg-white flex-col md:flex-row p-10 gap-8 rounded-xl items-center max-w-[65em] justify-around mt-5 shadow`}>
          <Image className={`aspect-square w-36`} src={house2} alt={``} />
          <div className={`flex flex-col justify-center `}>
            <h1 className={`text-[#E3B04A] text-2xl font-bold`}>Get your place cleaned</h1>
            <p className={`mt-2 `}>Your New Cleaning Partner!</p>
            <p className={``}>Expert Cleaning for Your Home and Office!</p>
            <p className={``}> We Make Clean Look Easy!</p>
          </div>
          <div className={`flex flex-col gap-5 justify-center `}>
            <button onClick={() => (location.href = '#quote')} className={`p-2 bg-[#2A2A27] rounded  text-white hover:shadow-xl hover:translate-y-[-3px] transition-all`}>
              Get a Quote
            </button>
            <button onClick={() => (location.href = 'tel:+61406780941')} className={`py-2 px-4 bg-[#f1d7ac4d] hover:shadow-xl hover:translate-y-[-3px] transition-all`}>
              Call us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
interface Errors {
  name?: string;
  streetAddress?: string;
  suburb?: string;
  emailAddress?: string;
  mobileNumber?: string;
  service?: string;
  details?: string;
}

const GetAQuote = () => {
  const [name, setName] = useState<string>('');
  const [streetAddress, setStreetAddress] = useState<string>('');
  const [suburb, setSuburb] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [service, setService] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [buttonMessage, setButtonMessage] = useState<string>('Send Message');
  const [success, setSuccess] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  const validateInputs = (): Errors => {
    let errors: Errors = {};
    if (!name) errors.name = 'Name is required';
    if (!streetAddress) errors.streetAddress = 'Street Address is required';
    if (!suburb) errors.suburb = 'Suburb is required';
    if (!emailAddress) errors.emailAddress = 'Email is required';
    if (!mobileNumber) errors.mobileNumber = 'Mobile Number is required';
    if (!service) errors.service = 'Service is required';
    if (!details) errors.details = 'Details are required';
    return errors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      setButtonMessage('Sending...');
      axios
        .post('/api/send-mail', {
          name: name,
          streetAddress: streetAddress,
          suburb: suburb,
          email: emailAddress,
          mobileNumber: mobileNumber,
          service: service,
          details: details,
        })
        .then((res) => {
          setName('');
          setStreetAddress('');
          setSuburb('');
          setEmailAddress('');
          setMobileNumber('');
          setService('');
          setDetails('');
          setButtonMessage('Send Message');
          setSuccess(true);
          console.log('success');
          console.log(res.data);
        })
        .catch((err) => {
          console.log('error');
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value);
  };

  return (
    <div id={'quote'} className={`p-8 md:p-16 md:px-52`}>
      <SuccessMessage
        visible={success}
        onClose={() => {
          setSuccess(false);
          location.href = '/';
        }}
      />
      <h1 className={`text-4xl font-bold text-center`}>
        Get your <span className={`text-[#E3B04A]`}>FREE</span> Cleaning Quote
      </h1>
      <div className={`flex md:flex-row flex-col items-center justify-center gap-8 mt-5`}>
        <form action={`#`} className={`flex flex-col bg-[#2a2a270d] max-w-[50em] flex-1 w-full p-10 rounded-xl gap-5 shadow items-center`} onSubmit={handleSubmit}>
          <div className="relative w-full">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Your name
            </label>
            <input value={name} onChange={handleChange(setName)} type="text" id="name" className={`bg-${name ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.name && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${name && (errors.name = '')}`} placeholder="John" />
            {errors.name && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.name}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-900">
              Street Address
            </label>
            <input value={streetAddress} onChange={handleChange(setStreetAddress)} type="text" id="streetAddress" className={`bg-${streetAddress ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.streetAddress && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${streetAddress && (errors.streetAddress = '')}`} placeholder="123 Main St" />
            {errors.streetAddress && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.streetAddress}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="suburb" className="block text-sm font-medium text-gray-900">
              Suburb
            </label>
            <input value={suburb} onChange={handleChange(setSuburb)} type="text" id="suburb" className={`bg-${suburb ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.suburb && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${suburb && (errors.suburb = '')}`} placeholder="Downtown" />
            {errors.suburb && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.suburb}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-900">
              Email
            </label>
            <input value={emailAddress} onChange={handleChange(setEmailAddress)} type="email" id="emailAddress" className={`bg-${emailAddress ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.emailAddress && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${emailAddress && (errors.emailAddress = '')}`} placeholder="john.doe@example.com" />
            {errors.emailAddress && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.emailAddress}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-900">
              Mobile Number
            </label>
            <input value={mobileNumber} onChange={handleChange(setMobileNumber)} type="tel" id="mobileNumber" className={`bg-${mobileNumber ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.mobileNumber && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${mobileNumber && (errors.mobileNumber = '')}`} placeholder="123-456-7890" />
            {errors.mobileNumber && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.mobileNumber}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="service" className="block text-sm font-medium text-gray-900">
              Service Required
            </label>
            <input value={service} onChange={handleChange(setService)} type="text" id="service" className={`bg-${service ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 ${errors.service && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${service && (errors.service = '')}`} placeholder="Service required" />
            {errors.service && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.service}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <label htmlFor="details" className="block text-sm font-medium text-gray-900">
              Please provide any other relevant details
            </label>
            <textarea value={details} onChange={handleChange(setDetails)} id="details" className={`bg-${details ? 'green' : 'red'}-50 border text-sm rounded-lg block w-full p-2.5 h-24 ${errors.details && 'border-red-500 text-red-900 bg-red-100 placeholder-red-700'} ${details && (errors.details = '')}`} placeholder="Details" />
            {errors.details && (
              <p className="mt-2 text-sm text-red-600">
                <span className="font-medium">Oh, snap!</span> {errors.details}
              </p>
            )}
          </div>

          <button className={`bg-[#2A2A27] rounded-md max-w-64 w-full p-3 text-white`} type={`submit`}>
            {buttonMessage}
          </button>
        </form>
      </div>
    </div>
  );
};
