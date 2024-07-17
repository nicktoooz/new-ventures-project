'use client';
import Image from 'next/image';

import aboutUs from '../../../public/about-us.svg';

export default function AboutUs() {
  return (
    <>
      <div className="py-10">
        <h1 className={`text-4xl  font-bold text-center`}>
          <span className="text-[#E3B04A]">About</span> Us
        </h1>
        <div className="flex max-w-[70em] m-auto items-center gap-8 px-8 flex-col-reverse md:flex-row justify-center">
          <div className="">
            <h1 className="text-2xl font-semibold">Don Denciong Cleaning Services:</h1>
            <h1 className="text-2xl font-semibold">
              Where <span className={`text-[#E3B04A]`}>Cleanliness</span> Meets Excellence!
            </h1>
            <p className={`mt-4`}>At Don Denciong Cleaning Services, we pride ourselves on delivering top-notch cleaning solutions tailored to meet your specific needs. Our team brings decades of cleaning expertise to your doorstep. Our commitment to excellence and passion for cleanliness ensure that every space we touch is left spotless, hygienic, and inviting. We aim to build lasting relationships with our clients through reliable, high-quality cleaning solutions.</p>
            <button onClick={() => (location.href = '/#our-services')} className={`bg-[#2A2A27] text-white rounded px-8 py-2 mt-4`}>
              View Services
            </button>
          </div>
          <Image src={aboutUs} alt={''} className={`aspect-auto mt-8 w-96`} />
        </div>
      </div>
    </>
  );
}
